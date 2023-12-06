import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";

const ListPage = () => {
  //useNavigate 링크
  const history = useNavigate();

  const [posts, setPosts] = useState([]); //빈 배열

  const [loading, setLoading] = useState(true); //로딩 초기작성

  const getPosts = () => {
    axios.get(`http://localhost:3001/posts`).then((res) => {
      //console.log(res.data);
      setPosts(res.data); //db데이터 가져오기
      setLoading(false);
    });
  };

  //포스트 삭제 버튼
  const deleteBlog = (e, id) => {
    e.stopPropagation(); //부모링크안되게
    console.log("delete~");
    axios
      .delete(`http://localhost:3001/posts/${id}`) //``백틱처리
      .then(() => {
        setPosts(
          (prevPosts) => prevPosts.filter((post) => post.id !== id)

          //체크 db에서 삭제되도 화면에 남아있으므로 삭제처리
          //filter를 통해서 id가 같지 않을경우에만 남겨두고 같을경우 제외
        );
      });
  };

  //useEffect [] 뒤에 빈 배열을 넣어서 한번만 실행이 되게
  useEffect(() => {
    getPosts();
  }, []);

  const renderBlogList = () => {
    if (loading) { //로딩시
      return (


        <LoadingSpinner />


      );
    }

    if (posts.length === 0) { //내용 없을시
      return <h4 className="text-warning">포스트 내용이 없습니다.</h4>;
    }

    return posts.map((post) => {
      return (
        <Card
          key={post.title}
          titleLoad={post.title}
          bodyLoad={post.body}
          onClick={() => history(`/blogs/${post.id}`)}
        >
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={(e) => deleteBlog(e, post.id)} //함수로 넘겨줘야됨
            >
              삭제
            </button>
          </div>
        </Card>
      );
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Blogs</h1>
        <Link to="/blogs/create" className="btn btn-primary">
          생성버튼
        </Link>
      </div>
      <div className="text-white">listPage</div>


      { renderBlogList() }


    </>
  );
};

export default ListPage;
