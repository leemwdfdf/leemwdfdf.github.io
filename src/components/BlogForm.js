import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = ( {editing} ) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const history = useNavigate();

  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then(res =>{
      console.log(res)
      setTitle(res.data.title);
      setBody(res.data.body);
    })
  }, []);




  const onSubmit = () => {
    console.log(title, body);

    axios
      .post("http://localhost:3001/posts", {
        title,
        body,
        createAt: Date.now(), //시간
      })
      .then(() => {
        history("/blogs");
      }); //post 성공하면(then) 해당링크로 이동
  };

  let [textTest, setTextTest] = useState("텍스트");

  const hTitle = (e) => {
    setTitle(e.target.value);

    setTextTest(e.target.value);
  };

  const hBody = (e) => {
    setBody(e.target.value);
  };



  return (
    <div>
      <h1>블로그 포스트 {editing ? '수정하기' : '쓰기'}</h1>
      <div className="mb-2">
        <label className="form-label">Title</label>
        <input className="form-control" value={title} onChange={hTitle} />
      </div>
      <div className="mb-2">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          rows="10"
          value={body}
          onChange={hBody}
        />
      </div>

      <button className="btn btn-primary" onClick={onSubmit}>
        {editing ? '수정하기' : '쓰기'}
      </button>

      <div>{textTest}</div>
    </div> // container
  );
};

BlogForm.propTypes = {
  editing: Boolean
};
BlogForm.defaultProps = {
  editing: false
};

export default BlogForm;
