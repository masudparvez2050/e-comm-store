"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Bell, Search } from "lucide-react";
import Link from "next/link";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="hidden md:block relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10 w-full max-w-xs" />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>
          <ThemeSwitcher />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs font-medium">AD</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
