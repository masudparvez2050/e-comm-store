"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/products";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Tabs defaultValue="all" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
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
                        Product
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Category
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Price
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
                    {filteredProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b transition-colors hover:bg-muted/50"
                      >
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-md overflow-hidden bg-muted relative">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">
                                ID: {product.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="capitalize">
                            {product.category}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">
                          <div>
                            <p className="font-medium">
                              ${product.price.toFixed(2)}
                            </p>
                            {product.originalPrice > product.price && (
                              <p className="text-xs text-muted-foreground line-through">
                                ${product.originalPrice.toFixed(2)}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge
                            className={
                              product.isNew ? "bg-green-600" : "bg-blue-600"
                            }
                          >
                            {product.isNew ? "New" : "Regular"}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/admin/products/${product.id}`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
