import { nestedPages, pages } from "../../../src/lib/content";
import { blogPage } from "../../../src/app/_utilities/blog/blog";
import { healthPlanSubmenuPages } from "../../../src/app/_utilities/menu/submenu/health-plans/health-plans";
import { memberSpecialtyPages } from "../../../src/app/_utilities/member-specialties/member-specialties";
import { practitionerSubmenuPages } from "../../../src/app/_utilities/menu/submenu/practitioners/practitioners";
import { primaryPages } from "./primary-pages";
import type { PageExpectation } from "./page-assertions";

const primaryRoutePaths = new Set(primaryPages.map((page) => page.path));

export const generatedContentPages: readonly PageExpectation[] = Object.entries(pages)
  .map(([slug, page]) => ({
    path: `/${slug}`,
    heading: slug === "blog" ? blogPage.title : memberSpecialtyPages[slug as keyof typeof memberSpecialtyPages]?.title ?? page.heading,
    visibleText: slug === "blog" ? blogPage.description : memberSpecialtyPages[slug as keyof typeof memberSpecialtyPages]?.description ?? page.summary,
  }))
  .filter((page) => !primaryRoutePaths.has(page.path));

export const nestedContentPages: readonly PageExpectation[] = Object.entries(nestedPages).map(([path, page]) => {
  const practitionerPage = practitionerSubmenuPages[path as keyof typeof practitionerSubmenuPages];
  const healthPlanPage = healthPlanSubmenuPages[path as keyof typeof healthPlanSubmenuPages];

  return {
    path: `/${path}`,
    heading: practitionerPage?.title ?? healthPlanPage?.title ?? page.heading,
    visibleText: practitionerPage?.description ?? healthPlanPage?.description ?? page.summary,
  };
});

export const coveredRoutePaths = [
  ...primaryPages.map((page) => page.path),
  ...generatedContentPages.map((page) => page.path),
  ...nestedContentPages.map((page) => page.path),
].sort();

export const expectedRoutePaths = Array.from(
  new Set([
    "/",
    "/find-a-practitioner",
    ...Object.keys(pages).map((slug) => `/${slug}`),
    ...Object.keys(nestedPages).map((path) => `/${path}`),
  ]),
).sort();
