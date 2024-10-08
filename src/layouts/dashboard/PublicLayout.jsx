import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./nav/header";
import SideBarItems from "./nav/sidebar";

export default function PublicLayout({ children }) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 w-full">
      {children}
      {/* <main className="flex-1 overflow-x-hidden overflow-y-auto bg-mainColor"> */}
       
          <Outlet />
      {/* </main> */}
      {/* <Outlet /> */}
    </div>
    // <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
    //   {/* Sidebar */}
    //   <SideBarItems open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

    //   {/* Main content */}
    //   <div className="flex flex-col flex-1 overflow-hidden">
    //     {/* Header */}
    //     <Header onOpenSidebar={() => setSidebarOpen(true)} />
    //       {/* {chil/dern} */}

    //     {/* Page content */}
    //     <main className="flex-1 overflow-x-hidden overflow-y-auto bg-mainColor">
    //       <div className=" ">
    //         <Outlet />
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
}
