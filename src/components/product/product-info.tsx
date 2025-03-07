"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.value || "",
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(product.rating)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        {product.originalPrice > product.price && (
          <>
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-sm font-medium text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          </>
        )}
      </div>

      <p className="text-muted-foreground mt-4">{product.description}</p>

      {product.features && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {product.colors && product.colors.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-2">Color:</h3>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.value}
                className={`h-8 w-8 rounded-full border ${selectedColor === color.value ? "ring-2 ring-primary ring-offset-2" : ""}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {product.sizes && product.sizes.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-2">Size:</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded ${selectedSize === size ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        <Button size="lg" className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button size="lg" variant="outline">
          <Heart className="mr-2 h-4 w-4" />
          Wishlist
        </Button>
      </div>
    </div>
  );
}
