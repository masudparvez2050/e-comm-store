import { Container } from "@/components/ui/container";
import { Product, getRelatedProducts } from "@/lib/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RelatedProductsProps {
  productId: number;
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
  const relatedProducts = getRelatedProducts(productId);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/30">
      <Container>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function RelatedProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-md">
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
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
