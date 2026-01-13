import { DocumentNode } from 'graphql';
import { strapiClient } from "@/lib/apolloClient";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(isoDate: string): string {
  const now = Date.now();
  const past = new Date(isoDate).getTime();

  const seconds = Math.floor((now - past) / 1000);

  if (seconds < 60) return `${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return `${years} years ago`;
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
