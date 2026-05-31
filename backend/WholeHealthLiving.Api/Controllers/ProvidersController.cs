using Microsoft.AspNetCore.Mvc;
using WholeHealthLiving.Api.Models.Providers;
using WholeHealthLiving.Api.Services;

namespace WholeHealthLiving.Api.Controllers;

[ApiController]
[Route("api/provider")]
public sealed class ProvidersController(IProviderService providerService) : ControllerBase
{
    [HttpGet("specialties")]
    public IActionResult GetSpecialties() => Ok(providerService.GetSpecialties());

    [HttpGet("client-names")]
    public IActionResult GetClientNames() => Ok(providerService.GetClientNames());

    [HttpGet("lines-of-business")]
    public IActionResult GetLinesOfBusiness() => Ok(providerService.GetLinesOfBusiness());

    [HttpGet("plan-types")]
    public IActionResult GetPlanTypes() => Ok(providerService.GetPlanTypes());

    [HttpPost("locations")]
    public IActionResult SearchLocations(ProviderSearchRequest request)
    {
        var validation = request.Validate();
        if (validation.Count > 0)
        {
            return BadRequest(new { errors = validation });
        }

        return Ok(providerService.Search(request));
    }
}
