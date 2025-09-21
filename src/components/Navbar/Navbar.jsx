import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar1.png";
const Navbar = () => {
  return (
    <div class="navbar w-[85%] mx-auto">
      <div class="flex-1">
        <img className="w-[60px] h-[60px]" src={navImg} alt="" />
      </div>
      <div class="flex">
        <span>6000000000</span>
        <span className="mx-2">Coin</span>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
