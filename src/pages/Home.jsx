import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const [newsData, setNewsData] = useState([]); // To store fetched data

  
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch data when the component loads
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/news/category/01"
        );
        const data = await response.json(); // Convert response to JSON
        setNewsData(data.data); // API's 'data' field contains the news
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  

  return (
    <>
      {/* Pass setNewsData to Header */}

      {/* <Header setNewsData={setNewsData} /> */}

      <main className="container mx-auto grid grid-cols-9 gap-6 mt-8 h-svh">
        {/* Left Sidebar */}
        <LeftSideBar newsData={newsData} />
      
        

        {/* Main News Section */}
        <section className="col-span-5 space-y-8 overflow-y-auto p-4 bg-white shadow-md">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {newsData.length > 0 ? (
                newsData.map((newsItem) => (
                  <div
                    key={newsItem._id}
                    className="border p-4 rounded shadow"
                  >
                    <h2 className="text-lg font-semibold">
                      {newsItem.title}
                    </h2>
                    <img
                      src={newsItem.image_url}
                      alt={newsItem.title}
                      className="w-full h-96 my-2"
                    />
                    <p className="mb-4">{newsItem.details}</p>
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
        </section>

        {/* Right Sidebar */}
        <RightSideBar newsData={newsData} />
      </main>
    </>
  );
}

export default Home;





























// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import LeftSideBar from "./LeftSideBar";
// import RightSideBar from "./RightSideBar";

// function Home() {
//   const [newsData, setNewsData] = useState([]); // To store fetched data
//   const [loading, setLoading] = useState(true); // Loading state

//   // Function to rearrange data (clicked item moves to first position)
//   const handleNameClick = (name) => {
//     setNewsData((prevNewsData) => {
//       const selectedItem = prevNewsData.find(
//         (item) => item.author?.name === name
//       );
//       const filteredNews = prevNewsData.filter(
//         (item) => item.author?.name !== name
//       );

//       // Rearrange the data: clicked item at first position
//       return selectedItem ? [selectedItem, ...filteredNews] : prevNewsData;
//     });
//   };

//   useEffect(() => {
//     // Fetch data when the component loads
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           "https://openapi.programming-hero.com/api/news/category/01"
//         );
//         const data = await response.json(); // Convert response to JSON
//         setNewsData(data.data); // API's 'data' field contains the news
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     // <!-- Grid Layout -->
//     <>
//       <div className="flex justify-center">
//         <span
//           className="border mx-2 py-2 px-2 cursor-pointer"
//           onClick={() => handleNameClick("Jimmy Dane")}
//         >
//           Jimmy Dane
//         </span>
//         <span
//           className="border mx-2 py-2 px-2 cursor-pointer"
//           onClick={() => handleNameClick("Jennifer Wood")}
//         >
//           Jennifer Wood
//         </span>
//         <span
//           className="border mx-2 py-2 px-2 cursor-pointer"
//           onClick={() => handleNameClick("system")}
//         >
//           system
//         </span>
//         <span
//           className="border mx-2 py-2 px-2 cursor-pointer"
//           onClick={() => handleNameClick("Reuters")}
//         >
//           Reuters
//         </span>
//         <span
//           className="border mx-2 py-2 px-2 cursor-pointer"
//           onClick={() => handleNameClick("John Pike")}
//         >
//           John Pike
//         </span>
//         <span
//           className="border mx-2 py-2 px-2 cursor-pointer"
//           onClick={() => handleNameClick("MarketScreener")}
//         >
//           MarketScreener
//         </span>
//       </div>

//       <main className="container mx-auto grid grid-cols-9 gap-6 mt-8 h-svh">
//         {/* <!-- Left Sidebar (Scrollable) --> */}
//         <LeftSideBar />

//         <section className="col-span-5 space-y-8 overflow-y-auto p-4 bg-white shadow-md">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="grid grid-cols-1 gap-4">
//               {newsData.length > 0 ? (
//                 newsData.map((newsItem) => (
//                   <div
//                     key={newsItem._id}
//                     className="border p-4 rounded shadow"
//                   >
//                     <h2 className="text-lg font-semibold">
//                       {newsItem.title}
//                     </h2>
//                     <img
//                       src={newsItem.image_url}
//                       alt={newsItem.title}
//                       className="w-full h-96 my-2"
//                     />
//                     <p className="mb-4">{newsItem.details}</p>
//                     <Link
//                       to={"/orders"}
//                       className="border p-1 hover:bg-gray-200 rounded"
//                     >
//                       See more...
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <p>No news available!</p>
//               )}
//             </div>
//           )}
//         </section>

//         {/* <!-- Right Sidebar --> */}
//         <RightSideBar />
//       </main>
//     </>
//   );
// }

// export default Home;











































// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import LeftSideBar from "./LeftSideBar";
// import RightSideBar from "./RightSideBar";

// function Home() {
//     const [newsData, setNewsData] = useState([]); // To store fetched data
//     const [loading, setLoading] = useState(true); // Loading state


  

//     useEffect(() => {
//       // Fetch data when the component loads
//       const fetchNews = async () => {
//         try {
//           const response = await fetch(
//             "https://openapi.programming-hero.com/api/news/category/01"
//           );
//           const data = await response.json(); // Convert response to JSON
//           setNewsData(data.data); // API's 'data' field contains the news
//           setLoading(false);
//         } catch (error) {
//           console.error("Error fetching news:", error);
//           setLoading(false);
//         }
//       };
  
//       fetchNews();
//     }, []);

// console.log(newsData);


//   return (
//     // <!-- Grid Layout -->

//     <>
    
//     <div className="flex justify-center">
//             <span className="border mx-2 py-2 px-2">Jimmy Dane</span>
//             <span className="border mx-2 py-2 px-2">Jennifer Wood</span>
//             <span className="border mx-2 py-2 px-2">system</span>
//             <span className="border mx-2 py-2 px-2">Reuters</span>
//             <span className="border mx-2 py-2 px-2">John Pike</span>
//             <span className="border mx-2 py-2 px-2">MarketScreener</span>
//          </div>

    
//     <main className="container mx-auto grid grid-cols-9 gap-6 mt-8 h-svh ">

//         {/* <!-- Left Sidebar (Scrollable) --> */}
//         <LeftSideBar />
  
//         <section className="col-span-5 space-y-8 overflow-y-auto p-4 bg-white shadow-md">
//         {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//           {newsData.length > 0 ? (
//             newsData.map((newsItem) => (
//               <div key={newsItem._id} className="border p-4 rounded shadow">
//                 <h2 className="text-lg font-semibold">{newsItem.title}</h2>
//                 <img
//                   src={newsItem.image_url}
//                   alt={newsItem.title}
//                   className="w-full h-96 my-2"
//                 />
//                 <p className="mb-4">{newsItem.details}</p>
//                 <Link to={"/orders"} className=" border p-1 hover:bg-gray-200 rounded">
//                   See more...
//                  </Link>
//               </div>
//             ))
//           ) : (
//             <p>No news available!</p>
//           )}
//         </div>
//       )}
//         </section>

//         {/* <!-- Right Sidebar */}
//         <RightSideBar />
//     </main>
//     </>
//   );
// }

// export default Home;




































// import { useEffect, useState } from "react";

// function Home(props) {
//     const [newsData, setNewsData] = useState([]); // To store fetched data
//     const [loading, setLoading] = useState(true); // Loading state
  
//     useEffect(() => {
//       // Fetch data when the component loads
//       const fetchNews = async () => {
//         try {
//           const response = await fetch(
//             "https://openapi.programming-hero.com/api/news/category/01"
//           );
//           const data = await response.json(); // Convert response to JSON
//           setNewsData(data.data); // API's 'data' field contains the news
//           setLoading(false);
//         } catch (error) {
//           console.error("Error fetching news:", error);
//           setLoading(false);
//         }
//       };
  
//       fetchNews();
//     }, []);



//   return (
//     // <!-- Grid Layout -->
//     <main className="container mx-auto grid grid-cols-9 gap-6 mt-8 h-svh ">

//         {/* <!-- Left Sidebar (Scrollable) --> */}
//         <aside className="col-span-2 bg-white p-4 shadow-md overflow-y-auto">
//             <h2 className="text-lg font-bold mb-4">All Categories</h2>
//             <ul className="space-y-1">
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">National News</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Breaking News</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Regular News</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Sports</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Culture</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Politics</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Technology</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Education</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Health</li>
//                 <li className="hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer">Travel</li>
//             </ul>
//         </aside>

//         {/* <!-- Main Content (Scrollable) --> */}
//         <section className="col-span-5 space-y-8 overflow-y-auto p-4 bg-white shadow-md">
//         {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//           {newsData.length > 0 ? (
//             newsData.map((newsItem) => (
//               <div key={newsItem._id} className="border p-4 rounded shadow">
//                 <h2 className="text-lg font-semibold">{newsItem.title}</h2>
//                 <img
//                   src={newsItem.thumbnail_url}
//                   alt={newsItem.title}
//                   className="w-full h-96 my-2"
//                 />
//                 <p>{newsItem.details}</p>
//               </div>
//             ))
//           ) : (
//             <p>No news available!</p>
//           )}
//         </div>
//       )}

//         </section>



//         {/* <!-- Right Sidebar (Scrollable) --> */}
//         <aside className="col-span-2 bg-white p-4 shadow-md overflow-y-auto">
//             <h2 className="text-lg font-bold mb-3">Login With</h2>
//             <button  className="w-full border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Login with Google</button>
//             <button className="w-full border py-1 rounded-sm border-gray-500 mb-4">Login with GitHub</button>

//             <h2 className="text-lg font-bold mb-4">Find us on</h2>
//             <ul className="space-y-2 ">

//                 <li className="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Sports: Forld Cup</li>
//                 <li className="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Business: ash</li>
//                 <li className="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Culture: Fn India</li>
//                 <li className="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Education:cies</li>
//                 <li className="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Health: Meeness</li>

//                 {/* <!-- Add more items to test scrolling --> */}
//             </ul>
//         </aside>
   
//     </main>
//   );
// }

// export default Home;











