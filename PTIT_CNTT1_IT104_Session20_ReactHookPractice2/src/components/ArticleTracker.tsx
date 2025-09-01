import React, { useEffect, useReducer, useState } from "react";

type Article = {
  id: number;
  title: string;
  topic: string;
};

export default function ArticleTracker() {
  const [completedArticle, setCompleteArticle] = useState<Article[]>([]);
  const [donePercent, setDonePercent] = useState<number>(0);
  const initialData: Article[] = [
    { id: 1, title: "Hướng dẫn sử dụng React", topic: "React" },
    { id: 2, title: "Hướng dẫn sử dụng CSS", topic: "CSS" },
    { id: 3, title: "Hướng dẫn sử dụng HTML", topic: "HTML" },
    { id: 4, title: "Hướng dẫn sử dụng JS", topic: "JS" },
    { id: 5, title: "Hướng dẫn sử dụng TS", topic: "TS" },
  ];
  const reducer = (
    state: Article[],
    action: { type: string; payload: Article }
  ) => {
    switch (action.type) {
      case "COMPLETE":
        setCompleteArticle([...completedArticle, action.payload]);
        return state.filter((item) => item.id !== action.payload.id);
      case "UNCOMPLETE":
        setCompleteArticle(
          completedArticle.filter((item) => item.id !== action.payload.id)
        );
        return [...state, action.payload];
      default:
        return initialData;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialData);
  const onComplete = (id: number) => {
    const target = initialData.find((item: Article) => item.id === id);
    if (target) {
      console.log(target);
      dispatch({ type: "COMPLETE", payload: target });
    }
  };
  const onUnComplete = (id: number) => {
    const target = initialData.find((item: Article) => item.id === id);
    if (target) {
      console.log(target);
      dispatch({ type: "UNCOMPLETE", payload: target });
    }
  };
  useEffect(() => {
    setDonePercent((completedArticle.length / initialData.length) * 100);
  });
  return (
    <div className="exercise10">
      <div className="header">
        <h1>Quản lý bài viết</h1>
        <div className="progress">
          <div style={{ width: `${donePercent}%` }}></div>
        </div>
        <div className="count-detail">
          Đã đọc {completedArticle.length}/{initialData.length} bài viết{" "}
          {`(${donePercent}%)`}
        </div>
      </div>
      <div
        style={{
          border: "1px solid #eeeeee",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "15px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <div className="unread-quantity">
          <h3>Bài viết chưa đọc </h3>
          <div>{state.length}</div>
        </div>
        <div className="unRead-article">
          {state.length > 0 ? (
            <>
              {state.map((item: Article) => (
                <div className="detail">
                  <span>
                    <h4>{item.title}...</h4>
                    <p>{item.topic}</p>
                  </span>
                  <span>
                    <button onClick={() => onComplete(item.id)} type="button">
                      Đánh dấu đã đọc
                    </button>
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>
              <h3 style={{ color: "gray", textAlign: "center" }}>
                Không còn bài viết chưa đọc
              </h3>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          border: "1px solid #eeeeee",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "15px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
        className="read-article"
      >
        <div className="read-quantity">
          <h3>Bài viết đã đọc</h3>
          <span>{completedArticle.length}</span>
        </div>
        <div>
          {completedArticle.length > 0 ? (
            <>
              {completedArticle.map((item) => (
                <div className="read-detail">
                  <span>
                    <h4>{item.title}...</h4>
                    <p>{item.topic}</p>
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        onUnComplete(item.id);
                      }}
                    >
                      Đánh dấu chưa đọc
                    </button>
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>
              <h3 style={{ color: "gray", textAlign: "center" }}>
                Chưa có bài viết nào được đọc
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
