import React from "react";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";

export default function Navitem({ pathname }) {
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
  const navItems = [
    { href: "/", name: "Home" },
    { href: "/blog", name: "Blog" },
    { href: "/login", name: " Log in" },
    {
      href: "/register",
      name: "Register",
      className:
        "p-2 rounded text-white bg-gradient-to-r from-blue-800 to-indigo-900",
    },
  ];

  return (
    <>
      <NavbarContent className="hidden sm:flex" justify="end">
        {navItems.map(({ href, name, className }, index) => (
          <NavbarItem
            key={index}
            className={
              pathname == href
                ? "py-1 bg-blue-500 hover:bg-blue-300 rounded-md text-black"
                : "py-1  rounded-md hover:bg-blue-300 text-black"
            }
          >
            <Tooltip
              showArrow={true}
              placement="bottom"
              content={name}
              classNames={{
                base: "shadow-xl text-black bg-neutral-400",
                arrow: "bg-neutral-400 dark:bg-white",
              }}
            >
              <Link href={href} className={className ? className : "px-2 py-1"}>
                {name}
              </Link>
            </Tooltip>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="sm:hidden flex" justify="end">
        <NavbarItem className="p-2 bg-blue-300 rounded-md hover:bg-blue-500 text-black">
          <Tooltip
            showArrow={true}
            placement="bottom"
            content="login"
            classNames={{
              base: "shadow-xl text-black bg-neutral-400",
              arrow: "bg-neutral-400 dark:bg-white",
            }}
          >
            <Link href="/login">login</Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="p-2 bg-blue-300 rounded-md hover:bg-blue-500 text-black">
          <Tooltip
            showArrow={true}
            placement="bottom"
            content="register"
            classNames={{
              base: "shadow-xl text-black bg-neutral-400",
              arrow: "bg-neutral-400 dark:bg-white",
            }}
          >
            <Link href="/register">Register</Link>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Tooltip
              showArrow={true}
              placement="top-start"
              content={item}
              classNames={{
                base: "shadow-xl text-black bg-neutral-400",
                arrow: "bg-neutral-400 dark:bg-white",
              }}
            >
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </Tooltip>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
}
