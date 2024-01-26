export interface RootState {
  teachers: Teacher[];
  user: {
    token: string;
    name: string;
  };
}

export interface Action {
  type: string;
  payload?: any; // You can replace 'any' with a more specific type
}

export interface Teacher {
  about: string;
  avatar_url: string;
  experience: string;
  initial_consultation: string;
  license: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews?: Review[];
  specialization: string;
}
export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface ModalProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

export interface TeachersListProps {
  array: Teacher[];
}

export interface TeachersCardProps {
  el: Teacher;
}

export interface ReviewListProps {
  reviews: Review[] | undefined;
}
