import { Progress } from "antd";
import axios from "axios";
import { useState } from "react";

export default function UploadSingleFile() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [progress, setProgress] = useState({ started: false, percent: 0 });

  const handleChangeInput = (e) => {
    setFile(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };
  const handleUpload = async () => {
    setProgress({ ...progress, started: true });
    if (!file) {
      alert("Không có file nào được chọn");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "demo_upload_file");
      formData.append("cloud_name", "phamphuonganh");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/phamphuonganh/image/upload",
        formData,
        {
          onUploadProgress(progressEvent) {
            setProgress((prevState) => {
              return { ...prevState, percent: progressEvent.progress * 100 };
            });
          },
        }
      );
      setImageUrl(response.data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setPreviewImg(null);
      setProgress({...progress, started:false})
    }
  };

  return (
    <div>
      {previewImg ? (
        <img
          style={{
            border: "1px solid #dadada",
            height: "200px",
            width: "300px",
          }}
          src={previewImg}
          alt="photo"
        />
      ) : (
        <div
          style={{
            border: "1px solid #dadada",
            height: "200px",
            width: "300px",
          }}
        ></div>
      )}

      {progress.started ? (
        <>
          <h2>Uploading...</h2>
          <Progress percent={progress.percent} showInfo={progress.started} />
        </>
      ) : (
        <h2>Hình ảnh đã tải lên</h2>
      )}
      {imageUrl ? (
        <div>
          <img
            style={{
              border: "1px solid #dadada",
              height: "300px",
              width: "500px",
            }}
            src={imageUrl}
            alt="photo"
          />
        </div>
      ) : (
        <div
          style={{
            border: "1px solid #dadada",
            height: "300px",
            width: "500px",
          }}
        ></div>
      )}
      <input onChange={handleChangeInput} type="file" name="" id="" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
