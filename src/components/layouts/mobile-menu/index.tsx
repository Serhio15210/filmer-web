import React from "react";
import styles from "./mobileMenu.module.scss";
import NavItem from "@/components/layouts/menu/nav-item";
import HomeIcon from "#/icons/svg/homeIcon";
import TopMovieIcon from "#/icons/svg/topMovieIcon";
import ProfileIcon from "#/icons/svg/profileIcon";

type MobileMenuProps = {
  openMenu: boolean;
};
const MobileMenu = ({ openMenu }: MobileMenuProps) => {
  return (
    <div className={`${styles.mobileMenu} ${openMenu ? styles.active : ""}`}>
      <NavItem link={"/"} text={"Home"} icon={<HomeIcon />} isMobile />
      <NavItem
        link={"/top"}
        text={"Top films"}
        icon={<TopMovieIcon />}
        isMobile
      />
      <NavItem
        link={"/profile"}
        text={"Profile"}
        icon={<ProfileIcon />}
        isMobile
      />
    </div>
  );
};

export default MobileMenu;
