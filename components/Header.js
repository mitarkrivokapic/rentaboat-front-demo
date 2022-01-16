import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import Logo from "./Logo";

function Header({ data }) {
  const [showMenu, setShowMenu] = useState(false);

  function onClickMenuButton() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* fixed w-screen */}
      <header className="py-2 fixed w-screen z-30 bg-white">
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
                <li data-id={item.id} key={item.id} className="group relative">
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

        {showMenu && (
          <ul className="fixed w-screen bg-white flex flex-col items-center sm:hidden">
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
