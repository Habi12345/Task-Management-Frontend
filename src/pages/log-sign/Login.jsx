import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import SignError from "../../components/ui/SignError";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  // a basic function to check id there an empty input field
  async function auth() {
    if (email === "" || pass === "") {
      setShowPopover(true); // Show popover if fields are not filled
    } else {
      try {
        const response = await fetch(`http://localhost:3000/auth/loginUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: pass,
          }),
        });

        const res = await response.json();
        if (!response.ok) {
          throw new Error(res.message);
        }

        // If sign up is successful, you can navigate to another page
        // navigate("/Home");
        // Replace "/home" with your target route

        //set the inout field to empty values
        setPass("");
        setEmail("");

        console.log(res);
        alert("User Login");
      } catch (error) {
        console.error("Error logining:", error);
        // Handle error, e.g., show an error message
        // Check if the error object has a message property
        // if (error.message) {
        //   console.log("Error message:", error.message);
        // } else {
        //   console.log("Error object:", error);
        // }
      }
    }
  }

  const closePopover = () => {
    setShowPopover(false);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-blue-300 dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-sm w-full">
        <h2 className="text-2xl mb-4 font-semibold text-center">Login</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full rounded-md px-4 py-2 mb-4 dark:bg-gray-200 dark:text-gray-800 focus:outline-none focus:ring focus:border-purple-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md px-4 py-2 mb-4 dark:bg-gray-200 dark:text-gray-800 focus:outline-none focus:ring focus:border-purple-600"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Button
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          onClick={auth}
        >
          Login
        </Button>
        <SignError isOpen={showPopover} onClose={closePopover} />
        <div className="flex justify-center mt-2">
          <p className="text-sm">
            Don't have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer"
              onClick={() => props.setLogin((prevLogin) => !prevLogin)}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
