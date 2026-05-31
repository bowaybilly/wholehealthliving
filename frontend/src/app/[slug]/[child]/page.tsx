import { notFound } from "next/navigation";
import { HealthPlanSubmenuPage } from "../../_components/menu/submenu/health-plans/health-plans";
import { PractitionerSubmenuPage } from "../../_components/menu/submenu/practitioners/practitioners";
import { getHealthPlanSubmenuPage } from "../../_utilities/menu/submenu/health-plans/health-plans";
import { getPractitionerSubmenuPage } from "../../_utilities/menu/submenu/practitioners/practitioners";
import ContentPageTemplate from "@/components/content-page-template";
import { nestedPages, NestedPagePath } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string; child: string }>;
};

export function generateStaticParams() {
  return Object.keys(nestedPages)
    .filter((path) => path.split("/").length === 2)
    .map((path) => {
      const [slug, child] = path.split("/");
      return { slug, child };
    });
}

export async function generateMetadata({ params }: Props) {
  const { slug, child } = await params;
  const practitionerPage = getPractitionerSubmenuPage(`${slug}/${child}`);
  if (practitionerPage) {
    return { title: `${practitionerPage.title} | WholeHealth Living` };
  }

  const healthPlanPage = getHealthPlanSubmenuPage(`${slug}/${child}`);
  if (healthPlanPage) {
    return { title: `${healthPlanPage.title} | WholeHealth Living` };
  }

  const page = nestedPages[`${slug}/${child}` as NestedPagePath];
  return page ? { title: `${page.title} | WholeHealth Living` } : {};
}

export default async function NestedContentPage({ params }: Props) {
  const { slug, child } = await params;
  const practitionerPage = getPractitionerSubmenuPage(`${slug}/${child}`);
  if (practitionerPage) {
    return <PractitionerSubmenuPage page={practitionerPage} />;
  }

  const healthPlanPage = getHealthPlanSubmenuPage(`${slug}/${child}`);
  if (healthPlanPage) {
    return <HealthPlanSubmenuPage page={healthPlanPage} />;
  }

  const page = nestedPages[`${slug}/${child}` as NestedPagePath];

  if (!page) {
    notFound();
  }

  return <ContentPageTemplate page={page} />;
}
