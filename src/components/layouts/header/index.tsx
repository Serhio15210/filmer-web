import React from "react";
import "@/styles/layout.scss";
import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "#/icons/svg/profileIcon";
import ChatIcon from "#/icons/svg/chatIcon";
import SearchInput from "@/components/search-input";

type MainHeaderProps = {
  openBurger: boolean;
  isMobile: boolean;
  toggleBurger: () => void;
};
const MainHeader = ({
  openBurger,
  toggleBurger,
  isMobile,
}: MainHeaderProps) => {
  return (
    <header>
      <div className="logoRow">
        <div
          className={`burger ${openBurger ? "active" : ""}`}
          onClick={toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link href={"/"}>
          <Image alt={"logo"} src={"/logo.svg"} width={50} height={50} />
        </Link>
      </div>
      {!isMobile && <SearchInput />}
      <div className="rightRow">
        <ChatIcon />
        <Link href={"/"}>
          <ProfileIcon />
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
