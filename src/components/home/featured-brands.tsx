import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const brands = [
  {
    name: "Sportify",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png",
    description: "Premium athletic wear for every sport",
  },
  {
    name: "Urban Style",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png",
    description: "Contemporary fashion for the modern lifestyle",
  },
  {
    name: "Luxe Leather",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png",
    description: "Handcrafted leather goods and accessories",
  },
  {
    name: "Eco Apparel",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png",
    description: "Sustainable clothing made from recycled materials",
  },
  {
    name: "Tech Gear",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png",
    description: "Innovative accessories for your devices",
  },
  {
    name: "Outdoor Plus",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png",
    description: "Equipment and apparel for outdoor adventures",
  },
];

export function FeaturedBrands() {
  return (
    <section className="py-12 bg-background">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Featured Brands
            </h2>
            <p className="text-muted-foreground">
              Discover our curated selection of top brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <Card
                key={brand.name}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative h-16 w-16 mb-4 rounded-full overflow-hidden">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium mb-1">{brand.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {brand.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
