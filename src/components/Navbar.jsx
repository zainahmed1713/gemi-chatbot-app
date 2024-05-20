import React, { useState, useContext } from "react";
import { Auth } from "../contexts/Auth";
import useGoogleLogout from "../hooks/useGoogleLogout";

const Navbar = () => {
  const { user } = useContext(Auth);
  const [userMenuState, setUserMenuState] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);
  const { logout } = useGoogleLogout();

  const toggleUserMenu = () => {
    setUserMenuState(!userMenuState);
  };

  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#101010]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-white rounded-lg focus:outline-none hover:opacity-60"
                onClick={toggleSidebar}
                onBlur={() => setSidebarState(false)}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="https://gemi-chatbot-app.vercel.app/"
                className="flex ms-2 md:me-24"
              >
                <span className="font-sfPro font-bold text-white text-2xl tracking-wider">
                  Gemi
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="user-menu flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-[#161b22]"
                    aria-expanded={userMenuState}
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.photoURL}
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={`absolute top-14 right-1 ${
                    userMenuState ? "block" : "hidden"
                  } text-base list-none bg-[#161b22] divide-y divide-gray-100 rounded shadow`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="font-sfPro text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {user?.name}
                    </p>
                    <p
                      className="font-sfPro text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {user?.email}
                    </p>
                  </div>
                  <button
                    className="w-full font-sfPro block px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed ${
          sidebarState ? "block" : "hidden"
        } top-0 left-0 z-40 w-64 h-screen pt-20 bg-[#101010]`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#101010]">
          <h4 className="font-sfPro font-bold text-white text-lg tracking-wider my-2">
            History
          </h4>
          <div className="bg-gray-600 h-[1px]"></div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#161b22] group"
              >
                <span className="">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Navbar;
