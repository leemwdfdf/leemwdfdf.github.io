//react 라우터 v6버전임
import {
  BrowserRouter as Router, // BrowserRouter가 너무 길어 Router로 쓰겠다는 말
  Routes,
  Route,
} from "react-router-dom";

//NavBar 상단메뉴
import NavBar from "./components/NavBar";

//페이지들
import routes from "./routes";



//css
import "./css/style.css";




function App() {
  return (
    <>
      <Router>

        {/* 상단메뉴 */}
        <NavBar />

        <div className="container mt-2">
          <Routes>

            {/* 배열처리 */}
            {routes.map((route) => {
              return <Route key={route.path} path={route.path} element={<route.component />} />;
            })}


            {/* 배열처리 하기전 */}
            {/*
            <Route path="/" element={<HomePage />}></Route>

            <Route path="blogs" element={<ListPage />}></Route>
            <Route path="blogs/create" element={<CreatePage />}></Route>
            <Route path="blogs/edit" element={<EditPage />}></Route>


            <Route path="images" element={<ImagesForm />}></Route>

            <Route path="ojm" element={<Ojm />}></Route>
            */}


          </Routes>
        </div>
        {/* container */}
      </Router>
    </>
    // App
  );
}

export default App;
