"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";

type NavigationItem = {
  name: string;
  url: string;
  items?: { name: string; url: string; }[];
};

const navigation: NavigationItem[] = [
  {
    name: "About",
    url: "/about",
    items: [
      { name: "Our Approach", url: "/about/approach" },
      { name: "Our Team", url: "/about/team" },
    ]
  },
  { name: "Programs", url: "/programs" },
  { name: "Contact Us", url: "/contact" },
  { name: "Our Community", url: "/blog" }
];
export const Navbar = () => {


  return (
    <div className="w-full sticky top-0" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.205)' }}>
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0" >
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.png"
                        alt="N"
                        width="32"
                        height="64"
                        className="w-24 h-18"
                        unoptimized={true}
                      />
                    </span>
                    <span className="hidden text-xl font-bold lg:block">Torch Initiatives</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex list-none flex-col flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      item.items ? (
                        <Disclosure as="div" className="relative" key={index}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex items-center inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                {item.name}
                                <ChevronDownIcon
                                  className={`${open ? "transform rotate-180" : ""
                                    } w-5 h-5 ml-2`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="absolute left-0 mt-2 w-48 text-gray-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
                                {item.items && item.items.map((subItem, subIndex) => (
                                  <Link key={subIndex} href={subItem.url} className="flex items-center inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                    {subItem.name}
                                  </Link>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <Disclosure as="div" className="relative flex items-center inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800" key={index}>
                          <Link key={index} href={item.url} className=" w-full">
                            {item.name}
                          </Link>
                        </Disclosure>
                      )
                    ))}

                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              item.items ? (
                <Disclosure as="div" className="relative" key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                        {item.name}
                        <ChevronDownIcon
                          className={`${open ? "transform rotate-180" : ""
                            } w-5 h-5 ml-2`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="absolute left-0 mt-2 w-48 text-gray-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
                        {item.items && item.items.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.url} className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500">
                            {subItem.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ) : (
                <li className="mr-3 nav__item" key={index}>
                  <Link key={index} href={item.url} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {item.name}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

