"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ArrowLeft } from "lucide-react";

export default function AdminForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset email process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
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
            Reset Admin Password
          </CardTitle>
          <CardDescription>
            Enter your admin email address and we&apos;ll send you a link to
            reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-2 w-10 h-10 mx-auto flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p>
                Check your email for a link to reset your password. If it
                doesn&apos;t appear within a few minutes, check your spam
                folder.
              </p>
              <Button asChild className="mt-4">
                <Link href="/admin/auth/login">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to login
                </Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending reset link..." : "Send reset link"}
              </Button>
            </form>
          )}
          {!isSubmitted && (
            <div className="mt-4 text-center text-sm">
              <Link
                href="/admin/auth/login"
                className="text-primary hover:underline"
              >
                <ArrowLeft className="inline mr-1 h-3 w-3" /> Back to login
              </Link>
            </div>
          )}
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
