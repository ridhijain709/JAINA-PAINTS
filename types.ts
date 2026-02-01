
export interface Product {
  id: string;
  category: 'paint' | 'sanitary';
  name: string;
  brand: string;
  description: string;
  image: string;
  tags: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export interface InquiryFormData {
  name: string;
  businessName?: string;
  phone: string;
  projectType: 'Residential' | 'Commercial' | 'Contractor';
  message: string;
}
