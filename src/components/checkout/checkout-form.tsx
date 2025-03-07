"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CheckoutForm() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" required />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <RadioGroup defaultValue="card">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>

          <div className="mt-4 grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions and privacy policy
          </Label>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Complete Order"}
      </Button>
    </form>
  );
}
