export type ItemType = 'COMPANY' | 'INDIVIDUAL' | 'RESELLER' | 'UNKNOWN';

export type Item = {
  id: number;
  userId: string;
  brand: string;
  description: string | null;
  type: ItemType;
  price: number;
  size: number;
};
