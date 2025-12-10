import Image from "next/image";
import { ProfilesProps } from "../types/blogTypes";

const Profiles = ({ profiles }: ProfilesProps) => {
  if (!profiles || profiles.length === 0) {
    return <p>No profiles available.</p>;
  }

  return (
    // <div className="  px-3 my-9 md:my-0">
    <div className="md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-4 px-3 my-9 md:my-0">
      <small className="uppercase text-caption-lg">Authors</small>
      <div className="mt-6 flex flex-row flex-wrap md:flex-nowrap md:flex-col gap-4">
        {profiles.filter(Boolean).map((profile, index) => {
          const img = profile?.profilePicture?.[0];
          const url = img?.url ? `${img.url}` : null;

          return (
            <div key={profile?.id ?? index} className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                {url ? (
                  <Image
                    src={url}
                    alt={
                      img?.alternativeText || profile?.name || "Profile image"
                    }
                    width={32}
                    height={32}
                    loading="lazy"
                    unoptimized
                  />
                ) : null}
              </div>

              <div className="text-neutral-800">
                <h4 className="text-label-3xs ">
                  {profile?.name || "Unknown"}
                </h4>
                <p className="text-caption-md uppercase">
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
