namespace WholeHealthLiving.Api.Models.Content;

public sealed record PageSummary(
    string Path,
    string Title,
    string Heading,
    string Summary,
    string Body);
