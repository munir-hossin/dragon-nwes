import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { IoIosContact } from "react-icons/io";


export default function Header() {
  const { user, singinOutUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleClick = () => {
    singinOutUser()
      .then(() => {
        console.log("user is logged out");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-base-100">

<div className="py-3 bg-white ">
      <div className="space-y-4">
        <div className="container text-center space-y-2 ">
            {/* <h1 className="text-4xl font-bold">The Dragon News</h1> */}
              <div className="text-center flex justify-center"> 
              <img className="" src="https://i.ibb.co.com/3Nw4wLh/logo1.png" alt="img" /> 
            </div>
            <p className="text-xl font-bold">Journalism Without Fear or Favour</p>
            <p className="text-xl font-bold">Sunday, November 27, 2025</p>

        </div>
        <div className="flex  justify-between px-4  py-2  mx-24 bg-gray-200 ">
            <button className="bg-red-600 text-white py-1 mr-2 px-4 ">latest</button>
            <marquee >Match Highlights: Germany vs Spain as it happened Lorem ipsum 
                Match Highlights: Germany vs Spain as.... Lorem ipsum dolor sit amet. </marquee>
        </div>
        <div  className="flex justify-between">
            <div></div>
            <ul className="menu menu-horizontal px-1 ">
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
           <div className=" relative">
          <div className="flex absolute ml-[-192px]">
          <div className="w-6 h-6 rounded-full bg-gray-400 mr-3">
            <IoIosContact className="text-2xl" />  
            </div>
            
              {/* <button className="bg-slate-700 mr-24 text-white py-1 px-3">Login</button> */}
          <div>
            {user ? (
              <>
                {/* <span>{user?.email}</span> */}
            
                {/* <img referrerPolicy="no-referrer" src={user?.photoURL} alt="igm" /> */}
                
                <button onClick={handleClick} className="bg-slate-700 text-white py-1 px-1" >
                  Log out
                </button>
              </>
            ) : (
              <Link to={"/login"} className="bg-slate-700 mr-24 text-white py-1 px-3" >
                logIn
              </Link>
            )}
            
          </div>
          </div>

           </div>
        </div>
      </div>
    </div>

      {/* <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Register</Link>
            </li>
            <li>
              <Link>LogIn</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
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
                <Link to={"/orders"}>orders</Link>
              </li>
              <li>
                <Link to={"/profile"}>profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user?.email}</span>
            <button onClick={handleClick} className="btn">
              Log out
            </button>
          </>
        ) : (
          <Link to={"/login"} className="btn">
            logIn
          </Link>
        )}
      </div> */}

      
    </div>
  );
}
