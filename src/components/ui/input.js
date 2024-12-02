import * as React from "react"

const Input = React.forwardRef(({ error, className, ...props }, ref) => (
  <div className="space-y-1">
    <input
      ref={ref}
      className={`
        w-full px-4 py-2 rounded-md
        border transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-100
        ${error 
          ? 'border-error focus:border-error focus:ring-error-100' 
          : 'border-gray-light hover:border-primary-300 focus:border-primary'
        }
        ${className}
      `}
      {...props}
    />
    {error && (
      <p className="text-tag text-error">{error}</p>
    )}
  </div>
));

Input.displayName = "Input"

export { Input }