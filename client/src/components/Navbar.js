import logo from "./Assets/heck-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-black" href="./Assets/heck0logo.svg">
          <img src={logo} alt="logo" id="logo" style={{ height: "30px", width: "30px" }} />
          Heck NFT's</a>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-gray-200 focus:hover:bg-gray-300" style={{ width: "1200px" }}
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="navbar">
          <div className="navbar-start">
          </div>
          <div className="navbar-center hidden lg:flex bg-white">
            <ul className="menu menu-horizontal pr-10 text-black">
              <li>
                <a href="landing.html">Home</a>
              </li>

              <li>
                <a href="collection.html">Collection</a>
              </li>

              <li>
                <a href="forum.html">Forum</a>
              </li>

              <li>
                <a href="support.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="avatars" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between" href="profile.js">
                    Profile
                  </a>
                </li>
                <li><a href="favourites.js">Favourites</a></li>
                <li><a href="watchlist.js">Watch List</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
