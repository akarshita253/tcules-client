"use client";

import { buttonVariants } from "../ui/button";
import FooterSubstract from "../../public/Subtract.png";
import Image from "next/image";
import Section from "./Section";
import { Container } from "./Container";
import logoDark from "@/public/logoDark.svg";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client/react";
import { FooterQuery } from "@/lib/codegen/graphql";
import { FOOTER_QUERY } from "@/lib/queries/footer";
import LogoGroup from "@/public/Group.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const { loading, error, data } = useQuery<FooterQuery>(FOOTER_QUERY);
  const logo = data?.footer?.logo;
  const footerLinks = data?.footer?.footer;
  const footerLegal = data?.footer?.legal;
  const footerSocial = data?.footer?.socialMedia;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const bgBlackLandingRoutes = ["/labs-fil", "/matter-design-systems"];
  const bgGrayLandingRoutes = ["/"];
  const isLandingPagePathBgBlack = bgBlackLandingRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isLandingPagePathBgGrey = bgGrayLandingRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <div
      className={cn(
        isLandingPagePathBgBlack
          ? "bg-neutral-900"
          : isLandingPagePathBgGrey
          ? "bg-neutral-100"
          : "bg-neutral-50",
        "p-1"
      )}
    >
      <Section className="bg-accent-500 rounded-xl relative">
        <div>
          <Image
            src={FooterSubstract}
            alt="Footer Substract"
            className="absolute bottom-0 right-0 hidden lg:block"
          />
        </div>
        <div>
          <Image
            src={LogoGroup}
            alt="logo group"
            className="absolute bottom-0 left-0 "
          />
        </div>

        <Container className="md:grid grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col justify-between gap-6 sm:gap-12">
            <div id="logo">
              {logo?.url && (
                <Image
                  src={logo?.url || logoDark}
                  width={logo?.width || 151}
                  height={logo?.height || 40}
                  alt={logo?.alternativeText || "logo"}
                />
              )}
            </div>
            <div
              id="footer-links"
              className="grid grid-cols-12 gap-6 mb-8 md:mb-0"
            >
              <div className="col-span-12 md:col-span-6">
                <h2 className="text-heading-sm">
                  {footerLinks?.heading?.split("|").at(0)}
                </h2>
                <h2 className="text-display-xs mb-9">
                  {footerLinks?.heading?.split("|").at(1)}
                </h2>
                <Link
                  href={footerLinks?.link?.href || "/contact-us"}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-neutral-900 text-neutral-50 uppercase"
                  )}
                >
                  {footerLinks?.link?.name}
                </Link>
              </div>
              <div className="col-span-12 md:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {footerLinks?.links &&
                  footerLinks?.links?.map((singleLink, index) => {
                    return (
                      <div key={singleLink?.id}>
                        <h4 className="text-lg font-semibold mb-4">
                          {singleLink?.heading}
                        </h4>
                        <ul
                          className={cn(
                            index === 0 ? " font-semibold" : null,
                            "flex flex-col gap-5 text-lg"
                          )}
                        >
                          {singleLink?.pageLinks &&
                            singleLink?.pageLinks?.map((pageLink, index) => {
                              return (
                                <li key={index}>
                                  <Link href={pageLink?.href || "/"}>
                                    {pageLink?.name}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              id="social-media"
              className="grid grid-cols-12 md:gap-6 items-center"
            >
              <div className="col-span-12 md:col-span-4 lg:col-span-6">
                <p className="text-neutral-900 text-label-sm mb-4 text-center md:text-left">
                  {footerSocial?.label}
                </p>
                <div className="flex justify-center md:justify-normal items-center gap-4 mb-6 sm:mb-12">
                  {footerSocial?.socialMedia &&
                    footerSocial?.socialMedia.map((singleLink) => {
                      return (
                        <Link
                          href={singleLink?.href || "#"}
                          key={singleLink?.id}
                        >
                          {singleLink?.icon?.url && (
                            <Image
                              src={singleLink?.icon?.url}
                              width={20}
                              height={20}
                              alt={
                                singleLink?.icon?.alternativeText ||
                                "icon-social-media"
                              }
                            />
                          )}
                        </Link>
                      );
                    })}
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-6 bg-neutral-50 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4  px-4 py-3 z-1010">
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-display mb-2">
                    {footerSocial?.rightSection?.heading}
                  </p>
                  <p className="text-md text-display font-normal text-neutral-700 sm:w-4/5">
                    {footerSocial?.rightSection?.description}
                  </p>
                </div>
                <div>
                  {footerSocial?.rightSection?.links &&
                    footerSocial?.rightSection?.links.map(
                      (singleLink, index) => {
                        return (
                          <Link
                            href={singleLink?.href || "#"}
                            key={index}
                            className="flex items-center flex-wrap gap-2"
                          >
                            {singleLink?.icon?.url && (
                              <Image
                                src={singleLink?.icon?.url}
                                width={40}
                                height={40}
                                alt={
                                  singleLink?.icon?.alternativeText ||
                                  "icon-social-media"
                                }
                              />
                            )}
                            {singleLink?.name}
                          </Link>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
            <div
              id="footer-legal"
              className="pt-4 border-t border-neutral-900 flex flex-col md:flex-row justify-between gap-4 items-center z-10"
            >
              <p className="text-center md:text-left text-label-xs font-normal">
                {footerLegal?.address}
              </p>
              <div className="flex justify-center gap-x-4 gap-y-0 flex-wrap font-normal text-label-xs">
                {footerLegal?.legalLinks &&
                  footerLegal?.legalLinks.map((singleLink) => {
                    return (
                      <Link href={singleLink?.href || "#"} key={singleLink?.id}>
                        {singleLink?.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Footer;
