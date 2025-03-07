import { Container } from "@/components/ui/container";
import { Truck, RefreshCw, Clock, CreditCard } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day money back guarantee",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Customer service available anytime",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple secure payment methods",
  },
];

export function ServiceHighlights() {
  return (
    <section className="py-12 bg-muted/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
