'use client';
import { HEADER_NAVBAR } from "@/dump/routes";
// import { ThemeSwitcher } from "../ThemeSwitcher";
import BurgerIcon from "./hamburger";
import LoginSignup from "./login_signup";
import HeaderLogo from "./logo";
import Navitems from "./navbar/navitems";
import { useEffect, useState } from "react";

const TopBar: React.FC = () => {


  const [scrolltopdata, setscrolltopdata] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 10) {
        setscrolltopdata('');
      } else {
        setscrolltopdata('animationScrollNav');
      }
    });
  }, [])

  return (
    <header className={`bg-primary-100 dark:bg-dark-primary-50 border-b border-primary-50 dark:border-lightGray ${scrolltopdata}`}>
      <nav className={`max-w-[1440px] mx-auto py-6 xl:pl-20 lg:px-10 px-6 xl:pr-[62px]`}>
        <div className="flex gap-5 justify-between items-center">
          <HeaderLogo />
          <ul className="list-none h-6 md:flex hidden lg:gap-10 gap-6 items-center font-semibold ulAnimation">
            {
              HEADER_NAVBAR.map((item, index) => <Navitems key={index} item={item} />)
            }
          </ul>
          <div className="flex w-fit gap-4 items-center">
            <LoginSignup />
            <BurgerIcon />
            {/* <ThemeSwitcher /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
