import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartItem as CartItemType, useCart } from "@/lib/cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (value: number) => {
    updateQuantity(item.id, value);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.category}</p>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <Input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(parseInt(e.target.value) || 1)
            }
            className="h-8 w-12 border-0 text-center"
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="ml-4 w-20 text-right">
        <p className="font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        onClick={() => removeItem(item.id)}
      >
        <Trash2 className="h-4 w-4 text-muted-foreground" />
      </Button>
    </div>
  );
}
