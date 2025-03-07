import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Link from "next/link";

interface CustomerDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CustomerDetailsPage({
  params,
}: CustomerDetailsPageProps) {
  const { id } = params;

  // Mock customer data
  const customer = {
    id: parseInt(id),
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    dateJoined: "June 1, 2023",
    orders: 5,
    spent: 549.95,
    status: "active",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    recentOrders: [
      {
        id: "ORD-1234",
        date: "June 15, 2023",
        total: 129.99,
        status: "completed",
      },
      {
        id: "ORD-1230",
        date: "June 10, 2023",
        total: 89.99,
        status: "completed",
      },
      {
        id: "ORD-1225",
        date: "June 5, 2023",
        total: 149.99,
        status: "completed",
      },
      {
        id: "ORD-1220",
        date: "May 28, 2023",
        total: 79.99,
        status: "completed",
      },
      {
        id: "ORD-1215",
        date: "May 20, 2023",
        total: 99.99,
        status: "completed",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/customers">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">{customer.name}</h1>
          <Badge
            className={
              customer.status === "active" ? "bg-green-600" : "bg-gray-600"
            }
          >
            {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Email Customer
          </Button>
          <Button>Edit Customer</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{customer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{customer.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date Joined</p>
                  <p className="font-medium">{customer.dateJoined}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="font-medium">{customer.orders}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="font-medium">${customer.spent.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p>{customer.address.street}</p>
                <p>
                  {customer.address.city}, {customer.address.state}{" "}
                  {customer.address.zip}
                </p>
                <p>{customer.address.country}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            Order ID
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            Date
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            Total
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            Status
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {customer.recentOrders.map((order) => (
                          <tr
                            key={order.id}
                            className="border-b transition-colors hover:bg-muted/50"
                          >
                            <td className="p-4 align-middle font-medium">
                              {order.id}
                            </td>
                            <td className="p-4 align-middle">{order.date}</td>
                            <td className="p-4 align-middle">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="p-4 align-middle">
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
                                {order.status.charAt(0).toUpperCase() +
                                  order.status.slice(1)}
                              </Badge>
                            </td>
                            <td className="p-4 align-middle">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/admin/orders/${order.id}`}>
                                  View
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-muted pl-4 py-2">
                      <p className="text-sm text-muted-foreground">
                        June 15, 2023 - 10:30 AM
                      </p>
                      <p>Placed order #ORD-1234</p>
                    </div>
                    <div className="border-l-2 border-muted pl-4 py-2">
                      <p className="text-sm text-muted-foreground">
                        June 10, 2023 - 3:45 PM
                      </p>
                      <p>Placed order #ORD-1230</p>
                    </div>
                    <div className="border-l-2 border-muted pl-4 py-2">
                      <p className="text-sm text-muted-foreground">
                        June 5, 2023 - 11:20 AM
                      </p>
                      <p>Placed order #ORD-1225</p>
                    </div>
                    <div className="border-l-2 border-muted pl-4 py-2">
                      <p className="text-sm text-muted-foreground">
                        June 1, 2023 - 9:15 AM
                      </p>
                      <p>Account created</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No notes have been added for this customer.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
