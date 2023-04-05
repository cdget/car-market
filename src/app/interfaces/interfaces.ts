export interface Brand {
  id: number;
  name: string;
}

export interface Model {
  price:number;
  make:string;
  model:string
}

export interface ModelDetails {
  make:string;
  model:string
  fuel_type: string;
  class: string;
  transmission: string;
  year: string;
  price:number;
}