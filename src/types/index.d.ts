interface IResponse<T> {
  result: T;
  targetUrl: any;
  success: boolean;
  error: any;
  unAuthorizedRequest: boolean;
  __abp: boolean;
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

interface IApplication {
  version: string;
  releaseDate: string;
  features: Features;
}

interface ICurrentInfo {
  application: Application;
  user: IUser;
}

interface IUser {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  id: number;
}

interface IResult<T> {
  totalCount: number;
  items: T;
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

interface ICarModel {
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

interface IPaymentMethod {
  nameEN: string;
  nameAR: string;
  id: number;
}

interface ICar {
  model_Year: number;
  board_No: string;
  car_Lic_No: string;
  last_KMs_Usages: number;
  more_Desc: string;
  is_deleted: boolean;
  is_active: boolean;
  is_new_car: boolean;
  created_by: number;
  created_date: string;
  updated_by: number;
  updated_date: string;
  deleted_by: number;
  deleted_date: string;
  engineType: string;
  car_Lic_Eng: string;
  userId: number;
  user: any;
  carVendorId: number;
  carVendor: any;
  carModelId: number;
  carModels: any;
  carColorId: number;
  carColors: any;
  carModelsEngineId: number;
  carModelsEngines: any;
  carFuleTypeId: number;
  carFuleTypes: any;
  id: number;
}
