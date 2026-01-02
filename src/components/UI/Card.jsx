const Card = ({ children, className = "", hover = false }) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg p-6 border border-gray-100
      ${hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : ""}
      ${className}
    `}>
      {children}
    </div>
  )
}

export default Card