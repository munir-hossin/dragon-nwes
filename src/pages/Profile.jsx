import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

export default function Profile() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="text-center">
     

      <div className=" flex justify-center">
        <div className="card bg-base-100 w-96 rounded-full shadow-xl">
          <figure className="px-10 pt-10">
            <img
            src="https://cdn.vectorstock.com/i/1000v/44/03/financial-success-concept-vector-904403.avif"
              // src="https://cdn.vectorstock.com/i/1000x1000/32/56/super-success-message-with-green-check-sign-vector-28583256.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Welcome</h2>
            <p className="text-2xl text-green-600">{user?.email}</p>
            <div className="card-actions">
              <Link to={"/details"}>
              <button className="btn bg-lime-500">See more...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<Link to={"/details"} className="btn border mt-4">
  See more...
</Link>;
