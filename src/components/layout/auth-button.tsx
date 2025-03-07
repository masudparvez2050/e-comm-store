"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export function AuthButton() {
  // This would be replaced with actual auth state management
  const isLoggedIn = false;
  const userName = "John Doe";

  return isLoggedIn ? (
    <Button variant="ghost" size="sm" asChild>
      <Link href="/account" className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-3 w-3 text-primary" />
        </div>
        <span className="hidden md:inline">{userName}</span>
      </Link>
    </Button>
  ) : (
    <Button variant="ghost" size="sm" asChild>
      <Link href="/auth/login">Sign in</Link>
    </Button>
  );
}
