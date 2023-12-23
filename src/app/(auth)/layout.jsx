"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css';

// export const metadata = {
//   title: "Authorization",
// };

const AuthLayout = ({ children }) => {


  // react hook usePathname for accessing the current path
  const currentPath = usePathname();

  // an array of objects {name, href}
  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Signin", href: "/signin" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];

  return (
    <>
      <div>
        {navLinks.map((link) => {
          const isActive = currentPath.startsWith(link.href);
          return (
            <Link
              className={isActive ? 'activeNavLinkStyle' : 'inactiveNavLinkStyle'}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
};

export default AuthLayout;
