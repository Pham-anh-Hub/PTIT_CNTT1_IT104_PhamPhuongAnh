import { message, Progress } from "antd";
import axios from "axios";
import React, { useState } from "react";

export default function UploadMultiFile() {
  const [files, setFiles] = useState<File[]>([]);
  const [previewImgs, setPreviewImgs] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [progress, setProgress] = useState({ uploading: false, pc: 0 });
  const [messageApi, contextHolder] = message.useMessage();

  const handleInputFile = (e) => {
    const fileUploads = Array.from(e.target.files);
    setFiles(fileUploads);
    const imgPrev = fileUploads.map((file) => URL.createObjectURL(file));
    setPreviewImgs(imgPrev);
  };
  const handleUpload = async () => {
    setProgress({ ...progress, uploading: true });
    const fileUrls = [];
    try {
      for await (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "demo_upload_multifile");
        formData.append("cloud_name", "phamphuonganh");

        const response = axios.post(
          "https://api.cloudinary.com/v1_1/phamphuonganh/image/upload",
          formData,
          {
            onUploadProgress(progressEvent) {
              setProgress((prevState) => {
                return { ...prevState, pc: progressEvent.progress * 100 };
              });
            },
          }
        );
        fileUrls.push((await response).data.url);
        console.log(fileUrls);
      }
      setImageUrls(fileUrls);
    } catch (error) {
      console.error(error);
    } finally {
      setProgress({ ...progress, uploading: false });
      messageApi.open({
        type: "success",
        content: "Hình ảnh đã được tải lên",
      });
      console.log(imageUrls);
    }
  };

  return (
    <div>
      <h2>UploadMultiFile</h2>
      {previewImgs ? (
        <div
          style={{
            padding: "8px",
            width: "600px",
            height: "400px",
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            border: "1px solid #dadada",
          }}
        >
          {previewImgs.map((image) => (
            <img
              style={{
                width: "100px",
                height: "70px",
              }}
              src={image}
              alt=""
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            width: "30%",
            height: "300px",
            display: "flex",
            border: "1px solid #dadada",
          }}
        ></div>
      )}

      {progress.uploading ? (
        <>
          <div>Uploading...</div> <Progress percent={progress.pc} />
        </>
      ) : (
        <>
          {/* <h2>Hình ảnh đã được tải lên</h2> */}

          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {imageUrls.map((image) => (
              <img
                style={{ width: "250px", height: "240px" }}
                src={image}
                alt=""
              />
            ))}
          </div>
        </>
      )}

      <input onChange={handleInputFile} type="file" multiple />
      <button onClick={handleUpload}>Upload</button>
      {contextHolder}
    </div>
  );
}
