using WholeHealthLiving.Api.Models.Providers;
using WholeHealthLiving.Api.Utilities;

namespace WholeHealthLiving.Api.Repositories;

public sealed class ProviderRepository : IProviderRepository
{
    private readonly IReadOnlyList<Specialty> _specialties =
    [
        new(1, "Acupuncture"),
        new(2, "Chiropractic"),
        new(3, "Massage Therapy"),
        new(4, "Naturopathy"),
        new(5, "Physical Therapy"),
        new(6, "Occupational Therapy"),
        new(7, "Speech Therapy")
    ];

    private readonly IReadOnlyList<ProviderLocation> _providers =
    [
        new("sample-1", "0038Z00003ZI8x0QAD", "Jung", "Woochul", "115 W 30th St RM 500B", "New York", "NY", "10001", "(212) 470-0360", "Midtown Acupuncture, PC", null, 40.747854, -73.990532, [new(1, "Acupuncture")], "English", "Male", false),
        new("sample-2", "0038Z00003ZI7wJQAT", "Chan-Vanklein", "Petson", "19 W 21st St RM 904", "New York", "NY", "10010", "(347) 903-7059", "Petson Chan", null, 40.741038, -73.991710, [new(1, "Acupuncture")], "English; Chinese", "Male", false),
        new("sample-3", "0038Z00003ZI8woQAD", "Luong", "Gary", "315 W 57th St STE 302", "New York", "NY", "10019", "(212) 265-2052", "Chung Ying Physical Therapy and Acupuncture PC", null, 40.767562, -73.983660, [new(1, "Acupuncture"), new(5, "Physical Therapy")], "English", "Male", false),
        new("sample-4", "0038Z00003ZI9FGQA1", "Liang", "Jessica", "8136 Baxter Ave STE 2F", "Elmhurst", "NY", "11373", "(929) 231-7888", "Jessica Liang Acupuncture PC", null, 40.745976, -73.883378, [new(1, "Acupuncture")], "English", "Female", true)
    ];

    public IReadOnlyList<Specialty> GetSpecialties() => _specialties;

    public IReadOnlyList<string> GetClientNames() =>
        ["Aetna", "CarePlus", "Cascade Care", "Coordinated Care", "Harvard Pilgrim", "Humana", "Kaiser", "TriWest", "UCLA"];

    public IReadOnlyList<string> GetLinesOfBusiness() =>
        ["Commercial", "Government", "Medicaid", "Medicare"];

    public IReadOnlyList<string> GetPlanTypes() =>
        ["EPO", "HMO", "HMO/PPO", "POS", "PPO"];

    public ProviderSearchResponse Search(ProviderSearchRequest request)
    {
        var specialtyId = int.TryParse(request.WhlSpecialtyId?.ToString(), out var parsed) ? parsed : 0;

        var results = _providers
            .Where(provider => specialtyId == 0 || provider.Specialties.Any(specialty => specialty.WhlSpecialtyId == specialtyId))
            .Where(provider => string.IsNullOrWhiteSpace(request.PractitionerFirstName) || provider.FirstName.Contains(request.PractitionerFirstName, StringComparison.OrdinalIgnoreCase))
            .Where(provider => string.IsNullOrWhiteSpace(request.PractitionerLastName) || provider.LastName.Contains(request.PractitionerLastName, StringComparison.OrdinalIgnoreCase))
            .Select(provider => provider with
            {
                Distance = Geo.DistanceMiles(request.Latitude, request.Longitude, provider.Latitude, provider.Longitude)
            })
            .Where(provider => provider.Distance <= request.MileageRadius)
            .OrderBy(provider => provider.Distance)
            .ToList();

        return new ProviderSearchResponse(results, request.MileageRadius, request.MileageRadius, false, null);
    }
}
