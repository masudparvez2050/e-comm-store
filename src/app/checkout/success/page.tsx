import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-16 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-green-100 p-4 dark:bg-green-900 mb-6">
              <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground max-w-md mb-8">
              Thank you for your purchase. Your order has been confirmed and
              will be shipped shortly. You will receive an email confirmation
              with your order details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">Track Your Order</Link>
              </Button>
            </div>
            <div className="mt-12 p-6 border rounded-lg bg-card max-w-md w-full">
              <h2 className="font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Number:</span>
                  <span className="font-medium">
                    #ORD-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Shipping Method:
                  </span>
                  <span className="font-medium">Standard Shipping</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Estimated Delivery:
                  </span>
                  <span className="font-medium">
                    {new Date(
                      Date.now() + 7 * 24 * 60 * 60 * 1000,
                    ).toLocaleDateString()}{" "}
                    -
                    {new Date(
                      Date.now() + 10 * 24 * 60 * 60 * 1000,
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
