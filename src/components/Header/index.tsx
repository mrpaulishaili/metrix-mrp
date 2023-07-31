import { FC } from 'react';

import { FaHome, FaBell, FaChevronDown } from 'react-icons/fa';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-white w-full flex flex-col divide-y">
      <div className=" p-2 flex justify-between items-center">
        <h2 className="page-title text-lg font-Poppins">Dashboard</h2>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 bg-red-trans px-3 py-2 rounded-md text-xs items-center">
            Nanny shop <FaChevronDown />
          </div>

          <div className="text-primary-blue">
            <FaBell color="" size={16} />
          </div>

          <div className="user-avatar rounded-md h-max w-max overflow-hidden">
            <img
              src="/images/profile-img.png"
              alt="User profile image"
              loading="eager"
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>
      <div className="navigation-pane  p-2">
        <div className="text-primary-blue">
          <FaHome size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
