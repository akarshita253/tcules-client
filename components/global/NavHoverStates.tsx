"use client";

import { NavbarQuery } from "@/lib/codegen/graphql";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NavHoverStates = ({
  navLinks,
}: {
  navLinks: NonNullable<NavbarQuery["navbar"]>["navLevelOneGroup"];
}) => {
  const [active, setActive] = useState<number | null>(null);

  const handleMegaMenu = (index: number) => {
    setActive(index);
  };

  const handleMegaMenuClose = () => {
    setActive(null);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center gap-6">
        {navLinks?.map((singleNavLink, index) => {
          const levelTwo = singleNavLink?.navLevelTwoGroup ?? [];
          const lengthOfLevelTwo = levelTwo.length - 1;
          const gridColumn = `grid gap-3 grid-cols-${lengthOfLevelTwo}`;
          return (
            <div key={singleNavLink?.id} className="">
              <Link
                onMouseEnter={() => handleMegaMenu(index)}
                className="text-label-3xs uppercase text-neutral-700 hover:bg-neutral-100 py-2 px-4 rounded-sm"
                href={singleNavLink?.href || "#"}
              >
                {singleNavLink?.name}
              </Link>

              <AnimatePresence>
                {active === index && levelTwo.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={handleMegaMenuClose}
                    className={cn(
                      index === 2 ? "xl:max-w-[926px]" : "xl:max-w-[1207px]",
                      "absolute top-[calc(100%+0.5rem)] min-h-[400px] left-0 right-0 shadow-lg w-full lg:max-w-5xl  mx-auto bg-neutral-50 z-100"
                    )}
                  >
                    <div
                      className={
                        index === 3
                          ? "grid grid-cols-8 gap-3 p-3 rounded-xl"
                          : "grid grid-cols-9 gap-3 p-3 rounded-xl"
                      }
                    >
                      <div className="col-span-6">
                        <div className="flex justify-between items-center mb-6">
                          <p className="text-caption-lg text-neutral-800">
                            {singleNavLink?.name}
                          </p>
                          {index !== 3 && (
                            <Link
                              className="text-caption-md uppercase flex items-center gap-1 text-blue-600"
                              href={singleNavLink?.href || "#"}
                            >
                              View All
                              <ArrowRight className="shrink-0" size={10} />
                            </Link>
                          )}
                        </div>
                        <div className={gridColumn}>
                          {singleNavLink?.isSubMenuAvailable &&
                            singleNavLink?.navLevelTwoGroup
                              ?.slice(0, -1)
                              ?.map((secondLevel) => {
                                return (
                                  <div
                                    key={secondLevel?.id}
                                    className={cn(
                                      "bg-noise hover:bg-linear-to-tr min-h-[358px] from-neutral-50 to-green-300 transition-all duration-300 flex flex-col justify-between gap-4 overflow-hidden rounded-lg p-6"
                                    )}
                                  >
                                    <Link
                                      href={secondLevel?.href || "#"}
                                      className="flex items-start justify-between gap-1 text-heading-2xs text-neutral-900"
                                    >
                                      {secondLevel?.name}
                                      <ArrowRight
                                        className="shrink-0 relative top-2"
                                        size={20}
                                      />
                                    </Link>
                                    <div className="flex flex-col gap-2">
                                      {secondLevel?.levelTwoLinks &&
                                        secondLevel?.levelTwoLinks?.map(
                                          (singleLevelTwoLink) => (
                                            <div
                                              key={singleLevelTwoLink?.id}
                                              className="py-3 border-b border-neutral-300 last:border-b-0"
                                            >
                                              <Link
                                                href={
                                                  singleLevelTwoLink?.href ||
                                                  "#"
                                                }
                                                className="text-caption-md hover:underline text-neutral-800 flex flex-col"
                                              >
                                                <small className="text-label-2xs text-neutral-800">
                                                  {singleLevelTwoLink?.name}
                                                </small>
                                                <small className="text-label-3xs text-neutral-500">
                                                  {
                                                    singleLevelTwoLink?.description
                                                  }
                                                </small>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                    </div>
                                    {secondLevel?.description && (
                                      <p>{secondLevel?.description}</p>
                                    )}
                                  </div>
                                );
                              })}
                        </div>
                      </div>
                      <div
                        className={
                          index === 3
                            ? "col-span-2 p-6  flex flex-col justify-between h-[358px] mt-auto gap-6 bg-noise hover:bg-linear-to-tr overflow-hidden from-neutral-50 to-green-300 transition-all duration-300 rounded-lg"
                            : "col-span-3 p-3 flex flex-col justify-between gap-6 "
                        }
                      >
                        <Link
                          href={
                            singleNavLink?.navLevelTwoGroup?.at(-1)?.href || "#"
                          }
                          className="flex items-center justify-between  gap-1 text-heading-2xs text-neutral-900"
                        >
                          {singleNavLink?.navLevelTwoGroup?.at(-1)?.name}
                          <div className="flex items-center justify-center p-1 hover:bg-neutral-100 rounded">
                            <ArrowRight className="shrink-0 " size={20} />
                          </div>
                        </Link>
                        <div className="flex flex-col gap-2">
                          {singleNavLink?.navLevelTwoGroup
                            ?.at(-1)
                            ?.levelTwoLinks?.map((singleLevelTwoLink) => (
                              <div
                                key={singleLevelTwoLink?.id}
                                className="py-3 border-b border-neutral-300 last:border-b-0 flex items-center justify-between gap-2"
                              >
                                <Link
                                  href={singleLevelTwoLink?.href || "#"}
                                  className="text-caption-md text-neutral-800 hover:underline flex flex-col"
                                >
                                  <small className="text-label-2xs text-neutral-800">
                                    {singleLevelTwoLink?.name}
                                  </small>
                                  <small className="text-label-3xs text-neutral-500">
                                    {singleLevelTwoLink?.description}
                                  </small>
                                </Link>
                                <ArrowRight
                                  className="shrink-0 relative top-2"
                                  size={14}
                                />
                              </div>
                            ))}
                        </div>
                        {singleNavLink?.navLevelTwoGroup?.at(-1)
                          ?.description && (
                          <p>
                            {
                              singleNavLink?.navLevelTwoGroup?.at(-1)
                                ?.description
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavHoverStates;
