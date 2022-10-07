import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="border-b border-gray-200 py-3">
      <nav className="flex items-center justify-between lg:justify-center px-4">
        <div className="w-12 h-12 mr-12 z-0">
          <Image
            priority
            layout="responsive"
            width={144}
            height={144}
            src="https://caiomartins1.github.io/caio.io/images/icon.png"
            className="rounded-full"
            alt="Profile Picture"
          />
        </div>
        <FiMenu className="lg:hidden w-8 h-8" onClick={toggleMenu} />
        {isOpen && (
          <div className="absolute bg-white h-screen top-0 right-0 w-[90%] z-10 shadow-lg shadow-black p-4 animate-fadeInToBottom lg:hidden">
            <div className="flex justify-end">
              <IoClose className="w-10 h-10 block" onClick={toggleMenu} />
            </div>
            <ul className="flex flex-col gap-3 text-gray-500 mt-10">
              <li className="hover:text-gray-700 transition-color flex items-center sm:justify-center">
                <Link href={'#'}>
                  <a>About me</a>
                </Link>
              </li>
              <li className="hover:text-gray-700 transition-colors flex items-center sm:justify-center">
                <Link href={'#'}>
                  <a>My Projects</a>
                </Link>
              </li>
              <li className="hover:text-gray-700 transition-colors flex items-center sm:justify-center">
                <Link href={'#'}>
                  <a>Curriculum Vitae</a>
                </Link>
              </li>
              <li className="hover:text-gray-700 transition-colors flex items-center sm:justify-center">
                <Link href={'#'}>
                  <a>Contact</a>
                </Link>
              </li>
              <li className="hover:text-gray-700 transition-colors flex items-center sm:justify-center">
                <Link href={'#'}>
                  <a>Github</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <ul className="hidden lg:flex gap-12 text-gray-500 ">
          <li className="hover:text-gray-700 transition-color flex items-center">
            <Link href={'#'}>
              <a>About me</a>
            </Link>
          </li>
          <li className="hover:text-gray-700 transition-colors flex items-center">
            <Link href={'#'}>
              <a>My Projects</a>
            </Link>
          </li>
          <li className="hover:text-gray-700 transition-colors flex items-center">
            <Link href={'#'}>
              <a>Curriculum Vitae</a>
            </Link>
          </li>
          <li className="hover:text-gray-700 transition-colors flex items-center gap-8">
            <Button text="Contact" to="#" type="contact" />
            <Button text="Github" to="#" type="github" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
