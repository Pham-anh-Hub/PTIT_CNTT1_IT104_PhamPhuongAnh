import React, { useState } from "react";
import "./PracticeTodolist.css";
import { v4 as uuidv4 } from "uuid";
// import Swal from "sweetalert2";

interface Todo {
  id: number | string;
  name: string;
  isDone: boolean;
}

export default function TodoList() {
  const [statusBtn, setStatusBtn] = useState<string>("add");
  const [targetEdit, setTargetEdit] = useState<Todo>();
  const [targetDelete, setTargetDelete] = useState<Todo>();
  const [showModel, setShowModel] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const listTodo = JSON.parse(localStorage.getItem("listJob") || "[]");
    return listTodo;
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      alert("Tên công việc không được để trống");
      return;
    }

    const newJob: Todo = {
      id: uuidv4(),
      name: inputValue.trim(),
      isDone: false,
    };

    const updatedTodos = [...todos, newJob];
    setTodos(updatedTodos);
    localStorage.setItem("listJob", JSON.stringify(updatedTodos));
    setInputValue("");
  };

  const handleDelete = (todoDel: Todo) => {
    setShowModel(true);
    setTargetDelete(todoDel);
  };

  const handleChangeStatus = (id: number | string) => {
    const listJobUpdate = todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    console.log(listJobUpdate);
    setTodos(listJobUpdate);
    localStorage.setItem("listJob", JSON.stringify(listJobUpdate));
  };

  const handleEdit = (todo: Todo) => {
    setStatusBtn("edit");
    setInputValue(todo.name);
    setTargetEdit(todo);
  };

  const handleSetNew = () => {
    if (inputValue) {
      if (targetEdit) {
        const updateList = todos.map((todo) =>
          todo.id === targetEdit.id ? { ...todo, name: inputValue } : todo
        );

        console.log(updateList);
        setTodos(updateList);
        localStorage.setItem("listJob", JSON.stringify(updateList));
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Your work has been saved",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        setInputValue("");
        setStatusBtn("add");
      }
    }
  };

  const confirmDelete = () => {
    const updateList = todos.filter(
      (todo: Todo) => todo.id !== targetDelete?.id
    );
    setTodos(updateList);
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className=" flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        onChange={handleChangeInput}
                        value={inputValue}
                      />
                    </div>
                    {statusBtn === "add" ? (
                      <>
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="btn btn-info ms-2"
                        >
                          Thêm
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleSetNew}
                          type="submit"
                          className="btn btn-info ms-2"
                        >
                          Sửa
                        </button>
                      </>
                    )}
                  </form>
                  {/* Tabs navs */}
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {todos.map((todo: Todo) => (
                          <li
                            key={todo.id}
                            className="list-group-item d-flex align-items-center border-0 mb-2  rounded justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={todo.isDone}
                                onChange={() => handleChangeStatus(todo.id)}
                              />
                              {todo.isDone ? (
                                <s>{todo.name}</s>
                              ) : (
                                <span>{todo.name}</span>
                              )}
                            </div>
                            <div>
                              <a
                                onClick={() => handleEdit(todo)}
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                              >
                                <i className="fas fa-pencil-alt me-3" />
                              </a>
                              <a
                                onClick={() => handleDelete(todo)}
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                              >
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      {todos.filter((todo) => todo.isDone).length !==
                      todos.length ? (
                        <>
                          <h4>
                            Công việc đã hoàn thành:{" "}
                            <b>
                              {todos.filter((todo) => todo.isDone).length}/
                              {todos.length}
                            </b>
                          </h4>
                        </>
                      ) : (
                        <>
                          <h4>✅ Công việc đã hoàn thành</h4>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModel ? (
        <div className="confirm-model">
          <div onClick={() => setShowModel(false)} className="overlay"></div>
          <div className="main-model">
            <div>
              <p>
                Bạn có chắc chắn xóa cv <b>{targetDelete?.name}</b>
              </p>
            </div>
            <div className="btn-action">
              <button onClick={() => setShowModel(false)} type="button">
                Hủy
              </button>
              <button onClick={confirmDelete} type="button">
                Xóa
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
