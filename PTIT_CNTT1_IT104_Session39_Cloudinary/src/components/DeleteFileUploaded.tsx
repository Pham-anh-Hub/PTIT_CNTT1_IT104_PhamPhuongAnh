import axios from "axios";
import React, { useState } from "react";

export default function DeleteFileUploaded() {
  const [images, setImages] = useState<File[]>([]);
  try {
    const response = axios.get(
      "https://api.cloudinary.com/v1_1/phamphuonganh/image/upload"
    );
    console.log(response.then);
  } catch (error) {
    console.error(error);
  }
  return <div>Delete</div>;
}
