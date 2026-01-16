"use client";

import { useEffect, useReducer, useRef } from "react";
import { ArrowRight, ChevronLeft, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { NavbarQuery } from "@/lib/codegen/graphql";

type State = {
  isMenuOpen: boolean;
  activeIndex: number | null;
};

type Action =
  | { type: "OPEN_MENU" }
  | { type: "CLOSE_MENU" }
  | { type: "OPEN_SUBMENU"; index: number }
  | { type: "CLOSE_SUBMENU" };

const initialState: State = {
  isMenuOpen: false,
  activeIndex: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, isMenuOpen: true };

    case "CLOSE_MENU":
      return { isMenuOpen: false, activeIndex: null };

    case "OPEN_SUBMENU":
      return { ...state, activeIndex: action.index };

    case "CLOSE_SUBMENU":
      return { ...state, activeIndex: null };

    default:
      return state;
  }
}

const BurgerMenu = ({
  navLinks,
}: {
  navLinks: NonNullable<NavbarQuery["navbar"]>["navLevelOneGroup"];
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const menuRef = useRef<HTMLDivElement>(null);

  const { isMenuOpen, activeIndex } = state;

  const levelTwoNavItems =
    activeIndex !== null ? navLinks?.[activeIndex]?.navLevelTwoGroup ?? [] : [];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeIndex !== null) {
          dispatch({ type: "CLOSE_SUBMENU" });
        } else {
          dispatch({ type: "CLOSE_MENU" });
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <button
        aria-label="Open menu"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        className="lg:hidden"
        onClick={() => dispatch({ type: "OPEN_MENU" })}
      >
        <Menu className="cursor-pointer" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => dispatch({ type: "CLOSE_MENU" })}
      />

      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed top-16 right-0 z-50 h-[calc(100vh-60px)] w-full bg-neutral-50 lg:hidden",
          "transform transition-transform duration-300 ease-in-out p-5",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-6 z-50">
          <Image src={logo} alt="logo" />
          <button
            aria-label="Close menu"
            onClick={() => dispatch({ type: "CLOSE_MENU" })}
          >
            <X className="cursor-pointer" />
          </button>
        </div>

        <nav className="relative sm:grid sm:grid-cols-12 sm:gap-6">
          <div
            className={cn(
              "sm:col-span-5 flex flex-col gap-6",
              activeIndex !== null && "hidden sm:flex"
            )}
          >
            <div className="flex flex-col">
              {navLinks?.map((link, index) => (
                <button
                  key={link?.id}
                  role="menuitem"
                  aria-expanded={activeIndex === index}
                  className="text-label-3xs text-neutral-800 p-3 hover:bg-neutral-100 rounded-sm uppercase cursor-pointer text-left"
                  onClick={() => dispatch({ type: "OPEN_SUBMENU", index })}
                >
                  {link?.name}
                </button>
              ))}
            </div>

            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-neutral-900 text-neutral-50 uppercase"
              )}
            >
              Start a project
            </Link>
          </div>

          <div
            className={cn(
              "sm:col-span-7 sm:translate-0 fixed sm:static top-0 right-0 left-0 h-[calc(100vh-40px)] flex flex-col gap-3",
              "sm:h-[calc(100vh-100px)] pb-10 overflow-y-auto no-scrollbar transform transition-transform duration-300 ease-in-out",
              activeIndex !== null
                ? "translate-x-0 bg-neutral-50 p-3"
                : "translate-x-full"
            )}
          >
            <button
              aria-label="Go back"
              className="sm:hidden"
              onClick={() => dispatch({ type: "CLOSE_SUBMENU" })}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex justify-between items-center">
              <p className="text-caption-lg text-neutral-800">
                {navLinks?.[activeIndex ?? 0]?.name}
              </p>

              <Link
                className="text-caption-md uppercase flex items-center gap-1 text-blue-600"
                href={navLinks?.[activeIndex ?? 0]?.href || "#"}
              >
                View All
                <ArrowRight size={10} />
              </Link>
            </div>

            {levelTwoNavItems.map((item, index, arr) => (
              <div
                key={item?.id}
                className={cn(
                  "p-3 min-h-[358px]",
                  index === arr.length - 1
                    ? "bg-neutral-50"
                    : "bg-noise rounded-lg flex flex-col justify-between gap-2"
                )}
              >
                <div
                  className={cn(
                    "flex justify-between items-center",
                    index === arr.length - 1 ? "mb-7" : "mb-0"
                  )}
                >
                  <h3 className="text-heading-2xs text-neutral-800">
                    {item?.name}
                  </h3>
                  <Link href={item?.href || "#"}>
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div>
                  {item?.levelTwoLinks?.map((link) => (
                    <Link
                      key={link?.id}
                      href={link?.href || "#"}
                      className="py-3 border-b border-neutral-300 last:border-0 flex flex-col gap-1"
                    >
                      <span className="text-label-2xs text-neutral-800">
                        {link?.name}
                      </span>
                      {link?.description && (
                        <span className="text-label-3xs text-neutral-500">
                          {link?.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {item?.description && (
                  <p className="text-label-2xs text-neutral-800 py-3">
                    {item?.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
