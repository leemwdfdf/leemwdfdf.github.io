import { useState } from "react";
import sam01 from "../images/sam01.jpg"; //이미지 임포트

// 배열 map 공부
const arr = [1, 2, 3];
const res = [];
for (let i = 0; i < arr.length; i++) {
  res.push(arr[i] * 2 + ", ");
}

const res1 = arr.map((value) => {
  return value * 3;
});
//축약해서
const res2 = arr.map((value) => value * 4 + ", ");

//index에 접근하고 싶으면
const res3 = arr.map((v, index) => "[" + index + "] ");

//객체배열
const items = [
  { id: 1, name: "Lee" },
  { id: 2, name: "MW" },
];
const result = items.map((item, index) => {
  return (
    <div>
      <b>번호 {item.id}는</b>{" "}
      <span>
        {item.name} 입니다. 인덱스 : {index}
      </span>
    </div>
  );
});

const ImagesForm = () => {
  const PB_URL = process.env.PUBLIC_URL;

  const [imgok01, setImgok01] = useState("../images/p01.jpg");

  const changeImg = () => {
    alert("클릭");
    setImgok01("../images/p04.jpg");
    return;
  };

  return (
    <>
      <br />
      <br />
      {res}
      <br />
      {res1}
      <br />
      {res2}
      <br />
      {res3}
      <hr />
      {result}

      <h3 className="title_h3">이미지 img 사용법</h3>
      <h5>1. import에 등록시킴 - 이미지 많을시 그닥...</h5>
      <img src={sam01} style={{ width: "400px" }} alt="sam01" />
      <br />
      <br />
      <h5>
        2. public 폴더내의 절대 경로로 이용 하고 process.env.PUBLIC_URL 사용
      </h5>
      <img
        className="col-6"
        alt="p01"
        onClick={changeImg}
        src={PB_URL + imgok01}
      />

      <img
        className="col-4"
        alt="p02"
        src={PB_URL + "../images/p02.jpg"}
        style={{ verticalAlign: "top" }}
      />
      <br />
      <br />
      <h5>3. background-image</h5>
      <div className="back_bg01"></div>
      <div>안녕</div>
    </>
  );
};

export default ImagesForm;
