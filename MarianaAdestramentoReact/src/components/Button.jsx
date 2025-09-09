import { Link } from "react-router-dom";

function Button({ to, children, onClick }) {
  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="bg-highlight text-white font-semibold px-4 py-2 rounded-3xl hover:bg-hoverbtn hover:text-primary transition-colors"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-highlight text-white font-semibold px-4 py-2 rounded-3xl hover:bg-hoverbtn hover:text-primary transition-colors"
    >
      {children}
    </button>
  );
}

export default Button;
