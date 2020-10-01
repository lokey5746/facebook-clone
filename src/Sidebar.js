import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpanMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://m.media-amazon.com/images/M/MV5BNmVkODYwNDgtY2I2MC00Mjg4LWI4OTUtNzFhYTA3ODJhOTA2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SY1000_CR0,0,743,1000_AL_.jpg"
        title="Pragya Jaiswal"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID 19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpanMoreIcon} title="More" />
    </div>
  );
}

export default Sidebar;
