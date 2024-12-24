import styles from "./navItem.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactElement } from "react";

type NavItemProps = {
  link: string;
  text: string;
  icon: ReactElement;
  isMobile?: boolean;
};
const NavItem = ({ link, text, icon, isMobile }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link href={link}>
      {isMobile ? (
        <div
          className={`${styles.mobileItem} ${pathname === link ? styles.active : ""}`}
        >
          {icon}
          <p>{text}</p>
        </div>
      ) : (
        <div
          className={`${styles.navItem} ${pathname === link ? styles.active : ""}`}
        >
          <div className={styles.activePage} />
          {icon}
          <p>{text}</p>
        </div>
      )}
    </Link>
  );
};

export default NavItem;
