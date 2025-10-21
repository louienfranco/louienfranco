"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
// Make sure this points to your MobileSidebar file
import MobileSidebar from "@/components/custom/mobile-sidebar";

const links = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/templates", label: "Templates" },
  { href: "/showcase", label: "Showcase" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Floating wrapper (no full-width bar)
    <header className="font-sans pointer-events-none fixed inset-x-0 top-3 z-50 sm:top-4 md:top-6">
      <div className="mx-auto w-full max-w-3xl px-3 sm:px-4 pointer-events-auto">
        {/* Oval pill container */}
        <div
          className={[
            "flex h-12 items-center gap-2 rounded-full border px-2 pl-3 pr-2",
            "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            scrolled ? "shadow-lg" : "shadow-sm",
          ].join(" ")}
        >
          {/* Left: Mobile menu (only on mobile) */}
          <MobileSidebar />

          {/* Brand */}
          <Link href="/" className="font-semibold tracking-tight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                  d="M73.232,28.96c-5.631,0-10.194,4.567-10.194,10.197   c0,8.74-4.368,13.108-13.11,13.108c-8.737,0-13.111-4.369-13.111-13.108c0-5.63-4.563-10.197-10.194-10.197   s-10.194,4.567-10.194,10.197c0,5.631,4.563,10.198,10.194,10.198c8.742,0,13.111,4.369,13.111,13.111   c0,5.631,4.563,10.194,10.195,10.194c5.63,0,10.2-4.563,10.2-10.194c0-8.742,4.368-13.111,13.104-13.111   c5.637,0,10.2-4.567,10.2-10.198C83.433,33.527,78.869,28.96,73.232,28.96z"
                />
              </g>
            </svg>
          </Link>

          {/* Desktop nav */}
          <nav className="mx-2 hidden md:flex items-center gap-4">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme toggle */}
          <div className="ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background text-foreground border border-border shadow-sm hover:bg-muted/60"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
