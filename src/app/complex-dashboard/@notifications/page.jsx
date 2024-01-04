import delay from "@/lib/delay";
import Link from "next/link";

export const Notifications = async () => {
  await delay(4000)
  return (
    <div>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>    {/* Soft Navigation*/}
    </div>
  );
};

export default Notifications;
