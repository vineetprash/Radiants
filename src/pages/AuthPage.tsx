import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DB_URL } from "../utils";
import axios from "axios";
const AuthPage = () => {
   const [searchParams] = useSearchParams();
   const [isLogin, setIsLogin] = useState(searchParams.get("new") !== "true");
   const navigate = useNavigate();
   const toggleAuthMode = () => {
      setIsLogin(!isLogin);
   };

   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      // send login post with form data in the body using axios
      let token;
      alert("BYEE2");
      try {
         if (isLogin) {
            token = await axios.post(DB_URL + "login", {
               email: formData.email,
               password: formData.password,
            });
         } else {
            token = await axios.post(DB_URL + "signup", {
               fullName: formData.fullName,
               email: formData.email,
               password: formData.password,
            });
         }
      } catch {}
      token = "jwtToken";
      alert("BYEE1");
      localStorage.setItem("jwtToken", token);
      alert("BYEE");
      navigate("/");
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
            {/* Left section: Form */}
            <div className="w-full md:w-1/2 p-8">
               <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {isLogin ? "Login to your account" : "Create a new account"}
               </h2>
               <p className="text-gray-600 mb-8">
                  {isLogin
                     ? "Please login using your credentials."
                     : "Sign up with your details."}
               </p>

               <form className="space-y-6">
                  {!isLogin && (
                     <div>
                        <label className="block text-gray-700">Full Name</label>
                        <input
                           type="text"
                           value={formData.fullName}
                           onInput={(e) =>
                              setFormData({
                                 ...formData,
                                 fullName: e.target.value,
                              })
                           }
                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                           placeholder="Enter your full name"
                        />
                     </div>
                  )}
                  <div>
                     <label className="block text-gray-700">
                        Email Address
                     </label>
                     <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                     />
                  </div>
                  <div>
                     <label className="block text-gray-700">Password</label>
                     <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                     />
                  </div>

                  <button
                     className="w-full bg-accent1 text-white py-2 rounded-lg hover:bg-accent1 transition duration-300"
                     onClick={handleSubmit}
                  >
                     {isLogin ? "Login" : "Sign Up"}
                  </button>
               </form>

               <p className="mt-4 text-sm text-gray-600">
                  {isLogin ? (
                     <>
                        Don't have an account?{" "}
                        <button
                           onClick={toggleAuthMode}
                           className="text-accent1 hover:underline focus:outline-none"
                        >
                           Sign up
                        </button>
                     </>
                  ) : (
                     <>
                        Already have an account?{" "}
                        <button
                           onClick={toggleAuthMode}
                           className="text-accent1 hover:underline focus:outline-none"
                        >
                           Login
                        </button>
                     </>
                  )}
               </p>
            </div>

            {/* Right section: Image */}
            <div className="w-1/2 hidden md:block rounded bg-accent1">
               <img
                  src="https://source.unsplash.com/random"
                  className="object-cover h-full w-full"
               />
            </div>
            <div className="m-3 rounded border-blue-300 border bg-blue-200 p-4">
               Contact the admin to receive access <br /> admin@pccoepune.org
            </div>
         </div>
      </div>
   );
};

export default AuthPage;
