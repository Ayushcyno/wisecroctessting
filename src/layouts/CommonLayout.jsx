import React, { useState } from "react";
import PublicLayout from "./dashboard/PublicLayout";
import SideBarItems from "./dashboard/nav/sidebar";
import Header from "./dashboard/nav/header";
import ActivitySidebar from "../app/student/component/activitysidebar";
import { role } from "../lib/utils";

const CommonLayout = ({ children, color, header }) => {
  console.log("color", color);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <PublicLayout>
        <SideBarItems
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div
          className={`${
            color == "gray" ? "bg-themeGray" : "bg-mainColor"
          }  ${
            role == "teacher" ? "flex-col" : "flex"
          }  w-full flex-1 overflow-hidden`}
        >
          {header === "none" ? (
            ""
          ) : (
            <Header onOpenSidebar={() => setSidebarOpen(true)} />
          )}

          {children}
         { role == "student" &&  <ActivitySidebar />}
        </div>
      </PublicLayout>
    </>
  );
};

export default CommonLayout;
