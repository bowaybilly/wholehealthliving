using WholeHealthLiving.Api.Models.Providers;

namespace WholeHealthLiving.Api.Services;

public interface IProviderService
{
    IReadOnlyList<string> GetClientNames();

    IReadOnlyList<string> GetLinesOfBusiness();

    IReadOnlyList<string> GetPlanTypes();

    IReadOnlyList<Specialty> GetSpecialties();

    ProviderSearchResponse Search(ProviderSearchRequest request);
}
