import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

function Header() {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} />

      <img src="/blue-logo.jpeg" alt="" className="header__logo" />

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />;
        <MdApps size={28} />;
        <img src="/pp.jpeg" alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
