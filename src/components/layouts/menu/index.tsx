import React from "react";
import styles from "./menu.module.scss";
import NavItem from "@/components/layouts/menu/nav-item";
import HomeIcon from "#/icons/svg/homeIcon";
import TopMovieIcon from "#/icons/svg/topMovieIcon";
import ProfileIcon from "#/icons/svg/profileIcon";

type MenuProps = {
  openMenu: boolean;
};
const Menu = ({ openMenu }: MenuProps) => {
  return (
    <div className={`${styles.menuContainer} ${openMenu ? styles.active : ""}`}>
      <NavItem link={"/"} text={"Home"} icon={<HomeIcon />} />
      <NavItem link={"/top"} text={"Top films"} icon={<TopMovieIcon />} />
      <NavItem link={"/lists"} text={"Lists"} icon={<ProfileIcon />} />
    </div>
  );
};

export default Menu;
