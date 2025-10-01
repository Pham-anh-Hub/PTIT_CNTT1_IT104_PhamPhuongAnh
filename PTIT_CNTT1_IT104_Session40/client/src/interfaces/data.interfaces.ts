export type ProductStatus = "active" | "inactive";

export type ProductRow = {
    id: string;
    code: string;
    name: string;
    category: string;
    price: number;
    image: string;
    status: ProductStatus;
};

export interface ProductFormValues {
    code: string;
    name: string;
    category: string;
    price: number | string;
    image?: string;
    status: ProductStatus;
}

export interface initialProductType {
    products: ProductRow[],
    filterProducts: ProductRow[],
    status: "idle" | "pending" | "success" | "failed",
    error: string | null
}

export type CategoryStatus = "active" | "inactive";

export interface initialCategoryType {
    categories: CategoryRow[],
    filterCategories: CategoryRow[],
    status: "idle" | "pending" | "success" | "failed",
    error: string | null
}


export type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
};


export interface CategoryFormValues {
    name: string;
    description?: string;
    status: CategoryStatus;
  }
