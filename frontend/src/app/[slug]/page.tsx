import { notFound } from "next/navigation";
import { BlogPage } from "../_components/blog/blog";
import { MemberSpecialtyPage } from "../_components/member-specialties/member-specialties";
import { getMemberSpecialtyPage } from "../_utilities/member-specialties/member-specialties";
import ContentPageTemplate from "@/components/content-page-template";
import { PageSlug, pages } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (slug === "blog") {
    return { title: "Healthy Living Blog and Industry News | WholeHealth Living" };
  }

  const specialtyPage = getMemberSpecialtyPage(slug);
  if (specialtyPage) {
    return { title: `${specialtyPage.title} Benefits for Members | WholeHealth Living` };
  }

  const page = pages[slug as PageSlug];
  return page ? { title: `${page.title} | WholeHealth Living` } : {};
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "blog") {
    return <BlogPage />;
  }

  const specialtyPage = getMemberSpecialtyPage(slug);
  if (specialtyPage) {
    return <MemberSpecialtyPage page={specialtyPage} />;
  }

  const page = pages[slug as PageSlug];

  if (!page) {
    notFound();
  }

  return <ContentPageTemplate page={page} />;
}
