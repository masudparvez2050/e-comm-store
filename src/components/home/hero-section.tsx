"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const heroProducts = [
  {
    id: 1,
    name: "Premium Leather Backpack",
    description: "Handcrafted from genuine leather with multiple compartments",
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    category: "Bags",
  },
  {
    id: 2,
    name: "Ultra Boost Sneakers",
    description: "Lightweight performance shoes with responsive cushioning",
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    category: "Sneakers",
  },
  {
    id: 3,
    name: "Waterproof Hiking Jacket",
    description: "All-weather protection with breathable technology",
    price: 89.99,
    originalPrice: 139.99,
    discount: 36,
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    category: "Clothing",
  },
];

export function HeroSection() {
  return (
    <section className="py-6 md:py-12 bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <Badge
                variant="outline"
                className="mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              >
                Flash Sale Ends in 24h
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Summer Collection
              </h1>
              <p className="mt-2 text-muted-foreground max-w-md">
                Discover our latest arrivals with up to 40% off on selected
                items.
              </p>
            </div>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {heroProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="rounded-xl overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-md">
                    <div className="relative h-[200px] sm:h-[250px] w-full">
                      <div className="absolute top-2 left-2 z-10">
                        <Badge className="bg-primary text-primary-foreground">
                          {product.discount}% OFF
                        </Badge>
                      </div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold">${product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        </div>
                        <Button size="sm" asChild>
                          <Link href={`/product/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
