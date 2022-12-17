import Logo from '/logo.png';
import {NavLink} from 'react-router-dom'
import { useState } from "react"


export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

    return (
      <header className="h-20.5 bg-gray-900 flex items-center justify-between p-4 shadow-lg	shadow-cyan-500/60 mb-8">
        <img src={Logo} alt="Logo" className='h-14'/>
        <ul className={`flex mr-4 md:z-40 md:fixed md:w-[70vw] md:bg-cyan-500 md:left-[30vw] md:top-0 md:h-full md:flex-col md:items-center md:justify-center md:shadow-left md:shadow-gray-900 ${openMenu ? "md:visible" : "md:hidden"}`}>
          <NavLink
            to="/"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500 md:text-xl md:text-gray-900 md:m-4 md:hover:border-gray-900'>
            <li onClick={handleOpenMenu}>Início</li>
          </NavLink>
          
          <NavLink
            to="/portfolio"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500 md:text-xl md:text-gray-900 md:m-4 md:hover:border-gray-900'>
            <li onClick={handleOpenMenu}>Portfólio</li>
          </NavLink>
          <NavLink
            to="/certificados"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500 md:text-xl md:text-gray-900 md:m-4 md:hover:border-gray-900'>
            <li onClick={handleOpenMenu}>Certificados</li>
          </NavLink>
          <NavLink
            to="/sobre"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500 md:text-xl md:text-gray-900 md:m-4 md:hover:border-gray-900'>
            <li onClick={handleOpenMenu}>Sobre</li>
          </NavLink>
        </ul>
        <button className={` absolute right-[1000rem] h-auto z-50 ${openMenu ? 'md:fixed md:visible md:right-8' : "md:static md:mr-4"}`} onClick={handleOpenMenu}>
          <div className={`w-8 h-[3px]  mb-1 rounded-md transition-all duration-500 ease-in-out ${openMenu ? 'md:rotate-45 md:translate-y-2 md:bg-gray-900' : "md:bg-white"}`}></div>
          <div className={`w-8 h-[3px]  mb-1 rounded-md ${openMenu ? 'md:hidden md:bg-gray-900' : "md:bg-white "}`}></div>
          <div className={`w-8 h-[3px]  mb-1 rounded-md transition-all duration-500 ease-in-out ${openMenu ? 'md:-rotate-45 md:bg-gray-900' : "md:bg-white"}`}></div>
        </button>
        
      </header>
    )
  }