import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdHome,
} from "react-icons/md";

function Sidebar({ sidebar, handleToggleSidebar }) {
  return (
    <nav
      className={`sidebar ${sidebar && "open"}`}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <hr />

      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </nav>
  );
}

export default Sidebar;
