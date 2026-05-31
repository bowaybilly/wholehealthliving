import type { AudiencePanel, BenefitLink } from "../../_types/marketing/marketing";

export const audiencePanels: readonly AudiencePanel[] = [
  {
    title: "Members",
    href: "/members",
    summary: "Connect to practitioners to help you live a happier and healthier life.",
    backgroundColor: "#3176b9",
    hoverColor: "#022f47",
  },
  {
    title: "Health Plans",
    href: "/health-plans",
    summary: "Enhance health while increasing member satisfaction with cost-effective health solutions.",
    backgroundColor: "#015e96",
    hoverColor: "#022f47",
  },
  {
    title: "Practitioners",
    href: "/practitioners",
    summary: "Build your practice with the leading network of integrative health practitioners.",
    backgroundColor: "#01476f",
    hoverColor: "#022f47",
  },
  {
    title: "Providers",
    href: "/providers",
    summary: "Primary Care Providers refer your patients to credentialed network practitioners.",
    backgroundColor: "#022f47",
    hoverColor: "#239dd8",
  },
];

export const benefitColumns: readonly (readonly BenefitLink[])[] = [
  [
    { label: "Acupuncture", href: "/health-plans/acupuncture/" },
    { label: "Chiropractic", href: "/health-plans/chiropractic/" },
    { label: "Physical Therapy", href: "/health-plans/physical-therapy/" },
    { label: "Massage Therapy", href: "/health-plans/massage-therapy/" },
  ],
  [
    { label: "Occupational Therapy", href: "/health-plans/occupational-therapy/" },
    { label: "Speech Therapy", href: "/health-plans/speech-therapy/" },
    { label: "Naturopathy", href: "/health-plans/naturopathy/" },
  ],
];

export const citations = [
  "Dowell D, Haegerich TM, Chou R. CDC guideline for prescribing opioids for chronic pain. MMWR Recommendations and Reports. 2016;65(1):1-49. doi:10.15585/mmwr.rr6501e1er",
  "Press release CMS finalizes decision to cover Acupuncture for Chronic Low Back Pain for Medicare beneficiaries. (n.d.). Retrieved from https://www.cms.gov/newsroom/press-releases/cms-finalizes-decision-cover-acupuncture-chronic-low-back-pain-medicare-beneficiaries",
] as const;
