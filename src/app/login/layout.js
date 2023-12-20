"use client";

import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const currentPath = usePathname();

  // List of path-names on which common-layout should hide
  const hideOnListedPaths = [
    "/login/stafflogin",
    "/login/hodlogin",
    "/login/principallogin",
  ];

  return (
    <div>
      {!hideOnListedPaths.includes(currentPath) ? (
        <ul className="login-menu">
          <li>
            <h4>Login Navigation</h4>
          </li>
          <li>
            <Link href={"/login"}>Login Main</Link>
          </li>
          <li>
            <Link href={"/login/studentlogin"}>Student Login</Link>
          </li>
          <li>
            <Link href={"/login/stafflogin"}>Staff Login</Link>
          </li>
          <li>
            <Link href={"/login/hodlogin"}>Hod Login</Link>
          </li>
        </ul>
      ) : (
        <Link href={"/login"}>Main Login</Link>
      )}
      {children}
    </div>
  );
}
