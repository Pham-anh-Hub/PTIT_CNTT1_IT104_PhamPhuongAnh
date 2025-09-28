// import type { Book } from "../interfaces/types";
import { useEffect } from "react";
import { getAllData } from "../apis/actionToData";
import { useAppDispatch } from "../redux/reduxHook.ts/useHook";
import BookItem from "./BookItem";
import type { Book } from "../interfaces/types";

interface Props {
  books: Book[];
  onEdit: (b: Book) => void;
  onDelete: (id: string) => void;
}

const BookList = ({books, onEdit, onDelete} : Props) => {
  const dispatch = useAppDispatch();
  console.log(books);
  console.log(getAllData().length);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  if (books.length === 0) {
    return (
      <div className="text-center text-2xl text-gray-500 py-8">
        No books found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((b) => (
        <BookItem key={b.id} book={b} onEdit={() =>onEdit(b)} onDelete={() => onDelete(b.id)} />
      ))}
    </div>
  );
};

export default BookList;
