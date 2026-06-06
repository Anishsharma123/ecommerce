import "../../styles/components/button.css";

function Button({
  children,  //Display whatever is written between opening and closing Button tags
  onClick,
  type = "button",
  variant = "primary",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;