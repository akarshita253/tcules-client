import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { NAVBAR_QUERY } from "@/lib/queries/navbar";
import { NavbarQuery } from "@/lib/codegen/graphql";
import { cn, strapiRequest } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";
import NavHoverStates from "./NavHoverStates";

const Navbar = async () => {
  const response = await strapiRequest<NavbarQuery>(NAVBAR_QUERY);
  const navData = response.navbar;
  return (
    <Container className="md:flex justify-between items-center gap-6 py-2 relative">
      {navData?.navbarLogo?.url && (
        <div>
          <Link href="/">
            <Image
              src={navData?.navbarLogo?.url}
              width={navData?.navbarLogo?.width || 94}
              height={navData?.navbarLogo?.height || 24}
              alt={navData?.navbarLogo?.alternativeText || "logo"}
            />
          </Link>
        </div>
      )}
      <NavHoverStates navLinks={navData?.navLevelOneGroup} />
      <div>
        {navData?.navButton &&
          navData?.navButton?.map((button, index) => (
            <Link
              key={index}
              href={button?.href || ""}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-neutral-900 text-neutral-50"
              )}
            >
              {button?.name}
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Navbar;
