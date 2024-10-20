import React from "react";

const Login: React.FC = () => {
  return (
    <main>
      <div className="lg:w-[300px] lg:bg-semidarkblue m-auto rounded-xl lg:mt-[25vh] p-[30px]">
        <h1 className="mb-10 text-white">Login</h1>

        {/* Email Input */}
        <input
          className="text-greyishblue block mb-4 bg-transparent border-none focus:outline-none placeholder-greyishblue text-sm px-2 "
          type="email"
          placeholder="Email address"
        />
        <div className="border-b-2 border-greyishblue w-full mb-4"></div>

        {/* Password Input */}
        <input
          className="text-greyishblue block mb-4 bg-transparent border-none focus:outline-none placeholder-greyishblue text-sm px-2 "
          type="password"
          placeholder="Password"
        />
        <div className="border-b-2 border-greyishblue w-full mb-4"></div>

        {/* Button */}
        <button className="bg-redbtn w-full py-2 mt-5 text-white rounded">
          Login to your account
        </button>

        {/* Sign Up Link */}
        <p className="text-whitebtn text-xs mt-4 text-center">
          Don't have an account?
          <span className="text-redbtn text-white px-2 rounded">Sign Up</span>
        </p>
      </div>
    </main>
  );
};

export default Login;
