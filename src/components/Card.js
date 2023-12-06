import PropTypes from 'prop-types';

const Card = ({ titleLoad, bodyLoad, children, onClick }) => {
  //const Card = (props) =>{ 쓸 필요없이 바로 구조분해가능

  console.log(children);
  return (
    <div className="card mb-1 cursor-pointer" onClick={onClick}>
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center">
          <div>{titleLoad}</div>
          {children}
          {/* {children && <button className="btn btn-primary">{children}</button>} */}
          {/* ListPage의 컨텐츠가 있으면 <버튼 />내용을 보여줌 */}
        </div>

        {/* {titleLoad}, {bodyLoad}  */}
        {/*구조분해하면 {props.titleLoad} {props.bodyLoad} 에서 축약됨*/}
      </div>




    </div>
  );
};

// propTypes 검사
Card.propTypes = {
  titleLoad:  PropTypes.string.isRequired, // 문자처리, 필수로 하고 싶을때는 isRequired 없으면 콘솔창에 오류뜸
  bodyLoad: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

// 디폴트값 - titleLoad에 아무것도 없을때 '<타이틀 제목ㅋ>'이 나옴
Card.defaultProps = {
  titleLoad: '<타이틀 제목ㅋ>',
  children: null,
  onClick: () => {}, //빈 함수
};

export default Card;
