"use client";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import React, { useEffect, useState } from "react";
import TeamSwitcher from "./team-switcher";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="relative flex items-center justify-between mx-5 pt-2 pb-2 border-b">
      <div className="flex flex-1 items-center">
        <p className="text-md text-black/70 font-semibold">My Workspace /</p>
        <p className="text-md text-black/90 font-semibold ml-2">My new form</p>
      </div>
      <div className="flex-1 flex justify-center space-x-8">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href || "#"} legacyBehavior>
            <a
              className={`relative text-md font-semibold ${
                pathname === item.href ? "text-black/90" : "text-black/70"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute left-1/2 transform -translate-x-1/2 w-[120%] -bottom-4 h-[2px] bg-black"></span>
              )}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-2 rounded-md border items-center flex justify-center">
          <Image src="/examples/eye.png" width={18} height={18} alt="eye" />
        </button>
        <button className="bg-black text-white rounded-md px-4 py-2">
          Publish
        </button>
        <TeamSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;

type NavItemTypes = {
  id: number;
  label: string;
  href?: string; // Make href optional
};

const navItems: NavItemTypes[] = [
  { id: 1, label: "Create", href: "/create" },
  { id: 2, label: "Connect", href: "/connect" },
  { id: 3, label: "Share", href: "/share" },
  { id: 4, label: "Results", href: "/results" },
];
