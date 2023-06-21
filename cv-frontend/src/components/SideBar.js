import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trans } from 'react-i18next';

const SideBar = () => {
  return (
    <div className="lg:min-h-fit">
      <div className="sidebar lg:min-h-screen lg:w-[3.35rem] lg:overflow-hidden border-r lg:hover:w-56 hover:shadow-lg hover:bg-gray-100">
        <div className="flex lg:h-screen lg:flex-col justify-between lg:pt-2 lg:pb-6">
          <ul className="flex flex-col sm:flex-row w-7/12 mx-2 md:my-2 lg:mx-0 lg:block lg:mt-6 space-y-2 tracking-wide">
            <li className="min-w-max mt-2">
              <NavLink
                to="/"
                className="bg group flex items-center space-x-4 rounded-md p-1 md:px-4 md:py-3 text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20">
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">
                  <Trans i18nKey="sidebar.skills" />
                </span>
              </NavLink>
            </li>
            <li className="min-w-max">
              <NavLink
                to="/education"
                className="bg group flex items-center space-x-4 rounded-md p-1 md:px-4 md:py-3 text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20">
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">
                  <Trans i18nKey="sidebar.education" />
                </span>
              </NavLink>
            </li>
            <li className="min-w-max">
              <NavLink
                to="/projects"
                className="bg group flex items-center space-x-4 rounded-md p-1 md:px-4 md:py-3 text-gray-600"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                  ></path>
                </svg>
                <span className="group-hover:text-gray-700">
                  <Trans i18nKey="sidebar.projects" />
                </span>
              </NavLink>
            </li>
            {/* <li className="min-w-max">
              <NavLink to="/other" className="group flex items-center space-x-4 rounded-md p-1 md:px-4 md:py-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" >
                  <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                <span className="group-hover:text-gray-700"><Trans i18nKey="sidebar.work" /></span>
              </NavLink>
            </li> */}
            <li className="min-w-max">
              <NavLink
                to="/contacts"
                className="group flex items-center space-x-4 rounded-md p-1 md:px-4 md:py-3 text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20">
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">
                  <Trans i18nKey="sidebar.contacts" />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
