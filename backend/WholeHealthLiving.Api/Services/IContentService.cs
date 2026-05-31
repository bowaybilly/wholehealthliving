using WholeHealthLiving.Api.Models.Content;

namespace WholeHealthLiving.Api.Services;

public interface IContentService
{
    IReadOnlyList<PageSummary> GetPages();

    PageSummary? GetPage(string slug);
}
