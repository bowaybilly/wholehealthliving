namespace WholeHealthLiving.Api.Models.Providers;

public sealed record ProviderSearchResponse(
    IReadOnlyList<ProviderLocation> Items,
    int RequestedRadiusMiles,
    int UsedRadiusMiles,
    bool RadiusWasExpanded,
    string? ExpansionMessage);
