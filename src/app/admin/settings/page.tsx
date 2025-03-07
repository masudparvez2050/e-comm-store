import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>
                Manage your store details and contact information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" defaultValue="ShopNow" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeEmail">Store Email</Label>
                <Input
                  id="storeEmail"
                  type="email"
                  defaultValue="support@shopnow.example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storePhone">Store Phone</Label>
                <Input
                  id="storePhone"
                  type="tel"
                  defaultValue="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeAddress">Store Address</Label>
                <Textarea
                  id="storeAddress"
                  defaultValue="123 Fashion Street\nNew York, NY 10001\nUnited States"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Currency & Locale</CardTitle>
              <CardDescription>
                Configure your store's currency and regional settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <select
                    id="currency"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="USD"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <select
                    id="timezone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="America/New_York"
                  >
                    <option value="America/New_York">
                      Eastern Time (US & Canada)
                    </option>
                    <option value="America/Chicago">
                      Central Time (US & Canada)
                    </option>
                    <option value="America/Denver">
                      Mountain Time (US & Canada)
                    </option>
                    <option value="America/Los_Angeles">
                      Pacific Time (US & Canada)
                    </option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Paris">Paris</option>
                  </select>
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

        <TabsContent value="shipping" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Methods</CardTitle>
              <CardDescription>
                Configure shipping options for your store.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div>
                    <h3 className="font-medium">Standard Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      3-5 business days
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Input type="number" className="w-24" defaultValue="5.99" />
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div>
                    <h3 className="font-medium">Express Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      1-2 business days
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      className="w-24"
                      defaultValue="15.99"
                    />
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div>
                    <h3 className="font-medium">Free Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      For orders over $50
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Input type="number" className="w-24" defaultValue="50" />
                    <Switch defaultChecked />
                  </div>
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

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Configure payment options for your store.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-16 bg-muted rounded flex items-center justify-center font-medium">
                      Stripe
                    </div>
                    <div>
                      <h3 className="font-medium">Credit Card (Stripe)</h3>
                      <p className="text-sm text-muted-foreground">
                        Accept Visa, Mastercard, Amex, and more
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-16 bg-muted rounded flex items-center justify-center font-medium">
                      PayPal
                    </div>
                    <div>
                      <h3 className="font-medium">PayPal</h3>
                      <p className="text-sm text-muted-foreground">
                        Accept PayPal payments
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border p-4 rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-16 bg-muted rounded flex items-center justify-center font-medium">
                      Apple
                    </div>
                    <div>
                      <h3 className="font-medium">Apple Pay</h3>
                      <p className="text-sm text-muted-foreground">
                        Accept Apple Pay payments
                      </p>
                    </div>
                  </div>
                  <Switch />
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
