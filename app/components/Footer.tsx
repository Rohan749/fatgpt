import React from "react";
import { footerDescription } from "./constants";
import Image from "next/image";

import dexscreener from "../../public/images/dexlogo.png";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#dc7f6a] p-3 sm:p-5 lg:p-16 grid lg:grid-cols-2 gap-10">
      <div className="text-sm">{footerDescription}</div>
      <div className="flex items-end gap-10">
        <Link href={""} className="flex items-center justify-end w-full font-bold gap-2">
          <Image
            height={30}
            className="rounded-full"
            src={dexscreener}
            alt=""
          />
          <div className="text-xs lg:text-sm">Dexscreener</div>
        </Link>
        <Link href={""} className="flex items-center font-bold gap-2">
          <FaXTwitter className="text-black"  size={30} />
          <div className="text-xs lg:text-sm">Dexscreener</div>
        </Link>
        <Link href={""} className="flex items-center font-bold gap-2">
        <FaTelegram className="text-black"  size={30} />
          <div className="text-xs lg:text-sm">Dexscreener</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
