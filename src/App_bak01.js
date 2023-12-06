//import logo from './logo.svg';
import "./css/style.css";
import { useState } from 'react';

function App() {

  let post = "gangnam udon";
  const name = "블로그입니다.";
  let number = 34;
  let number2 = 5;
  


  //화살표 함수
  const double = (n) => {
    return n * 2;
  };

  //일반함수
  const double2 = function(n){
    return n * 3;
  }

  const total = (n, m) => {
    return n * 2 + m * 3 ;
  }

  const printHello = () => {
    console.log('hello');
  }



  //★★state
  let [wTit01,b] = useState('남자 코트 추천');
  let [wTit02,c] = useState('강남 우동 맛집');
  let [wTit03,d] = useState('파이썬 독학');
  let [date,e] = useState('2월 17일 발행');

  const [num1, setNumber] = useState(number);
  let numDouble = () => {

    setNumber(num1 * 2);

  }


  

  //1. import{useState}
  //2. useState(보관할자료)
  //3. let[작명1, 작명2]
  //작명1: state 보관했던 자료
  //작명2: state 변경 도와주는 함수
  //★변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용!!



  return (
    <>

      <div className="App">

        <div className="black-nav">
          <h4 id={post} style={{ color: '#fff', fontSize: "24px" }}>
            ReactBlog
          </h4>
        </div>
        <h4>{name}</h4>

        {/* list */}
        <div className="list">
          <h4 title={wTit01}>{wTit01}</h4>
          <p>{date}</p>
          <div>{double(number)}</div>
          <div>총 합계는 {double(number)} + {double2(number2)} = {total(number, number2)} 입니다.</div>

          <button className="btn" onClick={printHello}>전송</button>
          
          <div>{num1}</div>
          <button className="btn" onClick={numDouble}>숫자 불리기</button>

        </div> 




        <div className="list">
          <h4>{wTit02}</h4>
          <p>{date}</p>
        </div>
        <div className="list">
          <h4>{wTit03}</h4>
          <p>{date}</p>
        </div>

      </div> 
    </>
    // App
  );
}

export default App;
