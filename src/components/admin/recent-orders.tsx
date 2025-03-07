import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock recent orders data
const recentOrders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    date: "2023-06-15",
    total: 129.99,
    status: "completed",
    items: 1,
  },
  {
    id: "ORD-1235",
    customer: "Jane Smith",
    date: "2023-06-14",
    total: 89.99,
    status: "processing",
    items: 1,
  },
  {
    id: "ORD-1236",
    customer: "Robert Johnson",
    date: "2023-06-14",
    total: 149.99,
    status: "shipped",
    items: 1,
  },
  {
    id: "ORD-1237",
    customer: "Emily Davis",
    date: "2023-06-13",
    total: 79.99,
    status: "completed",
    items: 1,
  },
  {
    id: "ORD-1238",
    customer: "Michael Wilson",
    date: "2023-06-12",
    total: 64.99,
    status: "cancelled",
    items: 1,
  },
];

export function RecentOrders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/orders">View All</Link>
        </Button>
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
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle font-medium">{order.id}</td>
                  <td className="p-4 align-middle">{order.customer}</td>
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
                      <Link href={`/admin/orders/${order.id}`}>View</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
