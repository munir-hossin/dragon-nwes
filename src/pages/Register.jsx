import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
        console.log(result);
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100  max-w-xl shrink-0 shadow-2xl mx-auto">
      <h1 className="text-2xl text-center mt-3 mb-3">Register Now</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo URL"
            className="input input-bordered"
            name="photo"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <span className="label-text-alt link link-hover">
              if you have an account? please <Link to={"/login"}>LogIn</Link>
            </span>
          </label>
        </div>

        <div className="form-control mt-2">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}
