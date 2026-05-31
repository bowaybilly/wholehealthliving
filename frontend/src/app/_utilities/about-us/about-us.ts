import type { AccreditationSeal } from "../../_types/about-us/about-us";

export const aboutUsParagraphs = [
  "WholeHealth Living provides health plan members with the ability to manage their health and well-being by connecting our network of integrative health practitioners to the broader medical community. Delivering conservative, cost-effective care options, and optimizing the member experience.",
  "For 30 years, our multi-disciplinary clinical team has guided the development of our integrative health solutions, which deliver high-quality, medically necessary care, resulting in appropriate cost containment.",
  "At WholeHealth Living, we promote nonpharmacologic options earlier in the care continuum because they are less invasive and can be expensive. Also, they typically pose a lower risk than drugs or surgery and can help reduce opioid use. We recognize that musculoskeletal conditions are a major contributor to medical spend, and we are committed to bridging the gap between members, practitioners, health plans, and the broader medical community to increase the understanding and acceptance of integrative health services.",
  "We partner with regional and national health plans, managing benefits for Medicaid, Commercial, and Medicare members spanning a variety of specialties that include chiropractic, acupuncture, physical therapy, occupational therapy, speech therapy, therapeutic massage, and naturopathy.",
] as const;

export const accreditationSeals: readonly AccreditationSeal[] = [
  {
    alt: "WholeHealth Living NCQA CVO accreditation seal",
    src: "/images/ncqa-cvo-accreditation.jpg",
  },
  {
    alt: "WholeHealth Living URAC accreditation seal",
    src: "/images/urac-um-accreditation.jpg",
  },
];
