"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(`/login/${page}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Login Page</h1>
        <br />
        <button onClick={() => navigate("stafflogin")}>Staff Login</button>
        <br /> <br />
        <button onClick={() => navigate("studentlogin")}>Student Login</button>
      </div>
    </main>
  );
};

export default Login;
