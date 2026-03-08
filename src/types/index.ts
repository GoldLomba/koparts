export interface Engine {
  id: number;
  name: string;
  model: string;
  brand: 'Daewoo' | 'Chevrolet' | 'Hyundai';
  volume: string;
  power: string;
  year: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  warranty: string;
  mileage?: string;
  condition: 'new' | 'used' | 'refurbished';
  probel?: string;
}
