import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FaChevronRight } from 'react-icons/fa';
import { FiGift } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoSettingsOutline, IoPeopleOutline } from 'react-icons/io5';
import {
  PiFolderSimpleMinusThin,
  PiHandbagLight,
  PiHeadphones,
} from 'react-icons/pi';

import { RxDashboard } from 'react-icons/rx';

import { AiOutlineMessage } from 'react-icons/ai';
import Badge from '../commons/Badge';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <aside className="w-full max-w-xs py-2 h-screen bg-white flex flex-col justify-between">
      <div className="">
        {/* Sidebar Logo */}
        <div className="logo h-8 px-6">
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
              <RxDashboard size={18} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to={'/orders'}>
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
          <Link to={'/'} className="bg-primary-blue-trans">
            <PiHeadphones size={18} /> Contact Support
          </Link>
        </li>
        <li>
          <Link
            to={'/'}
            className="bg-secondary-gold-20 flex-col gap-3 py-3 items-start"
          >
            <div className="flex justify-start text-sm items-center">
              <FiGift size={18} /> Free Gift Awaits You!
            </div>
            <span className="text-xs flex items-center justify-between w-full">
              Upgrade your account <FaChevronRight />
            </span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="text-action-red">
            <HiOutlineLogout size={18} /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
