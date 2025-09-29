import "./App.css";
import DeleteFileUploaded from "./components/DeleteFileUploaded";
import UploadMultiFile from "./components/UploadMultiFile";
import UploadSingleFile from "./components/UploadSingleFile";

function App() {
  return (
    <>
      <UploadSingleFile />
      {/* Bài 2 */}
      <DeleteFileUploaded />
      <UploadMultiFile />
    </>
  );
}

export default App;
