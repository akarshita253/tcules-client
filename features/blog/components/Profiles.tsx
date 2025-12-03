import Image from "next/image";
import { ProfilesProps } from "../types/blogTypes";

const STRAPI_URL = process.env.STRAPI_URL;

const Profiles = ({ profiles }: ProfilesProps) => {
  if (!profiles || profiles.length === 0) {
    return <p>No profiles available.</p>;
  }

  return (
    <div className="my-8 md:flex flex-col gap-6 px-3 col-span-3 hidden">
      {profiles
        .filter(Boolean)
        .map((profile, index) => {
          const img = profile?.profilePicture?.[0]; // Assuming first picture
          const url = img?.url ? `${STRAPI_URL}${img.url}` : null;

          return (
            <div key={profile?.id ?? index} className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                {url ? (
                  <Image
                    src={url}
                    alt={img?.alternativeText || profile?.name || "Profile image"}
                    width={160}
                    height={160}
                    loading="lazy"
                    unoptimized
                  />
                ) : null}
              </div>

              <div>
                <h3 className="text-sm font-semibold">{profile?.name || "Unknown"}</h3>
                <p className="text-gray-800 text-xs">{profile?.designation || "No designation"}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Profiles;
