using WholeHealthLiving.Api.Models.Content;
using WholeHealthLiving.Api.Repositories;

namespace WholeHealthLiving.Api.Services;

public sealed class ContentService(IContentRepository contentRepository) : IContentService
{
    public IReadOnlyList<PageSummary> GetPages() => contentRepository.GetPages();

    public PageSummary? GetPage(string slug) => contentRepository.GetPage(slug);
}
