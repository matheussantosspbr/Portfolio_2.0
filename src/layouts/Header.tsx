import Logo from './../../public/logo.png';
import {NavLink} from 'react-router-dom'
export default function Header() {

    return (
      <header className="h-20.5 bg-gray-900 flex items-center justify-between p-4 shadow-lg	shadow-cyan-500/60 mb-8">
        <img src={Logo} alt="Logo" className='h-14'/>
        <ul className='flex mr-4'>
          <NavLink
            to="/"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500'>
            <li>Início</li>
          </NavLink>
          <NavLink
            to="/portfolio"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500'>
            <li>Portfólio</li>
          </NavLink>
          <NavLink
            to="/certificados"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500'>
            <li>Certificados</li>
          </NavLink>
          <NavLink
            to="/sobre"
            className='m-2 text-white border-b border-transparent hover:border-cyan-500'>
            <li>Sobre</li>
          </NavLink>
        </ul>
      </header>
    )
  }