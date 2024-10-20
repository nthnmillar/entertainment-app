import React from "react";

const Login: React.FC = () => {
  return (
    <main>
      <div className="lg:w-[300px] lg:h-[500px] lg:bg-greyishblue m-auto lg:mt-30px rounded-xl lg:mt-[10vh] p-[30px]">
        <p> Login</p>
        <br />
        <p> Email address</p>
        <p> Password</p>
        <br />
        <p> Login to your account</p>
        <br />
        <p> Don't have an account? Sign Up</p>
      </div>
    </main>
  );
};

export default Login;
