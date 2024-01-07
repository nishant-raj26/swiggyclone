"use client";
import React, { useState } from "react";
import Links from "./links/links";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");
  // let btnName = "Login";
  return (
    <div className="mx-auto py-10 border flex justify-between mt-1 ">
      <h1 className="text-3xl ml-10">Logo</h1>
      <div className=" flex mx-5">
        <Links />
        <button
          className="border p-2"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
