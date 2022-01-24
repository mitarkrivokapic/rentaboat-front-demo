import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiMail, FiPhone } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

import Logo from "./Logo";

function Header({ data }) {
  const [showMenu, setShowMenu] = useState(false);

  function onClickMenuButton() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* fixed w-screen */}
      <header className="z-30 relative">
        <div className="bg-gray-900 text-white min-h-[2.5rem]">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between">
            <div className="min-h-[2.5rem] flex flex-col sm:flex-row items-center">
              <Link href="mailto:belgraderentaboat@gmail.com">
                <a className="flex items-center">
                  <FiMail />
                  <span className="ml-1 sm:mr-3 py-1">
                    belgraderentaboat@gmail.com
                  </span>
                </a>
              </Link>
              <Link href="tel:+38163252550">
                <a className="flex items-center">
                  <FiPhone />
                  <span className="ml-1 sm:mr-3">+38163252550</span>
                </a>
              </Link>
            </div>
            <div className="min-h-[2.5rem] flex justify-center items-center">
              <Link href="https://www.instagram.com/rent.a.boat.belgrade">
                <a className="mr-5 text-xl" target="_blank">
                  <SiInstagram />
                </a>
              </Link>
              <Link href="https://www.facebook.com/belgraderentaboat">
                <a className="mr-5 text-xl" target="_blank">
                  <FaFacebookSquare />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <nav className="py-2 bg-white">
          <div className="container mx-auto flex justify-between items-center">
            <Logo href="/" />

            {!showMenu ? (
              <FiMenu
                onClick={onClickMenuButton}
                className="w-8 h-8 text-blue-500 cursor-pointer mr-6 sm:hidden"
              />
            ) : (
              <CgClose
                onClick={onClickMenuButton}
                className="w-8 h-8 text-blue-500 cursor-pointer mr-6 sm:hidden"
              />
            )}

            <ul className="hidden sm:flex sm:items-center">
              {data.map((item) =>
                item.links.length === 0 ? (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <a className="py-2 px-5 border-b-2 border-transparent hover:border-blue-500 text-blue-500 font-bold">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li
                    data-id={item.id}
                    key={item.id}
                    className="group relative"
                  >
                    <a
                      href="#"
                      className="py-2 px-5 border-b-2 border-transparent hover:border-blue-500 text-blue-500 font-bold"
                    >
                      {item.label}
                    </a>
                    <ul className="hidden group-hover:flex  flex-col absolute bg-white  pt-4 top-7 -left-12 -right-12 items-center justify-center">
                      {item.links.map((link) => {
                        return (
                          <li
                            key={link.id}
                            className="py-3 w-full border-y-2 border-transparent text-center hover:border-blue-500"
                          >
                            <Link href={link.href}>
                              <a className="py-2 px-5 text-blue-500 font-bold">
                                {link.label}
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {showMenu && (
          <ul className="absolute z-50 top-40 min-h-[20rem] w-screen bg-white flex flex-col items-center sm:hidden">
            {data.map((item) => (
              <li
                key={item.id}
                className="py-3 w-full border-b-2 border-transparent text-center hover:border-blue-500"
              >
                <Link href={item.link}>
                  <a className="py-2 px-5 text-blue-500 font-bold">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
