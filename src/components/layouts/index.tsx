"use client";
import React, { useEffect, useState } from "react";
import MainHeader from "@/components/layouts/header";
import "@/styles/layout.scss";
import Menu from "@/components/layouts/menu";
import MobileMenu from "@/components/layouts/mobile-menu";
import { useRouter } from "next/navigation";
import { queryClient } from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const MainLayout = ({ children }: React.ReactNode) => {
  const [openBurger, setOpenBurger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const [isMobileLoading, setIsMobileLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      setIsMobileLoading(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleBurger = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MainHeader
        toggleBurger={toggleBurger}
        openBurger={openBurger}
        isMobile={isMobile}
      />
      {isMobile && (
        <MobileMenu openMenu={openBurger} toggleMenu={toggleBurger} />
      )}

      <div className="layout">
        <Menu openMenu={openBurger} />
        <div className="container">{children}</div>
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
