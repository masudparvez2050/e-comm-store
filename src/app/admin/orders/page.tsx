"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock orders data
const orders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2023-06-15",
    total: 249.97,
    status: "completed",
    items: 3,
  },
  {
    id: "ORD-1235",
    customer: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2023-06-14",
    total: 129.99,
    status: "processing",
    items: 1,
  },
  {
    id: "ORD-1236",
    customer: "Robert Johnson",
    email: "robert.johnson@example.com",
    date: "2023-06-14",
    total: 89.99,
    status: "shipped",
    items: 1,
  },
  {
    id: "ORD-1237",
    customer: "Emily Davis",
    email: "emily.davis@example.com",
    date: "2023-06-13",
    total: 174.98,
    status: "completed",
    items: 2,
  },
  {
    id: "ORD-1238",
    customer: "Michael Wilson",
    email: "michael.wilson@example.com",
    date: "2023-06-12",
    total: 64.99,
    status: "cancelled",
    items: 1,
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Orders</h1>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Tabs defaultValue="all" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Order ID
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Customer
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
                    {filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b transition-colors hover:bg-muted/50"
                      >
                        <td className="p-4 align-middle font-medium">
                          {order.id}
                        </td>
                        <td className="p-4 align-middle">
                          <div>
                            <p>{order.customer}</p>
                            <p className="text-xs text-muted-foreground">
                              {order.email}
                            </p>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{order.date}</td>
                        <td className="p-4 align-middle">
                          <div>
                            <p className="font-medium">
                              ${order.total.toFixed(2)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {order.items} items
                            </p>
                          </div>
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
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/admin/orders/${order.id}`}>
                              <Eye className="h-4 w-4" />
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
      </Tabs>
    </div>
  );
}
