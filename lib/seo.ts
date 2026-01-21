import { Metadata } from "next";

export interface StrapiSeoComponent {
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalURL?: string | null;
  focusString?: string | null;
  robots?: string | null;
  og_graph?: {
    og_title?: string | null;
    og_description?: string | null;
    twitter_card_type?: "summary" | "summary_large_image" | "player" | "app" | string | null;
    og_image?: {
      url: string;
    } | null;
  } | null;
}

export function formatMetadata(seo: StrapiSeoComponent | null | undefined): Metadata {
  if (!seo) {
    return {
      title: "Default Title",
    };
  }

  const title = seo.metaTitle ?? undefined;
  const description = seo.metaDescription ?? undefined;

  const twitterCard = (
    ["summary", "summary_large_image", "player", "app"].includes(seo.og_graph?.twitter_card_type || "")
      ? seo.og_graph?.twitter_card_type
      : "summary_large_image"
  ) as Metadata["twitter"] extends { card: infer T } ? T : never;

  return {
    title: title,
    description: description,
    keywords: seo.focusString ?? undefined,
    alternates: {
      canonical: seo.canonicalURL || undefined,
    },
    robots: seo.robots || "index, follow",
    openGraph: {
      title: seo.og_graph?.og_title || title,
      description: seo.og_graph?.og_description || description,
      url: seo.canonicalURL || undefined,
      type: "website",
      images: seo.og_graph?.og_image?.url ? [{ url: seo.og_graph.og_image.url }] : [],
    },
    twitter: {
      card: twitterCard,
      title: seo.og_graph?.og_title || title,
      description: seo.og_graph?.og_description || description,
    },
  };
}