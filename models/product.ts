export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  priceDollars: number;
  image: string;
};

export type ProductWithDetails = Product & {
  description: string;
  category: string;
  rating: Rating;
};
