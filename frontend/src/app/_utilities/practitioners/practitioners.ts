import type { NetworkBenefit } from "../../_types/practitioners/practitioners";

export const recruitmentSpecialties = [
  "Acupuncturists",
  "Chiropractors",
  "Massage Therapists",
  "Naturopathic Doctors",
  "Occupational Therapists",
  "Physical Therapists",
  "Speech Therapists",
] as const;

export const networkBenefits: readonly NetworkBenefit[] = [
  {
    strong: "Integrative Health Network -",
    body: " Access patients from national health plans and partner with an industry expert to help you navigate managed care.",
    href: "/practitioners/integrative-health-solutions-network",
  },
  {
    strong: "Choices by WholeHealth Living Network® -",
    body: " A national network of integrative health practitioners, plus lifestyle products and services that provide eligible patients with discounts at 20% or more to help eliminate the cost barrier.",
    href: "/practitioners/choices",
  },
];
