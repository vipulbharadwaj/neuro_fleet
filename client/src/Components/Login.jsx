import { ChevronDown, Key, KeyRound, Mail, User } from "lucide-react";
import React from "react";
import { useState } from "react";
import { mockLogin } from "./useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [loginState, setLoginState] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const roles = ["Admin", "Manager", "Driver", "Customer"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = mockLogin(formData.email, formData.password);

    if (result.success) {
      navigate(`/${result.role}/dashboard`);
    } else {
      alert(result.message);
    }
    
  };



  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-screen h-screen px-6 flex items-center justify-center">
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-92 text-center bg-black/10 border border-white/10 rounded-2xl px-8"
      >
        <h2 className="text-2xl font-medium mt-10">
          {loginState === "login" ? "Login" : "Sign Up"}
        </h2>
        <p className="text-grey-400 text-sm mt-2">
          Please Sign {loginState === "login" ? "in" : "up"} to continue
        </p>

        {loginState !== "login" && (
          <div className=" w-full  flex items-center mt-6 gap-2 bg-black/5 ring-2 ring-black/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 transition-all">
            <User className="text-black-60 dark:text-gray-50" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              className="w-full border-none text-black dark:text-gray-50 placeholder:black/60 outline-none bg-transparent"
              required
            />
          </div>
        )}

        <div className="w-full h-12 flex items-center mt-4 gap-2 bg-black/5 ring-2 ring-black/10 focus-within:ring-indigo-500/60 rounded-full overflow-hidden pl-6 transtiton-all">
          <Mail className="text-black/60 dark:text-gray-50" />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full border-none outline-none text-black dark:text-gray-50 placeholder:black/60 bg-transparent"
          />
        </div>

        <div className="w-full h-12 flex items-center mt-4 gap-2 bg-black/5 ring-2 ring-black/10 focus-within:ring-indigo-500/60 rounded-full overflow-hidden pl-6 transition-all">
          <KeyRound className="text-black/60 dark:text-gray-50" />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="w-full border-none outline-none text-black dark:text-gray-50 placeholder:black/60 bg-transparent"
          />
        </div>

        <div className="relative w-full mt-4">
          <div className="w-full h-12 flex-items-center bg-black/5 dark:text-gray-50 rounded-full transition-all ring-2 ring-black/10 dark:ring-white/10 focus-within:ring-indigo-500/60">
            <select
              name="role"
              onChange={handleChange}
              value={formData.role}
              className="w-full h-full px-6 pr-12 bg-transparent outline-none appearance-none cursor-pointer text-black dark:text-rose-500"
            >
              <option value=""> Select Role</option>
              {roles.map((role) => {
                return (
                  <option value={role.toLowerCase()} key={role}>
                    {role}
                  </option>
                );
              })}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black/60 dark:text-gray-50 pointer-events-none" />
          </div>
        </div>

        <div className="mt-4 text-left">
          <button className="text-sm text-indigo-400 hover:underline">
            Forgot password?
          </button>

          <button
            type="submit"
            className="mt-2 w-full h-11 font-medium rounded-full text-white cursor-pointer bg-indigo-600 hover:bg-indigo-500 transition"
          >
            {loginState === "signin" ? "Login" : "Sign up"}
          </button>
        </div>

        <p
          onClick={() =>
            setLoginState((prev) => (prev === "login" ? "signup" : "login"))
          }
          className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer"
        >
          {loginState === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-indigo-400 hover:underline pl-1">
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
