using Microsoft.AspNetCore.Mvc;
using WholeHealthLiving.Api.Services;

namespace WholeHealthLiving.Api.Controllers;

[ApiController]
[Route("api/pages")]
public sealed class PagesController(IContentService contentService) : ControllerBase
{
    [HttpGet]
    public IActionResult GetPages() => Ok(contentService.GetPages());

    [HttpGet("{slug}")]
    public IActionResult GetPage(string slug)
    {
        var page = contentService.GetPage(slug);
        return page is null ? NotFound() : Ok(page);
    }
}
