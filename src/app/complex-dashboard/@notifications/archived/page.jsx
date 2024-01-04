import Link from "next/link";

export const ArchivedNotifications = () => {
  return (
    <div>
      <div>Archived Notifications</div>
      <Link href='/complex-dashboard'>Default</Link>   {/* Soft Navigation*/}
    </div>
  );
};

export default ArchivedNotifications;
