import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import {
  logout,
} from "../../app/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  return (
    <nav>

      <Link to="/">
        Dashboard
      </Link>

      <Link to="/jobs">
        Jobs
      </Link>

      <Link to="/saved-jobs">
        Saved Jobs
      </Link>

      <button
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  );
};

export default Navbar;