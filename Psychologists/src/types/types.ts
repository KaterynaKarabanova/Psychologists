export interface RootState {
  teachers: {
    all: Teacher[];
    showed: Teacher[];
  };
  user: {
    token: string;
    email: string;
    name: string;
  };
  filter: string;
}

export interface Action {
  type: string;
  payload?: any; // You can replace 'any' with a more specific type
}

export interface Teacher {
  localeCompare(b: Teacher): number;
  id: number;
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

export interface PassVisibilityProps {
  visibility: boolean;
  toggleVisibility: () => void;
}

export interface User {
  name: string;
  email: string;
  token: string;
}

export interface RegistrationProps {
  toggleModal: () => void;
}

export interface LoginProps {
  toggleModal: () => void;
}

export interface InitialValues {
  name: string;
  email: string;
  password: string;
}

export interface InitialLoginValues {
  email: string;
  password: string;
}

export interface InitialAppointmentValues {
  email: string;
  phone: string;
  name: string;
  comment: string;
}

export interface AppointmentProps {
  name: string;
  avatar: string;
}
