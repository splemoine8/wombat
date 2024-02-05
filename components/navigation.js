import React from "react";
import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import styles from "./navigation.module.css";
import { useRouter } from "next/router";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Wedding Party", path: "/weddingparty" },
    { name: "Stay", path: "/stay" },
    { name: "Travel", path: "/travel" },
    { name: "Registry", path: "/registry" },
    { name: "FAQ", path: "/FAQ" },
    { name: "RSVP", path: "/rsvp" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false} className={styles.navbar}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex w-screen uppercase" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className={currentRoute === item.path ? styles.active : styles.menu}>
            <Link href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="capitalize">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
