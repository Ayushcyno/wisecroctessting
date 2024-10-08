import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { Breadcrumbs } from "../../../Routes/breadcrumbs";

export default function Header({ onOpenSidebar, color }) {
  return (
    <header
      className={`${
        color === "gray" ? "bg-themeGray" : "bg-mainColor"
      } dark:bg-gray-800`}
    >
      <div className="px-4  flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onOpenSidebar}
            className="text-white focus:outline-none lg:hidden"
          >
            <IconMenu2 size={24} />
          </button>
          <div className="relative mx-4 lg:mx-0 mt-4">
            {/* searchbar /////////
             <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <IconSearch className="h-5 w-5 text-gray-500" />
            </span>
            <input
              className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
              type="text"
              placeholder="Search for projects"
            /> */}

            {color === "gray" ? (
              <div className="flex items-center gap-2 ml-9">
                <img src="../Images/school/school.png" className="w-16 h-16" />
                <span className="text-[#369eff] text-lg font-bold font-Manrope tracking-wide">
                  Marvel School
                </span>
              </div>
            ) : (
              <div className="ml-4">
                <Breadcrumbs />
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex items-center">
          <button className="flex mx-4 text-gray-600 focus:outline-none">
            <IconBell className="h-6 w-6" />
          </button>
          <div className="relative">
            <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="Your avatar"
              />
            </button>
          </div>
        </div> */}
      </div>
    </header>
  );
}
