namespace WholeHealthLiving.Api.Models.Providers;

public sealed record ProviderLocation(
    string Id,
    string ProviderId,
    string LastName,
    string FirstName,
    string Address1,
    string City,
    string State,
    string ZipCode,
    string Phone,
    string OrgName,
    string? Url,
    double Latitude,
    double Longitude,
    IReadOnlyList<Specialty> Specialties,
    string? Language,
    string? Sex,
    bool IsChoices)
{
    public double Distance { get; init; }
}
