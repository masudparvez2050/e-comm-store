import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-9xl font-bold text-muted-foreground mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
