import { FlowerProduct, VesselOption, FlowerStemOption, BotanicalAccentOption, RibbonOption, GalleryItem } from '../types';

export const PRODUCTS: FlowerProduct[] = [
  {
    id: 'nocturne-peony',
    name: 'The Nocturne Peony',
    botanicalName: 'Paeonia suffruticosa "Nigra"',
    price: 380,
    edition: 'Edition 04 / 50',
    description: 'An architectural composition of rare charcoal-velvet tree peonies harvested at dusk in Kyoto, paired with Japanese dark plum branches and wild hellebore stems.',
    stems: ['Black Dragon Peonies', 'Deep Crimson Ranunculus', 'Dusk Hellebores', 'Bronze Plum Foliage'],
    fragranceNotes: 'Damp cedarwood, velvet musk, warm night amber',
    dimensions: '65cm H × 45cm W',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
    category: 'couture',
    isRunwayDrop: true,
    stockCount: 6
  },
  {
    id: 'ophelia-ivory',
    name: "Ophelia's Garden",
    botanicalName: 'Rosa damascena "Alabaster"',
    price: 320,
    edition: 'Permanent Archive',
    description: 'Cascading garden roses from Grasse, wild Icelandic poppies, bleached ruscus, and trailing green hellebore designed in asymmetrical French salon style.',
    stems: ['Grasse Garden Roses', 'Paperwhite Anemones', 'Icelandic Silk Poppies', 'Trailing Ivy'],
    fragranceNotes: 'Green stem sap, white tea, morning bergamot',
    dimensions: '55cm H × 40cm W',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
    category: 'permanent',
    stockCount: 14
  },
  {
    id: 'solstice-anemone',
    name: 'Solstice Eclipse',
    botanicalName: 'Anemone coronaria & Fritillaria',
    price: 290,
    edition: 'Autumn Solstice Release',
    description: 'Deep purple fritillaria, ink-black center anemones, and smoky sweet peas arranged with architectural precision inspired by Japanese Ikebana masters.',
    stems: ['Black Star Anemones', 'Checkered Fritillaria', 'Smoked Lavender Sweet Peas'],
    fragranceNotes: 'Spicy clove, dried crushed figs, wild iris',
    dimensions: '50cm H × 35cm W',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1200&auto=format&fit=crop',
    category: 'seasonal',
    isRunwayDrop: true,
    stockCount: 8
  },
  {
    id: 'calla-monolith',
    name: 'The Calla Monolith',
    botanicalName: 'Zantedeschia aethiopica',
    price: 440,
    edition: 'Sculptural Series N° 09',
    description: 'Stark, sculptural white calla lilies bound with blackened copper wire and submerged in architectural geometry for modern gallery environments.',
    stems: ['Giant Dutch Calla Lilies', 'Monstera Obliqua', 'Blackened Copper Stems'],
    fragranceNotes: 'Pure ozone, cold porcelain, damp moss',
    dimensions: '80cm H × 30cm W',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1200&auto=format&fit=crop',
    category: 'couture',
    stockCount: 4
  },
  {
    id: 'chateau-vermeil',
    name: 'Château Vermeil',
    botanicalName: 'Rosa centifolia & Dahlia',
    price: 360,
    edition: 'Bordeaux Harvest Drop',
    description: 'Rich wine-hued dinnerplate dahlias, garden spray roses, and wild blackberry briars evocative of an 18th-century Dutch still-life masterpiece.',
    stems: ['Rip City Dahlias', 'David Austin Tess Roses', 'Blackberry Branches', 'Smokebush'],
    fragranceNotes: 'Black currant liquor, bourbon rose, smoked oak',
    dimensions: '60cm H × 50cm W',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
    category: 'seasonal',
    stockCount: 11
  },
  {
    id: 'venetian-nuptial',
    name: 'Venetian Grandioso',
    botanicalName: 'Paeonia & Hydrangea Aspera',
    price: 590,
    edition: 'Haute Bridal Edition',
    description: 'A grand tablescape centerpiece created for historic palazzos: colossal blush tree peonies, antique hydrangea, trailing jasmine, and dried lunaria coins.',
    stems: ['Blush Tree Peonies', 'Antique Hydrangea', 'Trailing Jasmine Vine', 'Mother of Pearl Lunaria'],
    fragranceNotes: 'Sweet honeyed nectar, jasmine blossoms, powdery amber',
    dimensions: '70cm H × 65cm W',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    category: 'wedding',
    stockCount: 5
  }
];

export const VESSELS: VesselOption[] = [
  {
    id: 'murano-fluted',
    name: 'Fluted Murano Glass',
    material: 'Hand-blown Venetian Crystal',
    price: 140,
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop',
    description: 'Ribbed, hand-blown smoke glass created by artisanal glassmakers in Murano.'
  },
  {
    id: 'travertine-monolith',
    name: 'Raw Roman Travertine',
    material: 'Honed Italian Limestone',
    price: 180,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    description: 'Sculpted from a single block of unpolished travertine with natural mineral pitting.'
  },
  {
    id: 'matte-obsidian',
    name: 'Matte Obsidian Ceramic',
    material: 'High-fire Stoneware',
    price: 110,
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop',
    description: 'Volcanic textured stoneware finished in a velvety midnight matte glaze.'
  },
  {
    id: 'alabaster-urn',
    name: 'Alabaster Salon Urn',
    material: 'Translucent Spanish Alabaster',
    price: 220,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    description: 'Hand-lathed translucent stone that subtly catches and softens ambient candlelight.'
  }
];

export const STEM_OPTIONS: FlowerStemOption[] = [
  {
    id: 'stem-peony-black',
    name: 'Black Dragon Tree Peony',
    botanical: 'Paeonia suffruticosa',
    pricePerStem: 28,
    color: '#3B151F',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop',
    rarity: 'Imperial'
  },
  {
    id: 'stem-rose-baccara',
    name: 'Velvet Black Baccara Rose',
    botanical: 'Rosa "Black Baccara"',
    pricePerStem: 18,
    color: '#4A0E17',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=600&auto=format&fit=crop',
    rarity: 'Archival'
  },
  {
    id: 'stem-ranunculus-butterfly',
    name: 'Japanese Butterfly Ranunculus',
    botanical: 'Ranunculus asiaticus',
    pricePerStem: 22,
    color: '#D4AF37',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop',
    rarity: 'Heirloom'
  },
  {
    id: 'stem-anemone-panda',
    name: 'White Panda Anemone',
    botanical: 'Anemone coronaria',
    pricePerStem: 16,
    color: '#F4F1EA',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop',
    rarity: 'Seasonal'
  },
  {
    id: 'stem-calla-ivory',
    name: 'Grand Duchess Calla Lily',
    botanical: 'Zantedeschia aethiopica',
    pricePerStem: 24,
    color: '#FAF8F5',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop',
    rarity: 'Imperial'
  },
  {
    id: 'stem-sweetpea-smoke',
    name: 'Smoked Lavender Sweet Pea',
    botanical: 'Lathyrus odoratus',
    pricePerStem: 14,
    color: '#7B6D8D',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&auto=format&fit=crop',
    rarity: 'Seasonal'
  }
];

export const BOTANICAL_ACCENTS: BotanicalAccentOption[] = [
  {
    id: 'accent-lunaria',
    name: 'Mother of Pearl Lunaria',
    price: 35,
    texture: 'Translucent seed pods with an iridescent silvery sheen',
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'accent-eucalyptus-silver',
    name: 'Silver Dollar Eucalyptus',
    price: 25,
    texture: 'Powdery blue-green architectural foliage with aromatic crispness',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'accent-jasmine-tendrils',
    name: 'Trailing Night Jasmine Tendrils',
    price: 30,
    texture: 'Delicate twisting vines with fragrant unopened white pinwheels',
    image: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'accent-bleached-ruscus',
    name: 'Sculptural Bleached Ruscus',
    price: 28,
    texture: 'Ghostly bone-white botanical foliage offering dramatic contrast',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=800&auto=format&fit=crop'
  }
];

export const RIBBON_OPTIONS: RibbonOption[] = [
  {
    id: 'ribbon-raw-merlot',
    name: 'Frayed French Silk',
    colorName: 'Vintage Merlot',
    hex: '#5C1D2E',
    material: '100% Habotai Raw Silk with torn feathered edge'
  },
  {
    id: 'ribbon-parchment',
    name: 'Hand-loomed Linen Ribbon',
    colorName: 'Unbleached Flax',
    hex: '#D5CDBF',
    material: 'Organic Belgian linen tape'
  },
  {
    id: 'ribbon-noir-velvet',
    name: 'Heavy Italian Silk Velvet',
    colorName: 'Midnight Noir',
    hex: '#161514',
    material: 'Double-faced silk velvet from Como'
  },
  {
    id: 'ribbon-antique-bronze',
    name: 'Liquid Satin Ribbon',
    colorName: 'Antique Bronze',
    hex: '#9C7A4A',
    material: 'Lustrous vintage metallic woven silk'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Balenciaga Couture Salon Installation',
    category: 'Runway',
    location: 'Avenue George V, Paris',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall'
  },
  {
    id: 'gal-2',
    title: 'The Solitary Peony Study',
    category: 'Still Life',
    location: 'Studio Éphémère, Tokyo',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'gal-3',
    title: 'Château de Chantilly Grand Wedding Canopy',
    category: 'Bespoke Weddings',
    location: 'Chantilly, France',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide'
  },
  {
    id: 'gal-4',
    title: 'Monolithic Travertine Floral Columns',
    category: 'Architecture',
    location: 'Kyoto National Museum Pavilion',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall'
  },
  {
    id: 'gal-5',
    title: 'Botanical Couture Lookbook: Noir Flora',
    category: 'Runway',
    location: 'Milan Fashion Week Pavilion',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Villa d’Este Lake Como Nuptials',
    category: 'Bespoke Weddings',
    location: 'Lake Como, Italy',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide'
  }
];
