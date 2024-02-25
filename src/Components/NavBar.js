import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="font-bold p-2 bg-teal-600 flex flex-row font-serif justify-around text-black-500">
        <p>logo</p>
        <p className="mr-3 cursor-pointer">
          <Link to="/">Home</Link>
        </p>
        <p className="mr-3 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </p>
        <p className="mr-3 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </p>
      </nav>
    </div>
  );
};

export default NavBar;
