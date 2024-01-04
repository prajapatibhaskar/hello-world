import delay from "@/lib/delay";

export const RevenueMetrics = async () => {
  await delay(4000)
  const session = null;

  if (!session) {
    throw new Error("Error Loading Revenue Metrics...");
  }
  return <div>Revenue Metrics</div>;
};

export default RevenueMetrics;
