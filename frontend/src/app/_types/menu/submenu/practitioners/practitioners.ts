export type PractitionerSubmenuPath =
  | "practitioners/integrative-health-solutions-network"
  | "practitioners/choices";

export type PractitionerContentSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type PractitionerSubmenuPageData = {
  path: PractitionerSubmenuPath;
  title: string;
  description: string;
  image: string;
  sections: PractitionerContentSection[];
  recruitmentHeading: string;
  recruitmentCopy: string;
  specialties: string[];
  footnote: string;
};

export type PractitionerSubmenuPageProps = {
  page: PractitionerSubmenuPageData;
};

export type PractitionerContentSectionProps = {
  section: PractitionerContentSection;
};
