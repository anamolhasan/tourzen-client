import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
        {user ? (
          <ProfileDropdown />
        ) : (
          <>
            {user ? <ProfileDropdown /> : <ProfileDropdown />}

            <Link
              to={"/login"}
              className="self-center px-8 border py-3 rounded "
            >
              Sign in
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default App;
