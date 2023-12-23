"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(`/login/${page}`);
  };

  return (
      <div  style={{padding: '20px'}}>
        <h1 className="heading">Login Page</h1>
        <br />
        <button onClick={() => navigate("stafflogin")} class="button-39" role="button">Staff Login</button>
        <br /> <br />
        <button onClick={() => navigate("studentlogin")} class="button-39" role="button">Student Login</button>
      </div>
  );
};

export default Login;