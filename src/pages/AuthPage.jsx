import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DB_URL } from "../utils";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";

const AuthPage = () => {
   const [searchParams] = useSearchParams();
   const [isLogin, setIsLogin] = useState(searchParams.get("new") !== "true");
   const navigate = useNavigate();
   const toggleAuthMode = () => {
      setIsLogin(!isLogin);
   };

   const [open, setOpen] = useState(false);
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);
   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }
      setOpen(false);
   };
   const action = (
      <>
         <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
         >
            <CloseIcon fontSize="small" />
         </IconButton>
      </>
   );

   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      department: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      let response;
      try {
         if (isLogin) {
            response = await axios.post(DB_URL + "login", {
               email: formData.email,
               password: formData.password,
            });
         } else {
            await axios.post(DB_URL + "users/", {
               full_name: formData.fullName,
               email: formData.email,
               password: formData.password,
               role: "user",
               department: formData.department,
            });
            response = await axios.post(DB_URL + "login", {
               email: formData.email,
               password: formData.password,
            });
         }
      } catch {
         setOpen(true);
         setMessage("Login Failed, Try again");
      }
      setLoading(false);
      if (response.data?.detail?.msg) {
         setOpen(true);
         setMessage("Username and password do not match");
      } else if (response.data.access_token) {
         setOpen(true);
         console.log(response.data.access_token);
         setMessage("Login successful");
         localStorage.setItem("jwtToken", response.data.access_token);
         setTimeout(() => navigate("/"), 500);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
         <div>
            <Snackbar
               open={open}
               autoHideDuration={6000}
               onClose={handleClose}
               message={message}
               action={action}
            />
         </div>
         <div className="flex flex-col gap-3 justify-center items-center w-full ">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
               {/* Left section: Form */}
               <div className="w-full md:w-1/2 p-8">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                     {isLogin
                        ? "Login to your account"
                        : "Create a new account"}
                  </h2>
                  <p className="text-gray-600 mb-8">
                     {isLogin
                        ? "Please login using your credentials."
                        : "Sign up with your details."}
                  </p>

                  <form className="space-y-6">
                     {!isLogin && (
                        <div>
                           <label className="block text-gray-700">
                              Full Name
                           </label>
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
                           value={formData.email}
                           onInput={(e) =>
                              setFormData({
                                 ...formData,
                                 email: e.target.value,
                              })
                           }
                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                           placeholder="Enter your email"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                           type="password"
                           value={formData.password}
                           onInput={(e) =>
                              setFormData({
                                 ...formData,
                                 password: e.target.value,
                              })
                           }
                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                           placeholder="Enter your password"
                        />
                     </div>
                     {!isLogin && (
                        <div>
                           <label className="block text-gray-700">
                              Department
                           </label>
                           <select
                              onSelect={(e) =>
                                 setFormData({
                                    ...formData,
                                    department: e.target.value,
                                 })
                              }
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                              placeholder="Enter your full name"
                           >
                              <option>Computer</option>
                              <option>Computer RL</option>
                              <option>Computer AIML</option>
                              <option>Information Technology</option>
                              <option>Electronics & Telecommunication</option>
                              <option>Mechanical</option>
                              <option>Civil</option>
                              <option>Architecture</option>
                              <option>MCA</option>
                           </select>
                        </div>
                     )}
                     <button
                        className="w-full bg-accent1 text-white py-2 rounded-lg hover:bg-accent1 transition duration-300"
                        onClick={handleSubmit}
                     >
                        {loading ? (
                           <CircularProgress />
                        ) : isLogin ? (
                           "Login"
                        ) : (
                           "Sign Up"
                        )}
                     </button>
                  </form>

                  <p className="mt-4 flex gap-2 text-sm text-gray-600">
                     {isLogin ? (
                        <>
                           Don&apos;t have an account?{" "}
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
            </div>
         </div>
      </div>
   );
};

export default AuthPage;
