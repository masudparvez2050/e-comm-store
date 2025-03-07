import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { ProductGrid } from "@/components/home/product-grid";
import { ServiceHighlights } from "@/components/home/service-highlights";
import { FeaturedBrands } from "@/components/home/featured-brands";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <ServiceHighlights />
        <FeaturedBrands />
      </main>
      <Footer />
    </div>
  );
}
