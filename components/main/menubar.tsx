"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme";
import { Links } from "@/lib/constants";

import Image from "next/image";
import Logo from "@/public/logo.png";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const className = isOpen ? "h-screen opacity-100" : "h-0 opacity-0";

  return (
    <>
      <nav className="z-50 sm:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant={"secondary"}
          size={"icon"}
          className="h-9 w-9"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </nav>
      <div
        className={`absolute left-0 top-0 flex w-screen flex-col items-center justify-center overflow-hidden bg-accent text-accent-foreground transition-all duration-300 ease-in-out sm:hidden ${className}`}
      >
        <Link
          href={"/"}
          onClick={() => setIsOpen(false)}
          className="fixed left-6 top-8 flex items-center gap-x-1"
        >
          <Image src={Logo} alt="Logo" className="h-6 w-6" />
          <h1 className="hidden text-xl font-semibold sm:block">gem</h1>
        </Link>
        <ul className="flex flex-col items-center gap-y-4 p-6">
          {Links.map((link, index) => (
            <li
              key={index}
              className="text-sm font-medium hover:text-foreground"
            >
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-y-3">
          <ModeToggle variant="mobile" />
          <Button variant={"default"} className="gap-x-3" size={"sm"}>
            <Star className="h-4 w-4" />
            Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default Menubar;
