import Link from "next/link";
import { HeadingAndTimeProps } from "../types/blogTypes";
import { formatDate } from "@/lib/utils";



const HeadingAndTime = ({ title, createdAt, updatedAt }: HeadingAndTimeProps) => {
  return (
    <div className="pt-12">
      <Link href="/blogs">Blogs</Link>
      <div className="my-8 border-b border-neutral-400">
        <h1 className="text-center my-8 text-neutral-800">
          {title}
        </h1>
        <div className="py-6">
          <div className="flex gap-2 items-center font-semibold text-neutral-600">
            <span>{formatDate(createdAt)}</span>
            <span>.</span>
            <span>11 mins</span>
          </div>
          <p className="text-neutral-500">
            <small>Last updated on {formatDate(updatedAt)}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingAndTime;
