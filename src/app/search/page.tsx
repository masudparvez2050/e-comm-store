"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, Search as SearchIcon } from "lucide-react";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setSearchTerm(query);
    if (!query) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("q", searchTerm);
    window.history.pushState(null, "", `?${params.toString()}`);

    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Search Products
            </h1>

            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for products..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </div>
            </form>

            {query && (
              <p className="mb-6">
                {filteredProducts.length === 0
                  ? "No results"
                  : `${filteredProducts.length} results`}{" "}
                for "{query}"
              </p>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No products found matching your search.
                </p>
                <Button asChild>
                  <Link href="/">Browse All Products</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden group transition-all hover:shadow-md"
                  >
                    <Link href={`/product/${product.id}`}>
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
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-medium line-clamp-1 hover:underline">
                          {product.name}
                        </h3>
                      </Link>
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
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
