export type Data = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
};

export type FavourUser = {
  id: string,
  name: string,
  favour: string,
}

export type UserAccount = {
  id:number,
  userName: string,
  email: string,
  password : string
}

// Khai báo kiểu cho giá trị khởi tạo 
export type initialStateType = {
  status: "idle" | "pending" | "success" | "failed";
  data: Data[] ;
  error: null | string | undefined;
};
export type initialDataType = {
  status: "idle" | "pending" | "success" | "failed";
  data: FavourUser[];
  error: null | string | undefined;
};

