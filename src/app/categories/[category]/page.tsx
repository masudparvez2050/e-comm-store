import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { getProductsByCategory } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const products = getProductsByCategory(category);

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {categoryName}
            </h1>
            <p className="text-muted-foreground mb-8">
              Browse our collection of {categoryName.toLowerCase()}
            </p>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No products found in this category.
                </p>
                <Button asChild>
                  <Link href="/">Browse All Products</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
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
