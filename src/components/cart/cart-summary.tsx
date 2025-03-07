import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CartSummary() {
  const { items, totalPrice } = useCart();
  const subtotal = totalPrice();
  const shipping = items.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t my-4 pt-4">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="w-full mt-6" size="lg" asChild>
        <Link href="/checkout">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Checkout
        </Link>
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Taxes and shipping calculated at checkout
      </p>
    </div>
  );
}
