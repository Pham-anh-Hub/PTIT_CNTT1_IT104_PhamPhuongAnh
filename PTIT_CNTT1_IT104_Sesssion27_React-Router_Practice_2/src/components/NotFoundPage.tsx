import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <div style={{padding:0}}>
      <img style={{width:"100%", height:"99vh", position:"fixed"}}
        src="https://cdn.prod.website-files.com/65ba70a5bb6f912baf0094a3/68863ba40f2c3bb4649159c5_www.surella.fr_404(1440).webp"
        alt="notfound"
      />
     
     <div style={{position:"fixed", top:"58%",left:"28%", backgroundColor:"#FAE9ED", padding:"15px", color:"#FE3301", display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem"}}>
      <p style={{fontSize:"25px"}}>Trang web bạn cần tìm không tồn tại hoặc trang đã được di chuyển</p>
        <div style={{display:"flex", gap:12}}>
        <Button onClick={()=>{navigate("/")}} style={{backgroundColor:"#FE3301", color:"#fff", }}>Quay về trang chủ</Button>
        <Button onClick={()=>{navigate(-1)}} style={{backgroundColor:"#FE3301", color:"#fff", }}>Quay lại</Button>

        </div>
     </div>
    </div>
  );
}
