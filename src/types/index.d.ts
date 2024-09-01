interface Response<T> {
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
