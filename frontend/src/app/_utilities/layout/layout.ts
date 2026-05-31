import type { NavItem } from "../../_types/layout/layout";

export const navItems: NavItem[] = [
  {
    label: "Members",
    href: "/members",
    children: [
      { label: "Find a Practitioner", href: "/find-a-practitioner" },
      {
        label: "Specialities",
        children: [
          { label: "Acupuncture", href: "/acupuncture" },
          { label: "Chiropractic Care", href: "/chiropractic" },
          { label: "Massage Therapy", href: "/massage" },
          { label: "Naturopathy", href: "/naturopathy" },
          { label: "Occupational Therapy", href: "/occupational-therapy" },
          { label: "Speech Therapy", href: "/speech-therapy" },
          { label: "Physical Therapy", href: "/physical-therapy" },
        ],
      },
    ],
  },
  {
    label: "Practitioners",
    href: "/practitioners",
    children: [
      { label: "Integrative Health Solutions", href: "/practitioners/integrative-health-solutions-network" },
      { label: "Choices by WholeHealth Living", href: "/practitioners/choices" },
    ],
  },
  { label: "Providers", href: "/providers" },
  {
    label: "Health Plans",
    href: "/health-plans",
    children: [
      { label: "Products", href: "/health-plans/integrative-health-solutions" },
      {
        label: "Specialities",
        children: [
          { label: "Acupuncture", href: "/health-plans/acupuncture" },
          { label: "Chiropractic Care", href: "/health-plans/chiropractic" },
          { label: "Massage Therapy", href: "/health-plans/massage-therapy" },
          { label: "Naturopathy", href: "/health-plans/naturopathy" },
          { label: "Occupational Therapy", href: "/health-plans/occupational-therapy" },
          { label: "Speech Therapy", href: "/health-plans/speech-therapy" },
          { label: "Physical Therapy", href: "/health-plans/physical-therapy" },
        ],
      },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Our Approach", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
