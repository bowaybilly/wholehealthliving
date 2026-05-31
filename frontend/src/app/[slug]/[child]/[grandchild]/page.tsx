import { notFound } from "next/navigation";
import ContentPageTemplate from "@/components/content-page-template";
import { nestedPages, NestedPagePath } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string; child: string; grandchild: string }>;
};

export function generateStaticParams() {
  return Object.keys(nestedPages)
    .filter((path) => path.split("/").length === 3)
    .map((path) => {
      const [slug, child, grandchild] = path.split("/");
      return { slug, child, grandchild };
    });
}

export async function generateMetadata({ params }: Props) {
  const { slug, child, grandchild } = await params;
  const page = nestedPages[`${slug}/${child}/${grandchild}` as NestedPagePath];
  return page ? { title: `${page.title} | WholeHealth Living` } : {};
}

export default async function DeepNestedContentPage({ params }: Props) {
  const { slug, child, grandchild } = await params;
  const page = nestedPages[`${slug}/${child}/${grandchild}` as NestedPagePath];

  if (!page) {
    notFound();
  }

  return <ContentPageTemplate page={page} />;
}