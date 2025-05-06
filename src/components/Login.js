import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute w-3/12 my-36 left-0 right-0 mx-auto p-12 rounded-sm bg-black bg-opacity-80">
        <h1 className="text-white font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 m-2 rounded-md bg-gray-800 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full  p-4 rounded-md m-2 bg-gray-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className=" w-full p-4 m-2 rounded-md bg-gray-800 text-white"
        />
        <button className="w-full p-3 m-2 rounded-mg bg-red-600 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-2 text-white">
          {isSignInForm ? "New to Netflix?" : "Already User!"}

          <span
            className="cursor-pointer font-bold text-1xl"
            onClick={handleSignInForm}
          >
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
