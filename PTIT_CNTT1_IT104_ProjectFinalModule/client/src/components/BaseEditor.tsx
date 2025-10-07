import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import type { Task } from "../interfaces/board.interface";

interface EditorTaskProps {
  task?: Task;
}

export default function EditorTask({ task }: EditorTaskProps) {
  const editor = useRef(null);
  const [content, setContent] = useState(task?.description || "");

  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder: "Nhập nội dung mô tả công việc...",
      language: "en", // 👈 tránh lỗi i18n
    };
  }, []);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      onChange={() => {}}
    />
  );
}
