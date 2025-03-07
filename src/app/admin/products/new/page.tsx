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
import { ArrowLeft, Plus, Save } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/products">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Add New Product</h1>
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
                <Input id="name" placeholder="Enter product name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  placeholder="Enter product description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Enter product category" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="isNew" />
                <Label htmlFor="isNew">Mark as new product</Label>
              </div>
              <div className="space-y-2">
                <Label>Features</Label>
                <div className="space-y-2">
                  <Input placeholder="Enter product feature" />
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Feature
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Product
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
                <div className="border rounded-md p-4 text-center flex flex-col items-center justify-center min-h-[200px]">
                  <div className="h-12 w-12 rounded-full border-2 border-dashed flex items-center justify-center">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Add Main Image</p>
                  <p className="text-xs text-muted-foreground">
                    Upload the main product image
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Upload
                  </Button>
                </div>
                <div className="border rounded-md p-4 text-center flex flex-col items-center justify-center min-h-[200px]">
                  <div className="h-12 w-12 rounded-full border-2 border-dashed flex items-center justify-center">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Add Gallery Image</p>
                  <p className="text-xs text-muted-foreground">
                    Upload additional product images
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Upload
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Product
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
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price ($)</Label>
                  <Input id="originalPrice" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Discount (%)</Label>
                  <Input id="discount" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cost">Cost Price ($)</Label>
                  <Input id="cost" type="number" placeholder="0.00" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Product
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
