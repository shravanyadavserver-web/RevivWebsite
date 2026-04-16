export interface NavLink {
  label: string;
  href: string;
}

export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IVTherapy {
  id: string;
  name: string;
  tagline: string;
  image: string;
  benefits: string[];
}

export interface BoosterShot {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface GetRevivedItem {
  icon: string;
  title: string;
  description: string;
  therapies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  quote: string;
}

export interface WhyRevivRow {
  parameter: string;
  reviv: string;
  others: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
