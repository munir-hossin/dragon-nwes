import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center">
      <h1>this profile page</h1>
      <span>{user?.email}</span>

      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-3">
          <div className="border border-green-500 p-8 ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              ratione eos quasi aliquam quae sit culpa veritatis dicta fuga
              alias est recusandae pariatur et perferendis, incidunt commodi
              voluptates voluptas iste?
            </p>
            <Link to={"/details"} className="btn border mt-4">
              See more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
