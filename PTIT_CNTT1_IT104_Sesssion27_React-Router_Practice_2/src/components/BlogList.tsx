import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data";

export default function BlogList() {
  return (
    <div
      style={{
        padding: "1rem",
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Danh sách bài viết</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 3rem",
          gap: "1rem",
        }}
      >
        {posts.map((post) => (
          <div
            style={{
              border: "1px solid gray",
              padding: "12px",
              width: "60%",
              borderRadius: "8px",
            }}
          >
            <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
            <p style={{ fontSize: 12 }}>{post.except}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
