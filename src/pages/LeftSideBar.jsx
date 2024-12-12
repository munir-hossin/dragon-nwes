import { useEffect, useState } from "react";
import { data, Link } from "react-router";

function LeftSideBar({ newsData }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  });


  return (
    <>
      <aside className="col-span-2 bg-white p-4 shadow-md overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">All Categories</h2>

        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.category_id}
              className=" hover:bg-gray-200 py-2 px-2 text-gray-400 hover:text-gray-900 font-semibold cursor-pointer"
            >
              {category.category_name}
            </li>
          ))}
        </ul>

        <div className="col-span-5 space-y-8 overflow-y-auto p-4 bg-white shadow-md">
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
                  {/* <p className="mb-4 text-xs">{newsItem.details}</p> */}
                  <Link
                    to={"/orders"}
                    className="border p-1 mt-3 block hover:bg-gray-200 rounded"
                  >
                    See more...
                  </Link>
                </div>
              ))
            ) : (
              <p>No news available!</p>
            )}
          </div>
        </div>


      </aside>
    </>
  );
}

export default LeftSideBar;
