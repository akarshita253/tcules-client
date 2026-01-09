"use client";
import React from "react";
import { motion } from "motion/react";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className=" ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-label-3xs uppercase text-neutral-800 hover:bg-neutral-100 py-2 px-4 rounded-sm hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          {active === item && (
            <div className="absolute top-[calc(100%+1rem)] left-0 right-0 pt-0 w-6xl mx-auto">
              <motion.div
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm overflow-hidden border border-black/20 shadow-xl"
              >
                <motion.div layout className="w-auto h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className=" rounded-full border border-transparent bg-white shadow-input flex justify-center space-x-4 px-8 "
    >
      {children}
    </nav>
  );
};
