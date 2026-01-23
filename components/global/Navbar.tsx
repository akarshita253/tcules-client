import Link from "next/link";
import { NAVBAR_QUERY } from "@/lib/queries/navbar";
import { NavbarQuery } from "@/lib/codegen/graphql";
import { strapiRequest } from "@/lib/utils";
import { Container } from "./Container";
import Image from "next/image";
import NavHoverStates from "./NavHoverStates";
import BurgerMenu from "./BurgerMenu";
import ButtonTag from "../shared/ButtonTag";

const Navbar = async () => {
  const response = await strapiRequest<NavbarQuery>(NAVBAR_QUERY);
  const navData = response.navbar;
  return (
    <Container className="flex justify-between items-center gap-6 lg:py-2 py-4 lg:relative">
      {navData?.navbarLogo?.url && (
        <div>
          <Link href="/">
            <Image
              src={navData?.navbarLogo?.url}
              width={navData?.navbarLogo?.width || 94}
              height={navData?.navbarLogo?.height || 24}
              alt={navData?.navbarLogo?.alternativeText || "logo"}
              className="shrink-0"
            />
          </Link>
        </div>
      )}
      <NavHoverStates navLinks={navData?.navLevelOneGroup} />
      <BurgerMenu navLinks={navData?.navLevelOneGroup} />
      <div className="lg:inline-block hidden">
        {navData?.navButton &&
          navData?.navButton?.map((button, index) => (
            <ButtonTag
              key={index}
              label={button?.name || ""}
              href={button?.href || "#"}
              variant="secondary"
            />
          ))}
      </div>
    </Container>
  );
};

export default Navbar;
