
export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  occupancy: string;
  image: string;
  gallery: string[];
  price?: string;
}

export interface MeetingRoom {
  id: string;
  name: string;
  description: string;
  capacity: string;
  features: string[];
  image: string;
  gallery: string[];
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
