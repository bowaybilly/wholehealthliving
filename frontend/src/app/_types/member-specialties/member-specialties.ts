export type MemberSpecialtySlug =
  | "acupuncture"
  | "chiropractic"
  | "massage"
  | "naturopathy"
  | "occupational-therapy"
  | "speech-therapy"
  | "physical-therapy";

export type MemberSpecialtyListItem = {
  label?: string;
  text: string;
  marker?: string;
};

export type MemberSpecialtySection = {
  eyebrow: string;
  heading: string;
  paragraphs?: string[];
  items?: MemberSpecialtyListItem[];
  footnotes?: string[];
};

export type MemberSpecialtyPageData = {
  slug: MemberSpecialtySlug;
  title: string;
  description: string;
  ctaLabel: string;
  heroClass: string;
  primaryImage: string;
  secondaryImage?: string;
  intro: MemberSpecialtySection;
  treatment: MemberSpecialtySection;
  quote?: string;
};
