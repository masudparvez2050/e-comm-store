import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { RelatedProducts } from "@/components/product/related-products";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  // Create multiple images for the gallery by using the same image
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <ProductGallery
                images={productImages}
                productName={product.name}
              />
              <ProductInfo product={product} />
            </div>
          </div>
        </Container>
        <RelatedProducts productId={productId} />
      </main>
      <Footer />
    </div>
  );
}
