import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, Printer, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface OrderDetailsPageProps {
  params: {
    id: string;
  };
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { id } = params;

  // Mock order data
  const order = {
    id: id,
    customer: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    date: "June 15, 2023",
    total: 249.97,
    subtotal: 229.97,
    shipping: 10.0,
    tax: 10.0,
    status: "completed",
    paymentMethod: "Credit Card (Visa ending in 4242)",
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    billingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    items: [
      {
        id: 1,
        name: "Premium Leather Backpack",
        price: 129.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
      },
      {
        id: 2,
        name: "Ultra Boost Sneakers",
        price: 149.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
      },
    ],
    timeline: [
      {
        date: "June 15, 2023 - 10:30 AM",
        status: "Order Placed",
        description: "Order #ORD-1234 was placed",
      },
      {
        date: "June 15, 2023 - 11:15 AM",
        status: "Payment Confirmed",
        description: "Payment of $249.97 was confirmed",
      },
      {
        date: "June 15, 2023 - 2:00 PM",
        status: "Processing",
        description: "Order is being processed",
      },
      {
        date: "June 16, 2023 - 9:30 AM",
        status: "Shipped",
        description:
          "Order has been shipped via USPS (Tracking: 1Z999AA10123456784)",
      },
      {
        date: "June 18, 2023 - 11:45 AM",
        status: "Delivered",
        description: "Order was delivered",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Order {order.id}</h1>
          <Badge
            className={
              order.status === "completed"
                ? "bg-green-600"
                : order.status === "processing"
                  ? "bg-blue-600"
                  : order.status === "shipped"
                    ? "bg-yellow-600"
                    : "bg-red-600"
            }
          >
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
          <Button>
            <Truck className="mr-2 h-4 w-4" /> Update Status
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 py-4 border-b last:border-0"
                  >
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-muted relative flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-muted">
                {order.timeline.map((event, index) => (
                  <li key={index} className="mb-6 ml-6 last:mb-0">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Package className="h-3 w-3" />
                    </span>
                    <h3 className="font-medium">{event.status}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.date}
                    </p>
                    <p className="text-sm mt-1">{event.description}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <h3 className="font-medium">{order.customer}</h3>
                <p className="text-sm text-muted-foreground">{order.email}</p>
                <p className="text-sm text-muted-foreground">{order.phone}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p>{order.shippingAddress.street}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                  {order.shippingAddress.zip}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p>{order.billingAddress.street}</p>
                <p>
                  {order.billingAddress.city}, {order.billingAddress.state}{" "}
                  {order.billingAddress.zip}
                </p>
                <p>{order.billingAddress.country}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{order.paymentMethod}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
