"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, totalItems } = useCart();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Shopping Cart
            </h1>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Button asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="rounded-lg border bg-card">
                    <div className="p-6 border-b">
                      <h2 className="text-lg font-semibold">
                        Cart Items ({totalItems()})
                      </h2>
                    </div>
                    <div className="p-6">
                      {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>
                    <div className="p-6 border-t">
                      <Button variant="outline" asChild>
                        <Link href="/">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Continue Shopping
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <CartSummary />
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
