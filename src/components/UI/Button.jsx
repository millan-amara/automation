// src/components/UI/Button.jsx
const Button = ({ children, variant = "primary", size = "md", fullWidth = false, ...props }) => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center"
  
  const variants = {
    primary: "bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-50 text-[#1e3a8a] border-2 border-[#0d9488]",
    outline: "bg-transparent hover:bg-[#f0fdfa] text-[#0d9488] border-2 border-[#0d9488]",
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }
  
  const widthClass = fullWidth ? "w-full" : ""
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button