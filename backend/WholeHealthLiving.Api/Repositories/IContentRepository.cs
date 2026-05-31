using WholeHealthLiving.Api.Models.Content;

namespace WholeHealthLiving.Api.Repositories;

public interface IContentRepository
{
    IReadOnlyList<PageSummary> GetPages();

    PageSummary? GetPage(string slug);
}
