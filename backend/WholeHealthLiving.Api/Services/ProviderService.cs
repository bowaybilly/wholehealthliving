using WholeHealthLiving.Api.Models.Providers;
using WholeHealthLiving.Api.Repositories;

namespace WholeHealthLiving.Api.Services;

public sealed class ProviderService(IProviderRepository providerRepository) : IProviderService
{
    public IReadOnlyList<Specialty> GetSpecialties() => providerRepository.GetSpecialties();

    public IReadOnlyList<string> GetClientNames() => providerRepository.GetClientNames();

    public IReadOnlyList<string> GetLinesOfBusiness() => providerRepository.GetLinesOfBusiness();

    public IReadOnlyList<string> GetPlanTypes() => providerRepository.GetPlanTypes();

    public ProviderSearchResponse Search(ProviderSearchRequest request) => providerRepository.Search(request);
}
