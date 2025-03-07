import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Package, CreditCard, Heart } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">My Account</h1>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-6 grid grid-cols-4 max-w-md">
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">Orders</span>
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Payment</span>
                </TabsTrigger>
                <TabsTrigger
                  value="wishlist"
                  className="flex items-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Wishlist</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your account details and preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue="(123) 456-7890"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>
                      View and track your recent orders.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        You haven't placed any orders yet.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a href="/">Start Shopping</a>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>
                      Manage your payment methods and billing information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <CreditCard className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        You haven't added any payment methods yet.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Add Payment Method</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>My Wishlist</CardTitle>
                    <CardDescription>
                      Products you've saved for later.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Your wishlist is empty.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a href="/">Discover Products</a>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
