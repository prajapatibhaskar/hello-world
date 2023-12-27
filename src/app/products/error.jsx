"use client";

// Automatically wraps around the page.jsx(route segment) file.
// So, the rest of the ui remains unaffected(remains functional)
const ErrorBoundary = ({ error, reset }) => {
  return (
    <>
      <div className="error-box">{error.message}</div>

      <button onClick={reset} class="button-39" role="button">
        Try Again
      </button>
    </>
  );
};

export default ErrorBoundary;
