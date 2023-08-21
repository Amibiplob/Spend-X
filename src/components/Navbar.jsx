"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Navitem from "./Navitem";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

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

      <Navitem />
    </Navbar>
  );
}
