import Link from "next/link";
import { HeadingAndTimeProps } from "../types/blogTypes";
import { formatDate } from "@/lib/utils";
import Breadcrumbs from "@/components/global/Breadcrumbs";

const HeadingAndTime = ({
  title,
  createdAt,
  updatedAt,
}: HeadingAndTimeProps) => {
  return (
    <div className="pt-16">
      <Breadcrumbs />
      <div className="md:my-12 my-9">
        <div className="text-label-2xs text-neutral-700 flex gap-2 items-center">
          <p className="px-2 py-1 uppercase border border-neutral-300 rounded-2xl">
            ai
          </p>
          <p className="px-2 py-1 uppercase border border-neutral-300 rounded-2xl">
            saas
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-heading-sm">{title}</h1>
          <div className="py-6">
            <div className="flex gap-2 items-center text-label-xs text-neutral-600">
              <span>{formatDate(createdAt)}</span>
              <span>.</span>
              <span>11 mins</span>
            </div>
            <p className="text-neutral-500 text-label-3xs">
              <small>Last updated on {formatDate(updatedAt)}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingAndTime;
