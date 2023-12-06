import { Link } from "react-router-dom";

const Ojm = () => {

  //필터공부
  // const arr = [1,2,3];
  
  //   arr.filter((value)=>{
  //     return value !== 1
      

  //   });
    
  //   const arr1 = [{id:1, text:'일'},{id:2, text:'이'}];
  //   arr1.filter(object =>{
  //     return object.id !== 1;
  //   });


  return (
    <>
      <h6>박영규</h6>

      <hr />
      <div>연결하기</div>
      <Link to="/blogs/create">글쓰기</Link>
      <Link to="../images">이미지</Link>


     </>
  );
};

export default Ojm;
