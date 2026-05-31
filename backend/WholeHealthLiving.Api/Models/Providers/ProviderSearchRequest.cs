namespace WholeHealthLiving.Api.Models.Providers;

public sealed record ProviderSearchRequest(
    string ZipCode,
    double Latitude,
    double Longitude,
    string? PlanType,
    string LineOfBusiness,
    string ClientDisplayName,
    object WhlSpecialtyId,
    int MileageRadius,
    string? PractitionerFirstName,
    string? PractitionerLastName)
{
    public IReadOnlyList<string> Validate()
    {
        var errors = new List<string>();

        if (string.IsNullOrWhiteSpace(ZipCode) || ZipCode.Length != 5 || !ZipCode.All(char.IsDigit))
        {
            errors.Add("Zip code must be five digits.");
        }

        if (MileageRadius is < 1 or > 100)
        {
            errors.Add("Mileage radius must be between 1 and 100.");
        }

        if (string.IsNullOrWhiteSpace(LineOfBusiness))
        {
            errors.Add("Line of business is required.");
        }

        if (string.IsNullOrWhiteSpace(ClientDisplayName))
        {
            errors.Add("Health plan is required.");
        }

        if (WhlSpecialtyId is null)
        {
            errors.Add("Specialty is required.");
        }

        return errors;
    }
}
