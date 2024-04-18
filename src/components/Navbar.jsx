//import { useState } from "react";
import { useState } from "react";
import { close, logotipo, menu } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="top-0 fixed w-full h-[80px] z-10 bg-white drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <Link to={`/`}>
            <img src={logotipo} alt="logotipo" className="ml-4 sm:ml-10 ss:ml-10 md:ml-3 w-auto h-[30px]" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex ">
            <li>inicio</li>
            <li>Soluciones</li>
            <li>Programas</li>
            <li>Casos de Uso</li>
          </ul>
        </div>
        <div className="hidden sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4">Login</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10 hover:cursor-pointer"
          />
        </div>
      </div>

      <ul className={!toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"}>
        <li>inicio</li>
        <li>Soluciones</li>
        <li>Programas</li>
        <li>Casos de Uso</li>
      </ul>
    </div>
  );
};

export default Navbar;
