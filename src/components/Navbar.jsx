"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Navitem from "./Navitem";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="navbar-item text-2xl p-0 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Spend X
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <Navitem pathname={pathname} />
    </Navbar>
  );
}
