"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CartButton } from "@/components/layout/cart-button";
import { AuthButton } from "@/components/layout/auth-button";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Bags", href: "/categories/bags" },
  { name: "Sneakers", href: "/categories/sneakers" },
  { name: "Clothing", href: "/categories/clothing" },
  { name: "Accessories", href: "/categories/accessories" },
  { name: "New Arrivals", href: "#new" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">ShopNow</span>
            </Link>
          </div>

          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden w-full max-w-xs lg:flex items-center relative">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <form action="/search">
                <Input
                  type="search"
                  name="q"
                  placeholder="Search products..."
                  className="w-full rounded-full bg-background pl-8 md:w-[240px] lg:w-[280px]"
                />
              </form>
            </div>
            <AuthButton />
            <CartButton />
            <ThemeSwitcher />
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center relative">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <form action="/search">
                <Input
                  type="search"
                  name="q"
                  placeholder="Search products..."
                  className="w-full rounded-full bg-background pl-8"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
