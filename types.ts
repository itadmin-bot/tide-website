
export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  occupancy: string;
  image: string;
  price?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface StaffLink {
  title: string;
  description: string;
  url: string;
  category: string;
}
