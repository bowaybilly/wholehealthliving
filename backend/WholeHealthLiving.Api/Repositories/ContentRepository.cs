using WholeHealthLiving.Api.Models.Content;

namespace WholeHealthLiving.Api.Repositories;

public sealed class ContentRepository : IContentRepository
{
    private readonly IReadOnlyList<PageSummary> _pages =
    [
        new("/", "Home", "Live Life Well", "Decreasing physical pain and transforming healthcare through integrative health solutions.", "Members, health plans, practitioners, and providers can quickly find the right WholeHealth Living path."),
        new("/members", "Members", "Be Well", "Connect to practitioners who can help you live a happier and healthier life.", "Find practitioners and explore covered physical medicine and integrative health benefits."),
        new("/health-plans", "Health Plans", "Benefits for Health Plan Members", "Enhance health while increasing member satisfaction with cost-effective health solutions.", "Build integrated benefits across acupuncture, chiropractic, massage, naturopathy, physical therapy, occupational therapy, and speech therapy."),
        new("/practitioners", "Practitioners", "Integrative Health Practitioners", "Build your practice with a national network of integrative health practitioners.", "Join networks that connect qualified practitioners with members seeking care."),
        new("/providers", "Providers", "Healthcare Providers", "Refer patients to credentialed network practitioners.", "Support care plans with non-pharmacologic physical medicine options."),
        new("/find-a-practitioner", "Find a Practitioner", "Find a Practitioner", "Search by health plan, specialty, line of business, ZIP code, and radius.", "Verify benefits with your health plan before receiving care."),
        new("/about-us", "About Us", "WholeHealth Living for Better Health", "For over 30 years, WholeHealth Living has connected people with physical medicine and integrative health solutions.", "Our mission is to make access to credentialed care easier and more cost-effective."),
        new("/contact", "Contact", "Connect with Us", "Tell us how we can help.", "Use the contact form for member, practitioner, provider, and health plan questions.")
    ];

    public IReadOnlyList<PageSummary> GetPages() => _pages;

    public PageSummary? GetPage(string slug)
    {
        var normalized = slug.Trim('/').ToLowerInvariant();
        return _pages.FirstOrDefault(page => page.Path.Trim('/').Equals(normalized, StringComparison.OrdinalIgnoreCase));
    }
}
