import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
            alt="About ShopNow"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              About ShopNow
            </h1>
          </div>
        </div>

        <Container>
          <div className="py-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2023, ShopNow began with a simple mission: to provide
              high-quality products at affordable prices with exceptional
              customer service. What started as a small online store has grown
              into a trusted destination for fashion, accessories, and lifestyle
              products.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team is passionate about curating collections that blend
              timeless classics with the latest trends. We work directly with
              manufacturers and designers to ensure that every product meets our
              standards for quality and sustainability.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We believe in offering products that are built to last. Every
                  item in our store undergoes rigorous quality checks before
                  reaching our customers.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through
                  sustainable sourcing, eco-friendly packaging, and ethical
                  manufacturing practices.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-muted-foreground">
                  Our dedicated support team is always ready to assist you with
                  any questions or concerns, ensuring a seamless shopping
                  experience.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously explore new technologies and trends to improve
                  our products and services, staying ahead in the ever-evolving
                  retail landscape.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Our Team
            </h2>
            <p className="text-muted-foreground mb-6">
              Behind ShopNow is a diverse team of passionate individuals
              dedicated to providing you with the best shopping experience. From
              our product curators to our customer service representatives,
              everyone plays a vital role in making ShopNow what it is today.
            </p>
            <p className="text-muted-foreground">
              We're always looking for talented individuals to join our growing
              team. If you're passionate about retail and customer experience,
              check out our careers page for current opportunities.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
