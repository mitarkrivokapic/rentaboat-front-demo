import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer({ data }) {
  return (
    <footer className="bg-gray-900 pt-6 pb-3 px-2 sm:px-12 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col py-2">
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
            <div className="min-h-[2.5rem] flex items-center">
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

          <ul className="pr-2 sm:pr-0">
            {data.footer.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>
                  <a className="inline-block py-1">{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">{data.footerText} &copy; </div>
      </div>
    </footer>
  );
}
