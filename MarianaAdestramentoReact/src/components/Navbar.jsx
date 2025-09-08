import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary flex justify-between items-center p-4">
      <h1 className="text-highlight text-2xl font-bold text-white">
        Mariana Adestramento
      </h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-highlight font-semibold text-white">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
