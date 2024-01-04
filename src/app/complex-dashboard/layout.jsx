"use client";

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}) => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="users-box">{users}</div>
      <div className="revenue-box">{revenue}</div>
      <div className="error-box">{notifications}</div>
    </>
  ) : (
    login
  );
};

export default ComplexDashboardLayout;
