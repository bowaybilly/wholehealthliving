export type HealthPlanSubmenuPath =
  | "health-plans/integrative-health-solutions"
  | "health-plans/acupuncture"
  | "health-plans/chiropractic"
  | "health-plans/massage-therapy"
  | "health-plans/naturopathy"
  | "health-plans/occupational-therapy"
  | "health-plans/speech-therapy"
  | "health-plans/physical-therapy";

export type HealthPlanBenefit = {
  label: string;
  text: string;
  marker?: string;
};

export type HealthPlanSpecialtyPageData = {
  kind: "specialty";
  path: HealthPlanSubmenuPath;
  title: string;
  description: string;
  heroClass: string;
  image: string;
  heading: string;
  intro?: string;
  benefits: HealthPlanBenefit[];
  footnotes?: string[];
  quote?: string;
  quoteFootnote?: string;
};

export type HealthPlanCoreService = {
  label: string;
  text: string;
  subitems?: string[];
};

export type HealthPlanSpecialtyLink = {
  label: string;
  href: string;
  text: string;
};

export type HealthPlanProductsPageData = {
  kind: "products";
  path: "health-plans/integrative-health-solutions";
  title: string;
  description: string;
  heroImage: string;
  sidebarImage: string;
  lead: string;
  summary: string;
  services: HealthPlanCoreService[];
  specialtiesIntro: string;
  specialties: HealthPlanSpecialtyLink[];
  footnote: string;
};

export type HealthPlanSubmenuPageData = HealthPlanProductsPageData | HealthPlanSpecialtyPageData;

export type HealthPlanSubmenuPageProps = {
  page: HealthPlanSubmenuPageData;
};

export type HealthPlanSpecialtyPageProps = {
  page: HealthPlanSpecialtyPageData;
};

export type HealthPlanProductsPageProps = {
  page: HealthPlanProductsPageData;
};

export type HealthPlanContactColumnProps = {
  products?: boolean;
};

export type HealthPlanFootnotesProps = {
  notes?: string[];
};
