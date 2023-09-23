import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }
    // submit if valid
    if (valid) {
      try {
        await signUp(email, password);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/bd6666ad-90f8-453d-ac3d-25092f05db36/NG-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] bg-black/75 text-white mx-auto">
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-3 "
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-neutral-700 rounded focus:bg-neutral-600"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-neutral-700 rounded focus:bg-neutral-600"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign up
                </button>
                <div className="flex items-center justify-between text-sm  text-neutral-400">
                  <p className="flex">
                    <input
                      className="mr-2 w-4 h-4 accent-pink-300 "
                      type="checkbox"
                    />
                    Remember me
                  </p>
                  <p className="hover:underline cursor-pointer">Need help?</p>
                </div>
                <div>
                  <span className="text-neutral-500">
                    Already subscribed to FavFlix?{" "}
                  </span>
                  <Link to="/login">
                    <p className="inline-block cursor-pointer hover:underline">
                      Sign In.
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
