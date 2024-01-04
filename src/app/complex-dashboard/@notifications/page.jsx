import Link from "next/link";

export const Notifications = () => {
  return (
    <div>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>    {/* Soft Navigation*/}
    </div>
  );
};

export default Notifications;
