"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CartButton() {
  const { totalItems } = useCart();
  const cartCount = totalItems();

  return (
    <Button variant="ghost" size="icon" className="relative" asChild>
      <Link href="/cart">
        <ShoppingBag className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {cartCount}
          </span>
        )}
      </Link>
    </Button>
  );
}
