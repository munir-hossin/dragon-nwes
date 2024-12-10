import { useEffect, useState } from "react";
// import { Link } from "react-router";


export default function Orders() {
  const [newsData, setNewsData] = useState([]); 
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
    
      const fetchNews = async () => {
        try {
          const response = await fetch(
            "https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a"
          );
          const data = await response.json(); 
          setNewsData(data.data); 
          setLoading(false);
        } catch (error) {
          console.error("Error fetching news:", error);
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);




  return (

    // <!-- Grid Layout -->
    <div class="container mx-auto grid grid-cols-12 gap-6 mt-8 h-screen">
      {/* <!-- Left Content (Scrollable) --> */}
      <section class="col-span-9 bg-white shadow-md p-6 overflow-y-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {newsData.length > 0 ? (
            newsData.map((newsItem) => (
              <div key={newsItem._id} className="border p-4 rounded shadow">
                <h2 className="text-lg font-semibold">{newsItem.title}</h2>
                <img
                  src={newsItem.thumbnail_url}
                  alt={newsItem.title}
                  className="w-full h-96 my-2"
                />
                <p>{newsItem.details}</p>
              </div>
            ))
          ) : (
            <p>No news available!</p>
          )}
        </div>
      )}
      </section>

      {/* <!-- Right Sidebar (Scrollable) --> */}
      <aside class="col-span-3 bg-white p-4 shadow-md overflow-y-auto">
        <h2 class="text-lg font-bold mb-3">Login With</h2>
        <button class="w-full border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Login with Google</button>
        <button class="w-full border py-1 rounded-sm border-gray-500 mb-4">Login with GitHub</button>

        <h2 class="text-lg font-bold mb-4">Related News</h2>
        <ul class="space-y-2 ">

          <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Sports: Forld Cup</li>
          <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Business: ash</li>
          <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Culture: Fn India</li>
          <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Education:cies</li>
          <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Health: Meeness</li>

          {/* <!-- Add more items to test scrolling --> */}
        </ul>
      </aside>
    
      {/* <Link to={"- /"} className="btn border mt-4">
        See more...
      </Link> */}

    </div>
  );
}






































// import { Link } from "react-router-dom";

// export default function Orders() {
//   return (

//     // <!-- Grid Layout -->
//     <div class="container mx-auto grid grid-cols-12 gap-6 mt-8">

//       {/* <!-- Left Content (Scrollable) --> */}
//       <section class="col-span-9 bg-white shadow-md p-6 overflow-y-auto">
//         <h2 class="text-3xl font-bold mb-4">Biden Pledges Nearly $3 Billion To Ukraine</h2>
//         {/* <img src="https://via.placeholder.com/800x400" alt="News Image" class="w-full mb-6"> */}
//         <img src="https://via.placeholder.com/800x400" alt="" />
//         <p class="text-gray-700 leading-relaxed">
//           Wednesday, August 24, 2022 - U.S. President Joe Biden has announced nearly $3 billion in new military aid for Kyiv as Ukraine...
//         </p>
//         <p class="text-gray-700 leading-relaxed mt-4">
//           The aid package includes advanced rocket systems, artillery, and ammunition to help Ukraine fight off the invasion...
//         </p>
//         <p class="text-gray-700 leading-relaxed mt-4">
//           This announcement came during Ukraine's independence day celebrations, marking six months since the conflict began.
//         </p>
//       </section>

//       {/* <!-- Right Sidebar (Scrollable) --> */}
//       <aside class="col-span-3 bg-white p-4 shadow-md overflow-y-auto">
//         <h2 class="text-lg font-bold mb-3">Login With</h2>
//         <button class="w-full border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Login with Google</button>
//         <button class="w-full border py-1 rounded-sm border-gray-500 mb-4">Login with GitHub</button>

//         <h2 class="text-lg font-bold mb-4">Related News</h2>
//         <ul class="space-y-2 ">

//           <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Sports: Forld Cup</li>
//           <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Business: ash</li>
//           <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Culture: Fn India</li>
//           <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Education:cies</li>
//           <li class="w-full px-3 border py-1 rounded-sm mb-2 text-blue-500 border-blue-400">Health: Meeness</li>

//           {/* <!-- Add more items to test scrolling --> */}
//         </ul>
//       </aside>

//       <Link to={"/details"} className="btn border mt-4">
//         See more...
//       </Link>

//     </div>
//   );
// }
























































// <Link to={"/details"} className="btn border mt-4">
//   See more...
// </Link>












// import { Link } from "react-router-dom";

// export default function Orders() {
//   return (
//     <div>
//       <h1>order Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, harum! 1</h1>
//       <h1>order Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, harum! 2</h1>
//       <h1>order Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, harum! 3</h1>
//       <h1>order Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, harum! 4</h1>
//       <div className="w-11/12 mx-auto">
//         <div className="grid grid-cols-3">
//           <div className="border border-green-500 p-8 ">
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
//               ratione eos quasi aliquam quae sit culpa veritatis dicta fuga
//               alias est recusandae pariatur et perferendis, incidunt commodi
//               voluptates voluptas iste?
//             </p>
//             <Link to={"/details"} className="btn border mt-4">
//               See more...
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
