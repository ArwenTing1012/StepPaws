import * as React from "react"

const Alert = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className="relative w-full rounded-lg border p-4"
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className="text-sm [&_p]:leading-relaxed"
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription }