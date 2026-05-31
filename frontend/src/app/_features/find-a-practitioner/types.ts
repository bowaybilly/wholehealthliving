export type Specialty = {
  whlSpecialtyId: number;
  specialtyName: string;
};

export type Provider = {
  id: string;
  providerId: string;
  lastName: string;
  firstName: string;
  address1: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  orgName: string;
  latitude: number;
  longitude: number;
  distance: number;
  language?: string;
  sex?: string;
  specialties: Specialty[];
};

export type SearchResponse = {
  items: Provider[];
};

export type PractitionerSearchForm = {
  clientDisplayName: string;
  whlSpecialtyId: string;
  lineOfBusiness: string;
  planType: string;
  zipCode: string;
  mileageRadius: string;
  practitionerFirstName: string;
  practitionerLastName: string;
};

export type PractitionerSearchState = {
  apiBase: string;
  specialties: Specialty[];
  clients: string[];
  lobs: string[];
  planTypes: string[];
  providers: Provider[];
  status: string;
  loadingOptions: boolean;
  searching: boolean;
};
