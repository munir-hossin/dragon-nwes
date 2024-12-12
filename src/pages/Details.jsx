import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="w-11/12 mx-auto overflow-y-scroll">
      <h1>this details page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe
        accusantium cumque dolor, eos ut itaque, labore omnis autem sequi
        deleniti. Optio fugiat rerum alias illo repudiandae hic suscipit
        obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe
        accusantium cumque dolor, eos ut itaque, labore omnis autem sequi
        deleniti. Optio fugiat rerum alias illo repudiandae hic suscipit
        obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe
        accusantium cumque dolor, eos ut itaque, labore omnis autem sequi
        deleniti. Optio fugiat rerum alias illo repudiandae hic suscipit
        obcaecati.
      </p>
        <div className="mt-10 bg-black">
        <Link to={-1} className="btn mt-4">
        Go back 
      </Link>
        </div>
    </div>
  );
}
