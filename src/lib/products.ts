export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isNew: boolean;
  description?: string;
  features?: string[];
  colors?: { name: string; value: string }[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Backpack",
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    rating: 4.8,
    reviewCount: 124,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    category: "bags",
    isNew: true,
    description:
      "Handcrafted from genuine leather with multiple compartments for optimal organization. This premium backpack features adjustable straps, water-resistant lining, and durable metal hardware.",
    features: [
      "Genuine full-grain leather",
      "Water-resistant interior lining",
      'Padded laptop compartment (fits up to 15")',
      "Multiple interior and exterior pockets",
      "Adjustable padded shoulder straps",
    ],
    colors: [
      { name: "Tan", value: "#D2B48C" },
      { name: "Dark Brown", value: "#5D4037" },
      { name: "Black", value: "#212121" },
    ],
    sizes: ["Standard"],
  },
  {
    id: 2,
    name: "Ultra Boost Sneakers",
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    rating: 4.9,
    reviewCount: 86,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    category: "sneakers",
    isNew: false,
    description:
      "Lightweight performance shoes with responsive cushioning for maximum comfort. Features breathable mesh upper and durable rubber outsole for excellent traction on various surfaces.",
    features: [
      "Responsive cushioning technology",
      "Breathable mesh upper",
      "Flexible rubber outsole",
      "Lightweight design (10.5 oz)",
      "Removable insole",
    ],
    colors: [
      { name: "White/Blue", value: "#FFFFFF" },
      { name: "Black/Red", value: "#000000" },
      { name: "Gray/Green", value: "#808080" },
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
  },
  {
    id: 3,
    name: "Waterproof Hiking Jacket",
    price: 89.99,
    originalPrice: 139.99,
    discount: 36,
    rating: 4.7,
    reviewCount: 52,
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    category: "clothing",
    isNew: false,
    description:
      "All-weather protection with breathable technology. This hiking jacket features a waterproof outer shell, adjustable hood, and multiple pockets for storage.",
    features: [
      "100% waterproof outer shell",
      "Breathable membrane technology",
      "Adjustable hood and cuffs",
      "Multiple zippered pockets",
      "Reflective details for visibility",
    ],
    colors: [
      { name: "Forest Green", value: "#228B22" },
      { name: "Navy Blue", value: "#000080" },
      { name: "Burgundy", value: "#800020" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 38,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    category: "accessories",
    isNew: true,
    description:
      "Elegant minimalist design with premium materials. Features Japanese quartz movement, scratch-resistant sapphire crystal, and genuine leather strap.",
    features: [
      "Japanese quartz movement",
      "Sapphire crystal glass",
      "Genuine leather strap",
      "Water resistant to 50m",
      "Stainless steel case",
    ],
    colors: [
      { name: "Black/Silver", value: "#000000" },
      { name: "Brown/Gold", value: "#8B4513" },
      { name: "Navy/Silver", value: "#000080" },
    ],
    sizes: ["One Size"],
  },
  {
    id: 5,
    name: "Canvas Tote Bag",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.6,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    category: "bags",
    isNew: false,
    description:
      "Durable canvas tote with reinforced handles and spacious interior. Perfect for shopping, beach trips, or everyday use.",
    features: [
      "Heavy-duty canvas material",
      "Reinforced handles",
      "Interior pocket with zipper",
      "Water-resistant bottom",
      "Machine washable",
    ],
    colors: [
      { name: "Natural", value: "#F5F5DC" },
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#000080" },
    ],
    sizes: ["Standard"],
  },
  {
    id: 6,
    name: "Running Performance Shoes",
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 73,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "sneakers",
    isNew: true,
    description:
      "High-performance running shoes designed for serious athletes. Features advanced cushioning, breathable upper, and superior traction for various terrains.",
    features: [
      "Responsive foam cushioning",
      "Engineered mesh upper",
      "Carbon fiber plate for energy return",
      "Durable rubber outsole",
      "Reflective elements for visibility",
    ],
    colors: [
      { name: "Red/Black", value: "#FF0000" },
      { name: "Blue/White", value: "#0000FF" },
      { name: "Black/Neon", value: "#000000" },
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
  },
  {
    id: 7,
    name: "Wool Beanie",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.4,
    reviewCount: 28,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    category: "accessories",
    isNew: false,
    description:
      "Warm and comfortable wool beanie with a stylish ribbed design. Perfect for cold weather and outdoor activities.",
    features: [
      "Premium wool blend",
      "Soft fleece lining",
      "Ribbed design for better fit",
      "Hand washable",
      "One size fits most",
    ],
    colors: [
      { name: "Charcoal", value: "#36454F" },
      { name: "Burgundy", value: "#800020" },
      { name: "Navy", value: "#000080" },
    ],
    sizes: ["One Size"],
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    rating: 4.7,
    reviewCount: 64,
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
    category: "clothing",
    isNew: false,
    description:
      "Classic denim jacket with a modern fit. Features quality denim fabric, button closure, and multiple pockets.",
    features: [
      "Premium denim fabric",
      "Button front closure",
      "Two chest pockets",
      "Adjustable button cuffs",
      "Tailored fit",
    ],
    colors: [
      { name: "Light Wash", value: "#ADD8E6" },
      { name: "Medium Wash", value: "#5F9EA0" },
      { name: "Dark Wash", value: "#191970" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return category === "all"
    ? products
    : products.filter((product) => product.category === category);
}

export function getRelatedProducts(
  productId: number,
  limit: number = 4,
): Product[] {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];

  return products
    .filter(
      (product) =>
        product.id !== productId &&
        product.category === currentProduct.category,
    )
    .slice(0, limit);
}
