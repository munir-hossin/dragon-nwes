import { AuthContext } from "../context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { handleNameClick } from "../pages/handle";

export default function Header({ setNewsData }) {
  const { user, singinOutUser } = useContext(AuthContext);

  
  const navigate = useNavigate();

  const handleClick = () => {
    singinOutUser()
      .then(() => {
        console.log("user is logged out");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container text-center space-y-2">
        <div className="text-center flex justify-center">
          <img src="https://i.ibb.co.com/3Nw4wLh/logo1.png" alt="img" />
        </div>
        <p className="text-xl font-bold">Journalism Without Fear or Favour</p>
        <p className="text-xl font-bold">Sunday, November 27, 2025</p>
      </div>

      <div className="flex justify-between px-4 py-2 mx-24 mt-4 bg-gray-200">
        <button className="bg-red-600 text-white py-1 mr-2 px-4">Latest</button>

        <marquee>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("Jimmy Dane", setNewsData)}
          >
            Jimmy Dane
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("Jennifer Wood", setNewsData)}
          >
            Jennifer Wood
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("system", setNewsData)}
          >
            system
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("Reuters", setNewsData)}
          >
            Reuters
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("John Pike", setNewsData)}
          >
            John Pike
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("MarketScreener", setNewsData)}
          >
            MarketScreener
          </span>

          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("Jimmy Dane", setNewsData)}
          >
            Jimmy Dane
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("Jennifer Wood", setNewsData)}
          >
            Jennifer Wood
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("system", setNewsData)}
          >
            system
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("Reuters", setNewsData)}
          >
            Reuters
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("John Pike", setNewsData)}
          >
            John Pike
          </span>
          <span
            className="cursor-pointer px-2"
            onClick={() => handleNameClick("MarketScreener", setNewsData)}
          >
            MarketScreener
          </span>
        </marquee>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div></div>
        <div className="flex justify-center mt-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/login"}>LogIn</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to={"/orders"}>Details</Link>
                </li>

                {/* <li>
                    <Link to={"/profile"}>profile</Link>
                  </li> */}
              </>
            )}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute top-[0px] right-0">
            <div className="flex  items-center">
              <div className="w- h- rounded-full bg-gray-40 mr-3 ">
                {user ? (
                  <Link to={"/profile"}>
                    <IoIosContact className="text-5xl" />
                  </Link>
                ) : (
                  <IoIosContact className="text-5xl" />
                )}
              </div>

              <div>
                {user ? (
                  <>
                    <button
                      onClick={handleClick}
                      className="bg-slate-700 mr-24 text-white py-1 px-1"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <Link
                    to={"/login"}
                    className="bg-slate-700 mr-24 text-white py-1 px-3"
                  >
                    logIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
