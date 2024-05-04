import React, { useState } from "react";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import Login from "./Login";
import SignUp from "./SignUp";
function Main() {
  const [login, setLogin] = useState(true);
  return (
    <div className="flex justify-center items-center bg-display dark:bg-background">
      <ThemeToggleButton />
      {login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />}
    </div>
  );
}

export default Main;
