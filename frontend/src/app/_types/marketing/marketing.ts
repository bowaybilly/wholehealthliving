import type { ReactNode } from "react";

export type AudiencePanel = {
  title: string;
  href: string;
  summary: string;
  backgroundColor: string;
  hoverColor: string;
};

export type BenefitLink = {
  label: string;
  href: string;
};

export type ImagePanelAlignment = "left" | "right";

export type ImageCopyPanelProps = {
  eyebrow?: string;
  imageUrl: string;
  title: string;
  body: ReactNode;
  align?: ImagePanelAlignment;
  flush?: boolean;
  wide?: boolean;
  homeHero?: boolean;
  headingComponent?: "h1" | "h2";
  children?: ReactNode;
};

export type AudiencePanelsProps = {
  panels: readonly AudiencePanel[];
};

export type BenefitColumnsProps = {
  columns: readonly (readonly BenefitLink[])[];
};
