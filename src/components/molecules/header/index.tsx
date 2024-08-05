import Image from "next/image";
import MenuIcon from "../../atoms/icon/menu";
import Link from "next/link";
import clsx from "clsx";
import { useScrollDirection } from "app/hooks/useScrollDirection";
import { LayoutContext } from "app/context/layout";
import { useContext, useRef } from "react";
import ScrollInto from "react-scroll-into-view";

export default function Header() {
  const container = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection();
  const { isMenuOpen, setIsMenuOpen } = useContext(LayoutContext);

  return (
    <>
      <header
        ref={container}
        className={clsx(
          `fixed w-full z-50 transition-all ease-in-out duration-500 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
            scrollDirection === "down" ? "-top-28" : "top-0"
          }`
        )}
      >
        <div className="header-wrapper container flex justify-between items-center h-14 2xl:max-w-[90vw]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={30}
              height={30}
              priority
              className="w-[30px] h-[30px]"
            />
          </Link>
          <ul className="hidden gap-6 lg:flex">
            <li className="cursor-pointer transition-colors  text-white/60 hover:text-white/80">
              <ScrollInto selector="#about-section">About</ScrollInto>
            </li>
            <li className="cursor-pointer transition-colors  text-white/60 hover:text-white/80">
              <ScrollInto selector="#skill-section">Skills</ScrollInto>
            </li>
            <li className="cursor-pointer transition-colors  text-white/60 hover:text-white/80">
              <ScrollInto selector="#project-section">Works</ScrollInto>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
