"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminRegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate admin registration process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/auth/login");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-xl font-bold text-primary">ShopNow</span>
            <span className="ml-2 text-sm font-medium">Admin</span>
          </div>
          <CardTitle className="text-2xl font-bold">
            Create Admin Account
          </CardTitle>
          <CardDescription>
            Register a new administrator account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminCode">Admin Registration Code</Label>
              <Input id="adminCode" type="text" required />
              <p className="text-xs text-muted-foreground">
                Enter the admin registration code provided by your system
                administrator
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create admin account"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/admin/auth/login"
              className="text-primary hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Return to store
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
