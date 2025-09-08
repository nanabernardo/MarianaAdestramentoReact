function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-white font-semibold px-4 py-2 rounded hover:bg-hoverBtn transition-colors"
    >
      {children}
    </button>
  );
}

export default Button;
