interface IResponse<T> {
  result: T;
  targetUrl: any;
  success: boolean;
  error: any;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

interface IResult<T> {
  totalCount: number;
  items: T;
}

interface IPaymentMethod {
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

interface IVendor {
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

interface ICar {
  name: string;
  engName: string;
  imageUrl: string;
  is_deleted: boolean;
  is_active: boolean;
  created_by: number;
  created_date: string;
  updated_by: number;
  updated_date: string;
  deleted_by: number;
  deleted_date: string;
  carVendorId: number;
  carVendor: IVendor;
  id: number;
}

interface IRegister {
  canLogin: boolean;
}

interface ILogin {
  accessToken: string;
  encryptedAccessToken: string;
  expireInSeconds: number;
  userId: number;
}

interface IServiceType {
  id: number;
  nameEN: string;
  nameAR: string;
}
