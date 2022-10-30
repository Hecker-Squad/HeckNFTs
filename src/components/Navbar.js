import logo from "./Assets/heck-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white">
        <div className="flex-1">
          <Link to="/">
            <a
              className="btn btn-ghost normal-case text-xl text-black"
              href="/"
            >
              <img
                src={logo}
                alt="logo"
                id="logo"
                style={{ height: "30px", width: "30px" }}
              />
              Heck NFT's
            </a>
          </Link>
          <div className="form-control hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-gray-200 focus:hover:bg-gray-300"
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="navbar">
            <div className="navbar-start"></div>
            <div className="navbar-center hidden lg:flex bg-white">
              <ul className="menu menu-horizontal pr-10 text-black">
                <Link to="/">
                  <li>
                    <a href="/">Home</a>
                  </li>
                </Link>

                <Link to="/explore">
                  <li>
                    <a href="/">Explore</a>
                  </li>
                </Link>

                <Link to="/create">
                  <li>
                    <a href="/">Create NFT</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://placeimg.com/80/80/people"
                      alt="avatars"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/userInfo">
                      <a className="justify-between" href="profile.js">
                        Profile
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a className="justify-between" href="profile.js">
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
