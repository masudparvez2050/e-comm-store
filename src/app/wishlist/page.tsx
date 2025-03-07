"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">My Wishlist</h1>

            <div className="flex flex-col items-center justify-center py-12">
              <Heart className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Save your favorite items to your wishlist so you can easily find
                them later.
              </p>
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
