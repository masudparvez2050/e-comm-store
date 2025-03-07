import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Contact Us
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're here to help! Send us a message and we'll get back to you
                as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll respond within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full md:w-auto">Send Message</Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Find us using the information below.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Fashion Street
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          support@shopnow.example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9am - 6pm
                          <br />
                          Saturday: 10am - 4pm
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
