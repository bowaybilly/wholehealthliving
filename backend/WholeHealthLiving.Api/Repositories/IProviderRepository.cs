using WholeHealthLiving.Api.Models.Providers;

namespace WholeHealthLiving.Api.Repositories;

public interface IProviderRepository
{
    IReadOnlyList<string> GetClientNames();

    IReadOnlyList<string> GetLinesOfBusiness();

    IReadOnlyList<string> GetPlanTypes();

    IReadOnlyList<Specialty> GetSpecialties();

    ProviderSearchResponse Search(ProviderSearchRequest request);
}
