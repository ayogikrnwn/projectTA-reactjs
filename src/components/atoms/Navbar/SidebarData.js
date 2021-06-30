import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as SiIcons from 'react-icons/si';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillAppstore />,
    cName: 'nav-text'
  },
  {
    title: 'Live Chat',
    path: '/live-chat',
    icon: <BsIcons.BsChatSquareDots />,
    cName: 'nav-text'
  },
  {
    title: 'Data Pasien',
    path: '/data-pasien',
    icon: <BiIcons.BiUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Peta Isolasi',
    path: '/peta-isolasi',
    icon: <SiIcons.SiGooglemaps />,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <FiIcons.FiLogOut />,
    cName: 'nav-text'
  }
 
];
