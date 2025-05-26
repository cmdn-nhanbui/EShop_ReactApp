const images = import.meta.glob("@/assets/images/*.png", { eager: true });

export interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  discountValue: number;
}

function importImage(url: string) {
  return (images[url] as { default: string }).default;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    price: 119.99,
    thumbnail: importImage("/src/assets/images/image.png"),
    discountValue: 0.3,
  },
  {
    id: 2,
    name: "TLoose Knit 3/4 Sleeve",
    price: 89.99,
    thumbnail: importImage("/src/assets/images/image-2.png"),
    discountValue: 0,
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    price: 89.99,
    thumbnail: importImage("/src/assets/images/image-3.png"),
    discountValue: 0,
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    price: 89.99,
    thumbnail: importImage("/src/assets/images/image-4.png"),
    discountValue: 0,
  },
];
