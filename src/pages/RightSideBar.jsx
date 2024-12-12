import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RightSideBar({ newsData }) {


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [loading, setLoading] = useState(true); // Loading state

  // Effect to update the loading state when newsData is received
  useEffect(() => {
    if (newsData && newsData.length > 0) {
      setLoading(false); // Set loading to false when data is available
    }
  }, [newsData]);

  // Login with Google
  const handleClickGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Login with GitHub
  const handleClickGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <aside className="col-span-2 bg-white p-4 shadow-md overflow-y-auto">
        <h2 className="text-lg font-bold mb-3">Login With</h2>
        <button
          onClick={handleClickGoogle}
          className="w-full hover:bg-gray-200 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400"
        >
          Login with Google
        </button>
        <button
          onClick={handleClickGithub}
          className="w-full hover:bg-gray-200 border py-1 rounded-sm border-gray-500 mb-4"
        >
          Login with GitHub
        </button>

        <h2 className="text-lg font-bold mb-4">Find us on</h2>
        <ul className="space-y-2 ">
          <li className="w-full cursor-pointer hover:bg-gray-200 px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">
            Sports: World Cup
          </li>
          <li className="w-full cursor-pointer hover:bg-gray-200 px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">
            Business: News
          </li>
          <li className="w-full cursor-pointer hover:bg-gray-200 px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">
            Culture: From India
          </li>
          <li className="w-full cursor-pointer hover:bg-gray-200 px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">
            Education: Updates
          </li>
          <li className="w-full cursor-pointer hover:bg-gray-200 px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">
            Health: Wellness
          </li>
        </ul>

        {/* News Section */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {newsData.length > 0 ? (
              newsData.map((newsItem) => (
                <div key={newsItem._id} className="border p-4 rounded shadow">
                  {/* <h2 className="text-sm font-semibold">{newsItem.title}</h2> */}
                  <img
                    src={newsItem.image_url}
                    alt={newsItem.title}
                    className="w-full  my-2"
                  />
                  <p className="mb-4 text-xs">{newsItem.details}</p>
                  <Link
                    to={"/orders"}
                    className="border p-1 hover:bg-gray-200 rounded"
                  >
                    See more...
                  </Link>
                </div>
              ))
            ) : (
              <p>No news available!</p>
            )}
          </div>
        )}
      </aside>
    </>
  );
}

export default RightSideBar;
