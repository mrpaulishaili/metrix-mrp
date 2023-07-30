import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FaBeer } from 'react-icons/fa';
import { FiGift } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoSettingsOutline, IoPeopleOutline } from 'react-icons/io5';
import {
  PiFolderSimpleMinusThin,
  PiHandbagLight,
  PiHeadphones,
} from 'react-icons/pi';

import { AiOutlineMessage } from 'react-icons/ai';
import Badge from '../commons/Badge';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <aside className="w-full max-w-xs p-4 h-screen bg-white flex flex-col justify-between">
      <div className="">
        {/* Sidebar Logo */}
        <div className="logo">
          <img
            src="images/logo.png"
            height={30}
            width={100}
            alt="Metrix Logo"
          />
        </div>

        {/* Top menu  */}

        <ul>
          <li>
            <Link to={'/'}>
              <FaBeer size={20} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <PiHandbagLight size={18} /> Orders
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <IoPeopleOutline size={18} />
              Customers
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <PiFolderSimpleMinusThin size={18} /> Inventory
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <AiOutlineMessage size={18} />
              Conversations <Badge text="16" color="#333" bg="#ccc" rounded />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <IoSettingsOutline size={18} /> Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Down Menu  */}

      <ul className="">
        <li>
          <Link to={'/'}>
            <PiHeadphones /> Contact Support
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <FiGift /> Upgrade your account
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <HiOutlineLogout size={18} /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
