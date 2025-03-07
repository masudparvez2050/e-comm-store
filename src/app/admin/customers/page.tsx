"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Search, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock customers data
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    orders: 5,
    spent: 549.95,
    status: "active",
    lastOrder: "2023-06-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    orders: 3,
    spent: 329.97,
    status: "active",
    lastOrder: "2023-06-10",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    orders: 1,
    spent: 89.99,
    status: "active",
    lastOrder: "2023-06-05",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    orders: 2,
    spent: 174.98,
    status: "inactive",
    lastOrder: "2023-05-20",
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    orders: 0,
    spent: 0,
    status: "inactive",
    lastOrder: "N/A",
  },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Customers</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Name
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Email
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Orders
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Spent
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Status
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Last Order
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle font-medium">
                      {customer.name}
                    </td>
                    <td className="p-4 align-middle">{customer.email}</td>
                    <td className="p-4 align-middle">{customer.orders}</td>
                    <td className="p-4 align-middle">
                      ${customer.spent.toFixed(2)}
                    </td>
                    <td className="p-4 align-middle">
                      <Badge
                        className={
                          customer.status === "active"
                            ? "bg-green-600"
                            : "bg-gray-600"
                        }
                      >
                        {customer.status.charAt(0).toUpperCase() +
                          customer.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">{customer.lastOrder}</td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/customers/${customer.id}`}>
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
    </div>
  );
}
