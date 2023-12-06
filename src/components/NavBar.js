//react 라우터 v6버전임
import { Link, NavLink } from "react-router-dom";
  


const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container" style={{ justifyContent: "left" }}>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="blogs" className={({isActive}) => {
              return isActive ? "nav-link text-primary" : "nav-link"
          }}>
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="images" className={({isActive})=>{
                return isActive ? "nav-link text-danger" : "nav-link"
            }}>
              Images
            </NavLink >
          </li>
          <li className="nav-item">
            <NavLink to="ojm" className="nav-link">
              오지명!
            </NavLink >
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
