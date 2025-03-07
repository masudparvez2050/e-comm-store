import { useCart } from "@/lib/cart";

export function OrderSummary() {
  const { items, totalPrice } = useCart();
  const subtotal = totalPrice();
  const shipping = items.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

      <div className="divide-y">
        {items.map((item) => (
          <div key={item.id} className="py-3 flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                Qty: {item.quantity}
              </p>
            </div>
            <p className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t mt-4 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t my-4 pt-4">
          <div className="flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
