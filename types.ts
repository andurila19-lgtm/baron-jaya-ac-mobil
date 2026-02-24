
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
