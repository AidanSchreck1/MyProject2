import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <div className="flex items-center">
          <img src={logo} />
          <Link
            to="/"
            className="text-xl font-bold ml-2
        cursor-pointer"
          >
            Appli Track
          </Link>
        </div>

        <div>
          <button className="link link-hover mr-2">
            <Link to="/about">About</Link>
          </button>
          <button className="link link-hover mr-2">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
