import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import { NavLinks } from "./constants";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiBurger } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose, CgCross } from "react-icons/cg";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  return (
    <header
      //   data-aos-delay="600"
      //   data-aos-duration="600"
      //   data-aos="fade-down"
      className="relative z-50 px-3 sm:px-5 lg:px-16 flex items-center justify-between "
    >
      <Image height={80} src={logo} alt="Large Language Model" />
      <div className="hidden md:flex items-center gap-3 font-bold">
        {NavLinks.map(({ link, name }) => {
          return (
            <Link href={link} key={name}>
              {name}
            </Link>
          );
        })}
      </div>
      <div className="block md:hidden">
        <button onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <CgClose /> :<GiHamburgerMenu />}
        </button>
        {navOpen && (
          <div className="fixed h-[100vh] w-[11rem] bg_darkorange left-0 top-0 z-50 shadow-2xl p-5">
            {NavLinks.map(({ link, name }) => {
              return (
                <div key={name}>
                  <Link className="text-lg font-bold" href={link}>
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <button className="button-56">BUY $LLM</button>
      </div>
    </header>
  );
};

export default Header;
