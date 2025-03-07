"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", name: "All Products" },
  { id: "bags", name: "Bags" },
  { id: "sneakers", name: "Sneakers" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
];

const products = [
  {
    id: 1,
    name: "Premium Leather Backpack",
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    rating: 4.8,
    reviewCount: 124,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    category: "bags",
    isNew: true,
  },
  {
    id: 2,
    name: "Ultra Boost Sneakers",
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    rating: 4.9,
    reviewCount: 86,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    category: "sneakers",
    isNew: false,
  },
  {
    id: 3,
    name: "Waterproof Hiking Jacket",
    price: 89.99,
    originalPrice: 139.99,
    discount: 36,
    rating: 4.7,
    reviewCount: 52,
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    category: "clothing",
    isNew: false,
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 38,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    category: "accessories",
    isNew: true,
  },
  {
    id: 5,
    name: "Canvas Tote Bag",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.6,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    category: "bags",
    isNew: false,
  },
  {
    id: 6,
    name: "Running Performance Shoes",
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 73,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "sneakers",
    isNew: true,
  },
  {
    id: 7,
    name: "Wool Beanie",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.4,
    reviewCount: 28,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    category: "accessories",
    isNew: false,
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    rating: 4.7,
    reviewCount: 64,
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
    category: "clothing",
    isNew: false,
  },
];

export function ProductGrid() {
  return (
    <section className="py-12 bg-background">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Explore our collection of high-quality products
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 flex flex-wrap h-auto justify-start gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .filter(
                      (product) =>
                        category.id === "all" ||
                        product.category === category.id,
                    )
                    .map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden group transition-all hover:shadow-md"
                      >
                        <div className="relative h-[200px] w-full overflow-hidden bg-muted">
                          {product.discount > 0 && (
                            <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
                              {product.discount}% OFF
                            </Badge>
                          )}
                          {product.isNew && (
                            <Badge className="absolute top-2 right-2 z-10 bg-green-600 text-white">
                              New
                            </Badge>
                          )}
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button size="sm" className="mx-1" asChild>
                              <Link href={`/product/${product.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium line-clamp-1">
                            {product.name}
                          </h3>
                          <div className="flex items-center mt-1 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-300"
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground ml-1">
                              ({product.reviewCount})
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">${product.price}</span>
                            {product.originalPrice > product.price && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full" asChild>
                            <Link href={`/product/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
