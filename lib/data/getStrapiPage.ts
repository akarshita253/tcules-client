import { cache } from "react";
import { strapiRequest } from "@/lib/utils";
import { DocumentNode } from "graphql";

export const getStrapiPage = cache(
  async <TResponse, TResult>({
    query,
    variables,
    extract,
  }: {
    query: DocumentNode;
    variables?: Record<string, unknown>;
    extract: (data: TResponse) => TResult | null;
  }): Promise<TResult | null> => {
    const response = await strapiRequest<TResponse>(query, variables);
    return extract(response);
  }
);
