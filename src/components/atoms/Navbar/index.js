import React, { useState , useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
// import '../../../containers/pages/App/index.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [name, setName] = useState("")

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    window.scroll(0,0)
    const user = JSON.parse(localStorage.getItem("KHASMA:token"))
    setName(user.fullName)
  }, [])



  return (
    <>
    

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
     
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className='title'>WEB SATGAS COVID-19 SUMEDANG</h1>
        </div>
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
      
            </li>
            
            <li className="ml-3 relative">
          <div className="pb-5 flex justify-center">
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-20 w-20 rounded-full" src="https://covid19.go.id/storage/app/media/logo-satgas.png" alt=""/>
            </button>
          </div>
          </li>
          <li>
            <div className="pt-1 flex justify-center">
            <h1 className="text-white font-sans">{name}</h1>
            </div>
           
            </li>   
            <li>
            <div className="pb-5 pt-1 flex justify-center">
            <h1 className="text-white font-sans">Satgas Covid-19</h1>
            </div>
           
            </li>    
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
