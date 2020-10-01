import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptonIcon from "@material-ui/icons/SubscriptionsOutlined";
import StoreFrontIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationIcon from "@material-ui/icons/NotificationsActive";
import ExpanMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptonIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StoreFrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Pragya Jaiswal</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <IconButton>
          <ExpanMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
