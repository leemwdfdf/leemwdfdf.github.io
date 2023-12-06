

//★★★★페이지들

//홈페이지
import HomePage from "./pages/HomePage";

//Blog List 페이지
import ListPage from "./pages/ListPage";

//Blog Create 페이지
import CreatePage from "./pages/CreatePage";

//Blog Edit 페이지
import EditPage from "./pages/EditPage";

//Blog Show 페이지
import ShowPage from "./pages/ShowPage";


//이미지 페이지
import ImagesForm from "./components/Images";

//오지명 페이지
import Ojm from "./pages/Ojm";





// 페이지가 많으면 복잡하니 배열처리
const routes= [
    {
      path: '/',
      component:HomePage
    },
    {
      path: '/blogs',
      component:ListPage
    },
    {
      path: '/blogs/create',
      component:CreatePage
    },
    {
      path: '/blogs/:id/edit',
      component:EditPage
    },
    {
      path: '/blogs/:id',
      component:ShowPage
    },

    {
      path: '/images',
      component:ImagesForm
    },
    {
      path: '/ojm',
      component:Ojm
    },
  
  ];
  
  export default routes;