import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
  const { id } = useParams(); //파라미터 쓸때 사용 * rounter.js의 :id와 명이 같아야 한다.
  console.log(id);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      console.log(res);
      setPost(res.data);
      setLoading(false);
    });
  };

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  }; //작성한 시간. 인자 써줘야 됨

  useEffect(() => {
    getPost(id);
  }, [id]); //의존성 배열

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <h1 className="card-title m-0 flex-grow-1">{post.title}</h1>
            <Link className="btn btn-secondary" to={`/blogs/${id}/edit`}>
              수정
            </Link>
          </div>
          <small className="text-muted">
            생성일 : {printDate(post.createAt)}
          </small>

          <hr />
          <p className="card-text">{post.body}</p>
          <button className="btn btn-warning" onClick={() => history(-1)}>
            뒤로
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowPage;
