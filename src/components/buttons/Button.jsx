const Button = ({
  className,
  text,
  onClick,
  type,
  size,
}) => {
  const textSize = size ? `text-${size}` : "text-lg"
  return (
    <button
      className={`bg-orange-400 px-2 py-1 rounded ${textSize} ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  )
}

export default Button