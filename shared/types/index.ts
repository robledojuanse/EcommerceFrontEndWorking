export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  stock: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  priceAtPurchase: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}
