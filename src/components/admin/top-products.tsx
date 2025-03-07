import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Plus } from "lucide-react";

// Mock top products data
const topProducts = [
  {
    id: 1,
    name: "Premium Leather Backpack",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    sales: 124,
    revenue: 16118.76,
    trending: true,
  },
  {
    id: 2,
    name: "Ultra Boost Sneakers",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    sales: 98,
    revenue: 14699.02,
    trending: true,
  },
  {
    id: 3,
    name: "Waterproof Hiking Jacket",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    sales: 87,
    revenue: 7829.13,
    trending: false,
  },
  {
    id: 4,
    name: "Minimalist Watch",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    sales: 64,
    revenue: 5119.36,
    trending: true,
  },
  {
    id: 5,
    name: "Canvas Tote Bag",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    sales: 52,
    revenue: 2079.48,
    trending: false,
  },
];

export function TopProducts() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md overflow-hidden bg-muted relative flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium truncate">{product.name}</h3>
                  <p className="font-medium">${product.revenue.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <p>{product.sales} sales</p>
                  {product.trending && (
                    <Badge className="bg-green-600">Trending</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
