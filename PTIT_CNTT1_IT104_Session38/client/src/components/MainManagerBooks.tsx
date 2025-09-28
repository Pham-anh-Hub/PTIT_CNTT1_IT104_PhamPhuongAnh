import { Button } from "@mui/material";
import { Modal } from "antd";
import BookSearchSortFilter from "./BookSearchSortFilter";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook.ts/useHook";
import type { Book } from "../interfaces/types";
import BookList from "./BookList";
import BookForm from "./BookForm";
import { useEffect, useState } from "react";
import {
  addNewData,
  deleteBookInfor,
  editBookInfo,
  filterBookCategory,
  getAllData,
  searchBook,
  sortBook,
} from "../apis/actionToData";

export default function MainManagerBooks() {
  const dispatch = useAppDispatch();
  const initialBooks = useAppSelector((state) => state.bookList.data);
  const books = useAppSelector((state) => state.bookList.filterData);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();
  console.log(books);
  const [deleting, setDeleting] = useState<Book | undefined>();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<"title" | "year">("title");
  const [sortOpt, setSortOpt] = useState<"up" | "down">("up");
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const onSearchChange = (keyword: string) => {
    // gửi dispatch hành động search
    setSearch(keyword);
    dispatch(searchBook(keyword));
  };

  const onCategoryChange = (cateValue: string) => {
    setCategoryFilter(cateValue);
    dispatch(filterBookCategory(cateValue));
  };

  const onSortChange = (sortByValue: string, sortDir: string) => {
    const sortOption = `${sortByValue}_${sortDir}`;
    console.log(sortOption);
    dispatch(sortBook(sortOption));
  };

  const onClear = () => {
    setSearch("");
    setCategoryFilter("all");
    setSortBy("title");
    setSortOpt("up");
  };

  const categories = Array.from(new Set(initialBooks.map((book) => book.category)));

  const handleSubmit = (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    if (data.id) {
      // đã có id -> sửa thông tin
      dispatch(editBookInfo(data));
    } else {
      // Thêm mới, id và data
      const id = Date.now().toString();
      console.log({ id: id, ...data });

      dispatch(addNewData({ id: id, ...data }));
    }
    setOpenForm(false);
  };

  // const filteredSorted = useMemo(() => {
  //   let out = books.slice();
  //   if (search.trim()) {
  //     const q = search.toLowerCase();
  //     out = out.filter(
  //       (b) =>
  //         b.title.toLowerCase().includes(q) ||
  //         b.author.toLowerCase().includes(q)
  //     );
  //   }
  //   if (categoryFilter !== "all")
  //     out = out.filter((b) => b.category === categoryFilter);

  //   out.sort((a, b) => {
  //     if (sortBy === "title") {
  //       const r = a.title.localeCompare(b.title);
  //       return sortOpt === "up" ? r : -r;
  //     } else {
  //       const r = a.year - b.year;
  //       return sortOpt === "up" ? r : -r;
  //     }
  //   });
  //   return out;
  // }, [books, search, categoryFilter, sortBy, sortOpt]);

  const handleDelete = (id: string) => {
    const target = books.find((book) => book.id === id);
    if (target) {
      setIsConfirm(true);
      setDeleting(target);
    }
  };

  const onEditBook = (editBook: Book) => {
    console.log(editBook);
    setEditing(editBook);
    setOpenForm(true);
  };

  const handleConfirmDel = () => {
    if (deleting) {
      dispatch(deleteBookInfor(deleting.id));
      setIsConfirm(false);
    }
  };

  const handleCancelDel = () => {
    setIsConfirm(false);
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

        <Button
          variant="contained"
          onClick={() => {
            setEditing(undefined);
            setOpenForm(true);
          }}
        >
          Add Book
        </Button>

        <div className="mt-4">
          <BookSearchSortFilter
            search={search}
            categoryFilter={categoryFilter}
            sortBy={sortBy}
            sortOpt={sortOpt}
            categoryFilters={categories}
            onSearchChange={onSearchChange}
            onCategoryFilterChange={onCategoryChange}
            onSortChange={onSortChange}
            onClear={onClear}
          />
        </div>

        <div className="mt-6">
          <BookList books={books} onEdit={onEditBook} onDelete={handleDelete} />
        </div>

        <BookForm
          open={openForm}
          initial={editing}
          onClose={() => setOpenForm(false)}
          onSubmit={handleSubmit}
        />

        <Modal
          title="Xác nhận"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isConfirm}
          onOk={handleConfirmDel}
          onCancel={handleCancelDel}
        >
          <p>
            Xác nhận xóa sách <b>{`<${deleting?.title}>`}</b> ?
          </p>
        </Modal>
      </div>
    </div>
  );
}
