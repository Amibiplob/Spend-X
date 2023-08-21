import React from "react";
import {
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Tooltip,
} from "@nextui-org/react";

export default function Navitem() {
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
  const navItems = ["Profile", "Dashboard", "Activity"];

  return (
    <>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Tooltip
              showArrow={true}
              placement="bottom"
              content={item}
              classNames={{
                base: "shadow-xl text-black bg-neutral-400",
                arrow: "bg-neutral-400 dark:bg-white",
              }}
            >
              <Link color="foreground" href="#">
                {item}
              </Link>
            </Tooltip>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Tooltip showArrow={true} placement="bottom" content="Login">
            <Link href="#">Login</Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip showArrow={true} placement="bottom" content="Register">
            <Button
              className="text-white bg-gradient-to-r from-blue-800 to-indigo-900"
              as={Link}
              href="#"
            >
              Register
            </Button>
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
