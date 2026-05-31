using Microsoft.AspNetCore.Mvc;

namespace WholeHealthLiving.Api.Controllers;

[ApiController]
[Route("[controller]")]
public sealed class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() =>
        Ok(new
        {
            status = "ok",
            service = "WholeHealthLiving.Api",
            timestamp = DateTimeOffset.UtcNow
        });
}
