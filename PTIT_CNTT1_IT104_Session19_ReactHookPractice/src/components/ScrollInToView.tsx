import React, { useRef } from "react";

export default function ScrollInToView() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const navToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  //   useEffect(() => {});

  return (
    <div className="Exercise07">
      <div className="nav">
        <h1>🧭 Cuộn để tới nội dung</h1>
        <button onClick={navToContent}>Đi tới phần nội dung</button>
      </div>
      <div className="main-content" ref={contentRef}>
        <p>
          {"scrollIntoView()"} is a JavaScript method available on HTML elements
          that allows you to programmatically scroll an element into the visible
          area of the browser window. When called on an element, the browser
          will adjust the scroll position of its ancestors until the element is
          brought into view.
        </p>
      </div>
    </div>
  );
}
