import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-20 md:w-28 object-cover" alt=''/>
        <div className="hidden md:flex gap-8">
          {menu.map((item,index) => (<HeaderItem key={index} name={item.name} Icon={item.icon} />))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map((item, index) =>index < 3 && (<HeaderItem key={index} name={""} Icon={item.icon} />))}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 mr-3 bg-[#121212] border border-gray-800 p-3 px-5 py-4">
                {menu.map((item, index) =>index >= 3 && (<HeaderItem key={index} name={item.name} Icon={item.icon} />))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png" alt=''
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
