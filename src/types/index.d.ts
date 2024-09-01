interface TResponse<T> {
  result: Result<T>;
  targetUrl: any;
  success: boolean;
  error: any;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

interface Result<T> {
  totalCount: number;
  items: T;
}

interface PaymentMethod {
  nameEN: string;
  nameAR: string;
  id: number;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Vendor {
  name: string;
  engName: string;
  is_deleted: boolean;
  is_active: boolean;
  created_by: number;
  created_date: string;
  updated_by: number;
  updated_date: string;
  deleted_by: number;
  deleted_date: string;
  imgUrl: string;
  id: number;
}
