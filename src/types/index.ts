export interface FlowerProduct {
  id: string;
  name: string;
  botanicalName: string;
  price: number;
  edition: string;
  description: string;
  stems: string[];
  fragranceNotes: string;
  dimensions: string;
  image: string;
  category: 'seasonal' | 'permanent' | 'couture' | 'wedding';
  isRunwayDrop?: boolean;
  stockCount?: number;
}

export interface CartItem {
  id: string;
  product: FlowerProduct;
  quantity: number;
  vesselChoice?: string;
  ribbonChoice?: string;
  cardMessage?: string;
}

export interface VesselOption {
  id: string;
  name: string;
  material: string;
  price: number;
  image: string;
  description: string;
}

export interface FlowerStemOption {
  id: string;
  name: string;
  botanical: string;
  pricePerStem: number;
  color: string;
  image: string;
  rarity: 'Heirloom' | 'Archival' | 'Seasonal' | 'Imperial';
}

export interface BotanicalAccentOption {
  id: string;
  name: string;
  price: number;
  image: string;
  texture: string;
}

export interface RibbonOption {
  id: string;
  name: string;
  colorName: string;
  hex: string;
  material: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Runway' | 'Architecture' | 'Still Life' | 'Bespoke Weddings';
  location: string;
  year: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}
