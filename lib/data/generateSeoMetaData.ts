import { Metadata } from "next";
import { formatMetadata, StrapiSeoComponent } from "@/lib/seo";

export async function generateSeoMetadata({
  getSeo,
}: {
  getSeo: () => Promise<StrapiSeoComponent | null | undefined>;
}): Promise<Metadata> {
  const seo = await getSeo();
  return formatMetadata(seo);
}
