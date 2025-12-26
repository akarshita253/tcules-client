import { DocumentNode } from 'graphql';
import { strapiClient } from "@/lib/apolloClient";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function strapiRequest<T = unknown>(
  query: DocumentNode, 
  variables?: Record<string, unknown>
): Promise<T> {
  try {
    const data = await strapiClient.request(query, variables) as T;
    return data;
  } catch (error) {
    throw new Error(`Strapi request failed: ${String(error)}`);
  }
}

export function formatDate(dateString: string | null | undefined) {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

