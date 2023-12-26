'use client'

import './styles.css'

// Automatically wraps around the page.jsx(route segment) file.
// So, the rest of the ui remains unaffected(remains functional)
const ErrorBoundary = ({error}) => {
  return (
    <div className="error-box">
        {error.message}
    </div>
  )
}

export default ErrorBoundary