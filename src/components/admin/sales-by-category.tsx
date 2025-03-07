import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SalesByCategory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
                <span className="text-sm font-medium">Sneakers</span>
              </div>
              <span className="text-sm font-medium">$12,345</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-[hsl(var(--chart-1))] w-[45%]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
                <span className="text-sm font-medium">Clothing</span>
              </div>
              <span className="text-sm font-medium">$9,876</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-[hsl(var(--chart-2))] w-[35%]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-3))]" />
                <span className="text-sm font-medium">Bags</span>
              </div>
              <span className="text-sm font-medium">$7,654</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-[hsl(var(--chart-3))] w-[28%]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-4))]" />
                <span className="text-sm font-medium">Accessories</span>
              </div>
              <span className="text-sm font-medium">$5,432</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-[hsl(var(--chart-4))] w-[20%]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-5))]" />
                <span className="text-sm font-medium">Other</span>
              </div>
              <span className="text-sm font-medium">$3,210</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-[hsl(var(--chart-5))] w-[12%]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
