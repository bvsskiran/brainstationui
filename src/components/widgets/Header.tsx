'use client';

import { useRef, useState } from 'react';
import { IconRss } from '@tabler/icons-react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import { CallToActionType } from '~/shared/types';

const Header = () => {
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

  const ref = useRef(null);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useOnClickOutside(ref, () => {
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  });

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white shadow-sm px-2 md:px-4"
      id="header"
    >
  <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-0 py-2 md:px-0 gap-2 md:gap-0">
        <div
          className={`flex justify-between items-center w-full py-2 px-0 md:py-0 md:px-0 ${
            isToggleMenuOpen
              ? 'md:bg-transparent md:dark:bg-transparent md:border-none bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-600'
              : ''
          }`}
        >
          <Link
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <span className="h-9 w-auto flex items-center">
              <Logo />
            </span>
          </Link>
          <div className="flex items-center md:hidden ml-2">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>
        <nav
          className={`${isToggleMenuOpen ? 'block px-2' : 'hidden'} fixed top-0 left-0 w-full h-screen bg-white dark:bg-slate-900 md:static md:w-auto md:h-auto md:bg-transparent md:dark:bg-transparent ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul
            ref={ref}
            className="flex w-full flex-col mt-2 mb-36 md:m-0 text-sm md:w-auto md:flex-row md:self-center md:pt-0 md:text-xs md:flex-nowrap md:whitespace-nowrap"
          >
            {links &&
              links.map(({ label, href, icon: Icon, links }, index) => (
                <li key={`item-link-${index}`} className={links?.length ? 'dropdown md:whitespace-nowrap' : 'md:whitespace-nowrap'}>
                  {links && links.length ? (
                    <>
                      <button
                        className="flex items-center px-4 py-2 font-medium uppercase tracking-wide text-gray-800 hover:text-blue-600 transition-colors duration-200 dark:text-gray-100 dark:hover:text-primary-400 text-xs"
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {label}{' '}
                        {Icon && (
                          <Icon
                            className={`$${
                              isDropdownOpen[index] ? 'rotate-180' : ''
                            } ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden h-3.5 w-3.5 md:inline`}
                          />
                        )}
                      </button>
                      <ul
                        className={`${
                          isDropdownOpen[index] ? 'block' : 'md:hidden'
                        } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90 md:border md:border-gray-200 md:dark:border-slate-700`}
                      >
                        {links.map(({ label: label2, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                                className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b transition-colors duration-200 text-gray-600 hover:text-blue-700 bg-white dark:bg-white text-xs"
                              href={href2 as string}
                              onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                              }
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className="flex items-center px-4 py-2 font-medium uppercase tracking-wide text-gray-800 hover:text-blue-600 transition-colors duration-200 dark:text-gray-100 dark:hover:text-primary-400 text-xs"
                      href={href as string}
                      onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <div
          className={`$
            isToggleMenuOpen ? 'block' : 'hidden'
          } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 md:bg-transparent md:dark:bg-transparent md:border-none bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-600`}
        >
          <div className="flex w-full md:w-auto items-center justify-end gap-2 md:gap-4">
            {showToggleTheme && <ToggleDarkMode />}
            {showRssFeed && (
              <Link
                className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                aria-label="RSS Feed"
                href=""
              >
                <IconRss className="h-5 w-5" />
              </Link>
            )}
            {actions && actions.length > 0 && (
              <div className="ml-4 rtl:ml-0 rtl:mr-4 flex w-max flex-wrap justify-end">
                {actions.map((callToAction, index) => (
                  <CTA
                    key={`item-action-${index}`}
                    callToAction={callToAction as CallToActionType}
                    linkClass="bg-blue-600 hover:bg-blue-700 text-white rounded-md m-1 py-2 px-4 text-xs font-semibold shadow transition-colors duration-200 md:px-5 bg-[#0ca5ff] hover:bg-[#0b94e0] dark:bg-blue-400 dark:hover:bg-blue-500"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
