"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById } from "@/lib/products";
import { ArrowLeft, Plus, Save } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductEditPageProps {
  params: {
    id: string;
  };
}

export default function ProductEditPage({ params }: ProductEditPageProps) {
  const productId = parseInt(params.id);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/products">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Edit Product</h1>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="variants">Variants</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" defaultValue={product.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  defaultValue={product.description}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" defaultValue={product.category} />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="isNew" defaultChecked={product.isNew} />
                <Label htmlFor="isNew">Mark as new product</Label>
              </div>
              <div className="space-y-2">
                <Label>Features</Label>
                <div className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <Input key={index} defaultValue={feature} />
                  ))}
                  <Button variant="outline" size="sm">
                    Add Feature
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-4 text-center">
                  <div className="aspect-square rounded-md mb-2 bg-muted flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Main Image</p>
                  <div className="mt-2 flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="border rounded-md p-4 text-center flex flex-col items-center justify-center">
                  <div className="h-12 w-12 rounded-full border-2 border-dashed flex items-center justify-center">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Add Image</p>
                  <p className="text-xs text-muted-foreground">
                    Upload a new product image
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    defaultValue={product.price}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price ($)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    defaultValue={product.originalPrice}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Discount (%)</Label>
                  <Input
                    id="discount"
                    type="number"
                    defaultValue={product.discount}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cost">Cost Price ($)</Label>
                  <Input id="cost" type="number" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
