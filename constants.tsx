
import React from 'react';
import { Room, StaffLink, Testimonial } from './types.ts';

export const LOGO_URL = "https://i.ibb.co/7JvXPb0d/Artboard-1-copy-5-1.png";

export const ROOMS: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    description: "Refined comfort for the discerning traveler. A perfect blend of minimalist luxury and functional space.",
    amenities: ["High-speed Wi-Fi", "Luxury Bedding", "Air Conditioning", "En-suite Bathroom"],
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "double",
    name: "Double Room",
    description: "Spacious and elegant, designed for dual occupancy without compromising on personal tranquility.",
    amenities: ["Premium Twin Beds", "Smart TV", "Work Desk", "24/7 Room Service"],
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "studio",
    name: "Studio Room",
    description: "Ideal for long-stay guests, featuring a modern kitchenette for a home-away-from-home experience.",
    amenities: ["Kitchenette", "Coffee Station", "Lounge Area", "High-speed Wi-Fi"],
    occupancy: "2 Adults",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "suite",
    name: "Luxury Suite",
    description: "Our crowning jewel. Expansive living spaces paired with top-tier amenities for an unforgettable stay.",
    amenities: ["Separate Living Area", "King Size Bed", "Premium Mini-bar", "City View"],
    occupancy: "2-3 Adults",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
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
    category: "Operations"
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
    category: "Maintenance"
  },
  {
    title: "Performance Tracker",
    description: "Official platform for task management, deadlines, and performance monitoring.",
    url: "https://1drv.ms/x/c/8F3991BADB578001/IQD_0q8oO2OoQLRUVvBKw_BIAQvTxon4ZI3WXDOB4aARh8U?e=64vd3P",
    category: "HR"
  },
  {
    title: "Sales Booking & Tracking",
    description: "Sales Booking Entry & Performance Tracking Form (Google Sheets).",
    url: "https://docs.google.com/spreadsheets/d/1lBplfXdh5EfRieQBtbrg9CFPKSszJEjol1DKybY2pU8/edit?usp=sharing",
    category: "Sales"
  },
  {
    title: "Printer App",
    description: "Receipt & Reservation Printer App (Requires separate password).",
    url: "https://tide-hotels-and-resorts.vercel.app/",
    category: "Operations"
  },
  {
    title: "Guest Feedback Form",
    description: "Access current guest feedback submissions and responses (In Progress).",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf8gd-nVfGaUSz4j_plF-_325xf-wvGzBKUnwY7xJBexlRC3A/viewform?usp=dialog",
    category: "Guest Relations"
  }
];

export const TEAM_STRUCTURE = [
  "Guest Relations",
  "IT",
  "POC",
  "Maintenance",
  "Operations",
  "Store",
  "Whispers",
  "Zenza",
  "Culinary"
];
