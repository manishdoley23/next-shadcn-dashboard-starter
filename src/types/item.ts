export interface Category {
  id: string;
  name: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  owner: string;
  itemName: string;
  category: Category;
  brand: Brand;
  room: Room;
  itemImage?: string[];
  invoiceImage?: string[];
  productModel?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyStatus: 'Active' | 'Expired' | 'Not Applicable';
  warrantyEndDate?: string;
  amcProvider?: string;
  amcStartDate?: string;
  amcEndDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetItemsResponse {
  success: boolean;
  message: string;
  data: {
    items: Item[];
    total: number;
    page: number;
    limit: number;
  };
}
