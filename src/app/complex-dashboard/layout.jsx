"use client";

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}) => {
  return (
    <>
      <div>{children}</div>
      <div className="users-box">{users}</div>
      <div className="revenue-box">{revenue}</div>
      <div className="error-box">{notifications}</div>
    </>
  );
};

export default ComplexDashboardLayout;
