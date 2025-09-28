export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
}


export interface initialBooksType{
  status : "idle" | "pending" | "success" | "failed"
  data: Book[]
  filterData: Book[]
  error: null | undefined | string
}