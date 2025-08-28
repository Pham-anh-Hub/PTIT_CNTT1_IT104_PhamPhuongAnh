import React, { useState } from "react";

export default function RandomQuote() {
  const quotes: string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
    "Học thầy không tày học bạn",
    "Học ăn, học nói, học gói, học mở",
    "Hổ dữ không ăn thịt con",
    "Học thầy học bạn, vô vạn phong lưu",
    "Học đi đôi với hành",
    "Hải Vân bát ngát nghìn trùng, Hòn Hành ở đấy là trong vịnh Hàn.",
    "Hỡi cô tát nước bên đàng, Sao cô múc ánh trăng vàng đổ đi?",
    "Học trò trong Quảng ra thi, Thấy cô gái Huế thì đi không đành",
    "Học là học để làm người Biết điều hơn thiệt biết lời thị phi",
    "Họ hàng xa, không bằng láng giềng gần",
    "Học hành vất vả kết quả ngọt bùi",
  ];
  const [indexQuote, setIndexQuote] = useState<number>(0);

  const randomQuote = () => {
    const indexRandom = Math.round(Math.random() * (quotes.length - 1));
    console.log(indexRandom);
    setIndexQuote(indexRandom);
  };

  return (
    <div className="Exercise05">
      <h2>
        <h2>🧠 Câu nói tryền cảm hứng hôm nay</h2>
        <div>
          <i>"{quotes[indexQuote]}"</i>
        </div>
        <button onClick={randomQuote}>Lấy câu nói mới</button>
      </h2>
    </div>
  );
}
