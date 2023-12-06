//import logo from './logo.svg';
import { useState } from "react";
import "./css/style.css";

function App() {
  console.log("render");

  const [num1, setNum] = useState(1);

  const double = () => {
    const doubledNum = num1 * 2; //콘솔로그 값과 동일

    //setNum(doubledNum);

    // setNum((prevState)=> {
    //   return prevState *2;
    // }); 내용을 축약하면 아래와 같이!!

    setNum((prevState) => prevState * 2); //return {} 생략할 수 있음

    console.log(doubledNum);
  };

  return (
    <>
      <div>안녕</div>
      <div>{num1}</div>
      <button className="btn btn-primary" onClick={double}>
        Submit
      </button>

      <div class="container text-center">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </>
    // App
  );
}

export default App;
