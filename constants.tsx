
import React from 'react';
import { Room, StaffLink, Testimonial, MeetingRoom } from './types.ts';

export const LOGO_URL = "https://i.ibb.co/7JvXPb0d/Artboard-1-copy-5-1.png";

export const ROOMS: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    description: "Refined comfort for the discerning traveler. A perfect blend of minimalist luxury and functional space.",
    amenities: ["High-speed Wi-Fi", "Luxury Bedding", "Air Conditioning", "En-suite Bathroom"],
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1505693414953-ad7983693a3f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "double",
    name: "Double Room",
    description: "Spacious and elegant, designed for dual occupancy without compromising on personal tranquility.",
    amenities: ["Premium Twin Beds", "Smart TV", "Work Desk", "24/7 Room Service"],
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "studio",
    name: "Studio Room",
    description: "Ideal for long-stay guests, featuring a modern kitchenette for a home-away-from-home experience.",
    amenities: ["Kitchenette", "Coffee Station", "Lounge Area", "High-speed Wi-Fi"],
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "suite",
    name: "Luxury Suite",
    description: "Our crowning jewel. Expansive living spaces paired with top-tier amenities for an unforgettable stay.",
    amenities: ["Separate Living Area", "King Size Bed", "Premium Mini-bar", "City View"],
    occupancy: "2-3 Adults",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];

export const MEETING_ROOMS: MeetingRoom[] = [
  {
    id: "boardroom",
    name: "The Tidé Boardroom",
    description: "A sanctuary for strategic thinking. Our boardroom offers ultimate privacy and cutting-edge tech for executive meetings.",
    capacity: "Up to 12 Guests",
    features: ["4K Projection", "Video Conferencing", "Gourmet Catering", "Climate Controlled"],
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "grand-hall",
    name: "The Tidé Event Space",
    description: "A versatile, light-filled space perfect for product launches, intimate celebrations, or corporate workshops.",
    capacity: "Up to 50 Guests",
    features: ["Flexible Seating", "Advanced Audio", "Ambient Lighting", "Pre-function Area"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okeke",
    role: "Business Traveler",
    content: "Tidé is my sanctuary in Abuja. The balance between productivity and relaxation is perfectly struck here."
  },
  {
    id: 2,
    name: "David Mensah",
    role: "Leisure Guest",
    content: "Genuine hospitality. Every detail felt intentional and designed for my comfort."
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Corporate Executive",
    content: "The most professional yet warm hotel staff I have encountered in Nigeria. Simply excellent."
  }
];

export const STAFF_LINKS: StaffLink[] = [
  {
    title: "Daily Activities Report",
    description: "Submit daily tasks and activities by 5pm. Required for all teams.",
    url: "https://form.jotform.com/253231945252050",
    category: "Tidé Hotels & Resorts"
  },
  {
    title: "Sales Call Log",
    description: "Systematically track customer interactions, outcomes, and follow-ups.",
    url: "https://form.jotform.com/253232873561054",
    category: "Sales"
  },
  {
    title: "Facility Maintenance Report",
    description: "End-of-day daily maintenance check and quantifiable report submission.",
    url: "https://form.jotform.com/253283825156057",
    category: "Facility & work"
  },
  {
    title: "Performance Tracker",
    description: "Official platform for task management, deadlines, and performance monitoring.",
    url: "https://1drv.ms/x/c/8F3991BADB578001/IQD_0q8oO2OoQLRUVvBKw_BIAQvTxon4ZI3WXDOB4aARh8U?e=64vd3P",
    category: "People operation and culture"
  },
  {
    title: "Sales Booking & Tracking",
    description: "Sales Booking Entry & Performance Tracking Form (Google Sheets).",
    url: "https://docs.google.com/spreadsheets/d/1lBplfXdh5EfRieQBtbrg9CFPKSszJEjol1DKybY2pU8/edit?usp=sharing",
    category: "Sales"
  },
  {
    title: "Printer App",
    description: "Printer App (Requires separate password).",
    url: "https://tide-hotels-and-resorts.vercel.app/",
    category: "App"
  },
  {
    title: "Guest Feedback Form",
    description: "Access current guest feedback submissions and responses.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf8gd-nVfGaUSz4j_plF-_325xf-wvGzBKUnwY7xJBexlRC3A/viewform?usp=dialog",
    category: "Guest Relations"
  },
  {
    title: "GRO WHAT'S APP LOG",
    description: "Official log for Guest Relations Office WhatsApp communications.",
    url: "https://docs.google.com/spreadsheets/d/16BAZJeo8fpqSUKo-ERdYoSTkDes-rq1nit8Mw6cEeLc/edit?usp=sharing",
    category: "Guest Relations"
  }
];

export const TEAM_STRUCTURE = [
  "Guest Relations",
  "IT",
  "Sales",
  "People Operation and Culture",
  "Facility & work",
  "Tidé Hotels & Resorts",
  "Store",
  "Whispers",
  "Zenza",
  "Culinary"
];

export const ZENZA_DRINKS = [
  {
    category: "Whiskey",
    items: [
      { name: "Glen 18 yrs", price: 276425 },
      { name: "Glen 15 yrs", price: 174999 },
      { name: "Glen 12 yrs", price: 120000 },
      { name: "Jameson black barrel", price: 79500 },
      { name: "Black Label", price: 79000 },
      { name: "Jack Daniels", price: 56000 },
      { name: "Jameson Green irish", price: 48000 },
      { name: "Williams Lawson", price: 31000 },
    ]
  },
  {
    category: "Cognac",
    items: [
      { name: "Hennessy XO", price: 790000 },
      { name: "Remy Martins XO", price: 675625 },
      { name: "Hennessy VSOP", price: 205000 },
      { name: "Martel blue swift", price: 185250 },
      { name: "Hennessy VS", price: 180000 },
      { name: "Remy Martins VSOP", price: 158000 },
      { name: "Martel VS", price: 94000 },
    ]
  },
  {
    category: "Wines",
    items: [
      { name: "Nederburg", price: 40000 },
      { name: "Escudo Rojo", price: 40000 },
      { name: "Martini Rosso", price: 27000 },
      { name: "Dostdy Hoff Big", price: 23000 },
      { name: "Algor wine", price: 20000 },
      { name: "Carlo Rossi Red", price: 19000 },
      { name: "Carlo Rossi White", price: 19000 },
      { name: "Carlo Rossi sweet Red", price: 19000 },
      { name: "4th street", price: 18000 },
      { name: "Declan", price: 15500 },
      { name: "Four cousins Red", price: 15000 },
      { name: "Four cousins white", price: 15000 },
      { name: "Sweet lips", price: 14000 },
      { name: "Chamdor", price: 11000 },
      { name: "Veleta", price: 8000 },
    ]
  },
  {
    category: "Gin & Vodka",
    items: [
      { name: "Hendrick Gin", price: 85000 },
      { name: "Ciroc vodka", price: 80000 },
      { name: "Olmeca Tequila - Gold", price: 47000 },
      { name: "Bomabay Sapharie", price: 41000 },
      { name: "Absolute vodka Big", price: 38000 },
      { name: "Gordon gin big", price: 12000 },
      { name: "Skyy vodka small", price: 10000 },
      { name: "Gordon gin small", price: 4000 },
    ]
  },
  {
    category: "Liquor & Cream",
    items: [
      { name: "Kahlua", price: 43000 },
      { name: "Amaretto", price: 36000 },
      { name: "Vtimouth Rosso", price: 36000 },
      { name: "Baileys", price: 35000 },
      { name: "Peach Schapps", price: 33000 },
      { name: "Blue Coraco", price: 30000 },
      { name: "Campari medium", price: 30000 },
      { name: "Campari small", price: 12000 },
    ]
  },
  {
    category: "Beer & Softs",
    items: [
      { name: "Black Bullet", price: 5000 },
      { name: "Red Bull", price: 5000 },
      { name: "Chi ice tea", price: 5000 },
      { name: "Guiness Stout", price: 4000 },
      { name: "Cranberry juice", price: 3500 },
      { name: "Henekin", price: 3000 },
      { name: "Desperado", price: 3000 },
      { name: "Smirnoff Double Black", price: 3000 },
      { name: "Pack juice", price: 3000 },
      { name: "Soft drinks", price: 2000 },
      { name: "Amstel malt", price: 2000 },
      { name: "Trophy", price: 1600 },
      { name: "Malts", price: 1000 },
      { name: "Mojito", price: 1000 },
      { name: "Water", price: 600 },
    ]
  }
];
