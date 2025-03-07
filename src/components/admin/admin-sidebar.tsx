"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background border-b">
        <Link href="/admin" className="flex items-center">
          <span className="text-xl font-bold text-primary">ShopNow</span>
          <span className="ml-2 text-sm font-medium">Admin</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transition-transform duration-300 ease-in-out md:translate-x-0 overflow-hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b hidden md:block">
            <Link href="/admin" className="flex items-center">
              <span className="text-xl font-bold text-primary">ShopNow</span>
              <span className="ml-2 text-sm font-medium">Admin</span>
            </Link>
          </div>

          <div className="flex-1 py-6 px-4 overflow-y-auto">
            <nav className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Back to Store
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Spacer for mobile header */}
      <div className="h-16 md:hidden" />
    </>
  );
}
