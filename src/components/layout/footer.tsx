import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "#" },
      { name: "Bags", href: "#" },
      { name: "Sneakers", href: "#" },
      { name: "Clothing", href: "#" },
      { name: "Accessories", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Store Locations", href: "#" },
      { name: "Our Blog", href: "#" },
      { name: "Reviews", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Payment Methods", href: "#" },
      { name: "Shipping Guide", href: "#" },
      { name: "Returns & Exchanges", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-primary">ShopNow</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your one-stop destination for premium fashion, accessories, and
              lifestyle products. Discover the latest trends and timeless
              classics.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ShopNow. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm">Subscribe to our newsletter:</span>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-r-none w-full max-w-[200px]"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
