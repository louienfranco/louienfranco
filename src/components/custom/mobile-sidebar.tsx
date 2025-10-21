"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  BookOpen,
  LayoutPanelLeft,
  Sparkles,
  Github,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/projects", label: "Projects", icon: LayoutPanelLeft },
  { href: "/showcase", label: "Showcase", icon: Sparkles },
];

export default function MobileSidebar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open sidebar">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-80 sm:w-96 p-0"
          aria-label="Mobile sidebar"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Mobile sidebar</SheetTitle>
          </SheetHeader>

          <div className="flex h-full flex-col">
            <div className="flex items-center gap-2 px-4 pt-4 pb-2">
              <span
                className="inline-block h-5 w-5 rounded bg-foreground/90"
                aria-hidden
              />
              <span className="font-semibold tracking-tight">luwen</span>
            </div>

            <Separator />

            <nav className="px-2 py-2">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>

            <Separator className="my-2" />

            <div className="px-4 py-3 flex items-center justify-between gap-2">
              <Button asChild variant="outline" className="gap-2">
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-background text-foreground border border-border shadow-sm hover:bg-muted/60"
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            <div className="mt-auto px-4 pb-4 pt-2">
              <p className="text-xs text-muted-foreground">
                Tip: Use the theme toggle to switch light/dark.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
