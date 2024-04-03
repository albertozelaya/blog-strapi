import { useState } from "react";
import { menu, close, logotipo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  //usestate es el primer valor, setToggle es para establecer valor de toggle()
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img src={logotipo} alt="logotipo" className="ml-4 sm:ml-10 ss:ml-10 md:ml-3 w-full h-[30px]" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex ">
            <li>Inicio</li>
            <li>Soluciones</li>
            <li>Programas</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="hidden sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4">Login</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
        </div>
      </div>
      <ul className={!toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"}>
        <li>Inicio</li>
        <li>Soluciones</li>
        <li>Programas</li>
        <li>Blog</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-black mb-4 py-3 px-8">Login</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
