"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import { useCart } from "@/lib/cart";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart");
    }
  }, [items, router]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CheckoutForm />
              </div>
              <div>
                <OrderSummary />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
