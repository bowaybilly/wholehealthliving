import type { MemberBenefitLink } from "../../_types/members/members";

export const memberBenefitColumns: readonly (readonly MemberBenefitLink[])[] = [
  [
    { label: "Acupuncture", href: "/acupuncture" },
    { label: "Chiropractic", href: "/chiropractic" },
    { label: "Physical Therapy", href: "/physical-therapy" },
    { label: "Massage Therapy", href: "/massage" },
  ],
  [
    { label: "Occupational Therapy", href: "/occupational-therapy" },
    { label: "Speech Therapy", href: "/speech-therapy" },
    { label: "Naturopathy", href: "/naturopathy" },
  ],
];
