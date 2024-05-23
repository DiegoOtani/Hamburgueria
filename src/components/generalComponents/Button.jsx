
const Button = ({ children, onClick, type, className, style }) => {
  const defaultStyle = { backgroundColor: "#b3b3b3", color: "#000" }

  const combinedStyle = { ...defaultStyle, ...style }

  return <button
      onClick={onClick}
      type={type}
      className={className}
      style={combinedStyle}
    >
    {children}
  </button>
}

export default Button
