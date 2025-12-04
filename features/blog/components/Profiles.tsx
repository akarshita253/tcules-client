import Image from "next/image";
import { ProfilesProps } from "../types/blogTypes";

const STRAPI_URL = process.env.STRAPI_URL;

const Profiles = ({ profiles }: ProfilesProps) => {
  if (!profiles || profiles.length === 0) {
    return <p>No profiles available.</p>;
  }

  return (
    <div className=" col-span-3 px-3">
      <small className="uppercase font-medium">Authors</small>
      <div className="my-8 flex flex-row flex-wrap md:flex-nowrap md:flex-col gap-6">
        {profiles.filter(Boolean).map((profile, index) => {
          const img = profile?.profilePicture?.[0];
          const url = img?.url ? `${STRAPI_URL}${img.url}` : null;

          return (
            <div key={profile?.id ?? index} className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                {url ? (
                  <Image
                    src={url}
                    alt={
                      img?.alternativeText || profile?.name || "Profile image"
                    }
                    width={160}
                    height={160}
                    loading="lazy"
                    unoptimized
                  />
                ) : null}
              </div>

              <div>
                <h4 className="text-md font-semibold">
                  {profile?.name || "Unknown"}
                </h4>
                <p className="text-gray-800 text-sm font-medium uppercase">
                  {profile?.designation || "No designation"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profiles;
