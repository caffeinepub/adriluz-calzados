import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: PostId;
    title: string;
    content: string;
    date: Time;
    imageUrl: string;
}
export interface ProductInput {
    name: string;
    description: string;
    available: boolean;
    sizes: Array<string>;
    imageUrl: string;
    category: string;
    priceUSD: number;
}
export type Time = bigint;
export interface ProductUpdate {
    name: string;
    description: string;
    available: boolean;
    sizes: Array<string>;
    imageUrl: string;
    category: string;
    priceUSD: number;
}
export type PostId = bigint;
export interface OrderInput {
    customerName: string;
    customerPhone: string;
    totalUSD: number;
    items: Array<CartItem>;
}
export interface BlogPostInput {
    title: string;
    content: string;
    imageUrl: string;
}
export type ProductId = bigint;
export interface CartItem {
    size: string;
    productId: ProductId;
    quantity: bigint;
}
export interface Order {
    id: OrderId;
    customerName: string;
    status: string;
    customerPhone: string;
    createdAt: Time;
    totalUSD: number;
    items: Array<CartItem>;
}
export interface Product {
    id: ProductId;
    name: string;
    description: string;
    available: boolean;
    sizes: Array<string>;
    imageUrl: string;
    category: string;
    priceUSD: number;
}
export type OrderId = bigint;
export interface backendInterface {
    createBlogPost(input: BlogPostInput): Promise<PostId>;
    createOrder(input: OrderInput): Promise<OrderId>;
    createProduct(input: ProductInput): Promise<ProductId>;
    deleteBlogPost(id: PostId): Promise<void>;
    deleteProduct(id: ProductId): Promise<void>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllOrders(): Promise<Array<Order>>;
    getAllProducts(): Promise<Array<Product>>;
    getAvailableProducts(): Promise<Array<Product>>;
    getBCVRate(): Promise<number>;
    getBlogPost(id: PostId): Promise<BlogPost>;
    getBlogPostsByDate(): Promise<Array<BlogPost>>;
    getOrder(id: OrderId): Promise<Order>;
    getProduct(id: ProductId): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getProductsByPrice(): Promise<Array<Product>>;
    setBCVRate(rate: number): Promise<void>;
    updateBlogPost(id: PostId, input: BlogPostInput): Promise<BlogPost>;
    updateOrderStatus(id: OrderId, status: string): Promise<Order>;
    updateProduct(id: ProductId, input: ProductUpdate): Promise<Product>;
}
