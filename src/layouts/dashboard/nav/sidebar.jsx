import React from "react";
import { NavLink } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import { studentSidebar, teacherSidebar } from "./sidebarItems";
import { role } from "../../../lib/utils";

const SideBarItems = ({ open, onClose }) => {
  // let role = "teacher"; // Replace with dynamic role as needed

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 1024p:w-52 w-48 bg-white dark:bg-gray-800 overflow-y-auto transition duration-300 transform ${
        open ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
      } lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center px-4 py-3 mt-2">
        <img
          src="../public/images/logo/logo.png"
          alt="Uploaded"
          width="44"
          height="43"
        />
        <div className="ml-[17px]">
          <span className="text-xs font-bold font-manrope text-[#369FFF] tracking-wide">
            WISE
          </span>
          <span className="text-xs font-normal font-manrope text-[#369FFF] tracking-wide">
            CROC
          </span>
        </div>
        <button onClick={onClose} className="lg:hidden">
          <IconX size={24} className="text-gray-500" />
        </button>
      </div>

      <nav className="mt-10">
        {role == "teacher"
          ? teacherSidebar.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 mt-4 duration-200 ${
                    isActive ? " text-purple-600" : ""
                  }`
                }
              >
                {item.icon}
                <span className="mx-4">{item.title}</span>
              </NavLink>
            ))
          : studentSidebar.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-2 mt-4 duration-200  ${
                    isActive ? " text-purple-600" : ""
                  }`
                }
              >
                {item.icon}
                <span className="mx-4">{item.title}</span>
              </NavLink>
            ))}
      </nav>
    </div>
  );
};

export default SideBarItems;
