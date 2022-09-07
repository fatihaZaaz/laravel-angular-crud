export interface Package{
  id?: number;
  name?: string;
  client?: string;
  status?: string;
  shipping_address?: string;
  storage_location_id?: number;
  storage_locations?: any;
}