export const RevenueMetrics = () => {
  const session = null;

  if (!session) {
    throw new Error("Error Loading Revenue Metrics...");
  }

  return <div className="revenue-box">Revenue Metrics</div>;
};

export default RevenueMetrics;
