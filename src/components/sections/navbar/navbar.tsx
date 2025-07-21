"use client";

import NotificationMenu from "@/components/ui/notification-menu";
import UserMenu from "@/components/ui/user-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "../../ui/theme-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useEffect, useId, useState } from "react";
import { GlobeIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import Image from "next/image";

const languages = [
  { value: "ua", label: "Ua" },
  { value: "en", label: "En" },
  { value: "fr", label: "Fr" },
  { value: "de", label: "De" },
  { value: "pl", label: "Pl" },
];

const navigationLinks = [
  { href: "#", label: "Головна" },
  { href: "#", label: "Викладачі" },
  { href: "#", label: "Блог" },
  { href: "#", label: "Контакти" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const id = useId();

  useEffect(() => {
    const handler = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <header
      className={[
        "border-b px-4 md:px-6 w-full z-50 transition-all duration-300",
        isSticky
          ? "fixed top-0 left-0 bg-card/90 shadow backdrop-blur-sm"
          : "absolute top-0 left-0 bg-transparent",
      ].join(" ")}
    >
      <div className="flex h-16 items-center justify-between gap-4 max-w-[850px] xl:max-w-[1140px] mx-auto">
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <div className="block md:hidden">
            <div className="flex items-center justify-between">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="group size-8 md:hidden"
                    variant="ghost"
                    size="icon"
                  >
                    <svg
                      className="pointer-events-none"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L20 12"
                        className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                      />
                      <path
                        d="M4 12H20"
                        className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                      />
                      <path
                        d="M4 12H20"
                        className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>

                <SheetContent className="overflow-y-auto" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <a
                        href="#"
                        className="text-primary hover:text-primary/90"
                      >
                        <Image
                          src={"/logo.svg"}
                          alt="Logo"
                          width={50}
                          height={50}
                          quality={100}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <NavigationMenu className="max-w-none *:w-full">
                      <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            <NavigationMenuLink
                              href={link.href}
                              className="py-1.5 text-xl"
                            >
                              {link.label}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center justify-center gap-2">
                      <NotificationMenu />
                      <ThemeToggle />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <Image
                src={"/logo.svg"}
                alt="Logo"
                width={50}
                height={50}
                quality={100}
              />
            </a>
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 cursor-default text-lg"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="ua">
            <SelectTrigger
              id={`language-${id}`}
              className="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none [&>svg]:shrink-0"
              aria-label="Select language"
            >
              <GlobeIcon size={16} aria-hidden="true" />
              <SelectValue className="hidden sm:inline-flex" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  <span className="flex items-center gap-2">
                    <span className="truncate">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="items-center justify-center gap-2 hidden md:flex">
            <NotificationMenu />
            <ThemeToggle />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
