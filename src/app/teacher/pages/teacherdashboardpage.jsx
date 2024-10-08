import React, { useState } from "react";
import CommonLayout from "../../../layouts/CommonLayout";
import Header from "../../../layouts/dashboard/nav/header";
import DataTable from "../../../components/table/table";
import NoticeBoardWrapper from "../../../components/NoticeBoard/NoticeBoardWrapper";

const TeacherDashboardPage = () => {
  const events = [
    {
      id: 1,
      name: "Class Painting Competition",
      date: "21 Sep",
      time: "9:00 AM - 10:00 AM",
      instructor: "Ms. Linda Sam",
    },
    {
      id: 2,
      name: "Science Fair",
      date: "22 Sep",
      time: "11:00 AM - 1:00 PM",
      instructor: "Dr. Albert Newton",
    },
    {
      id: 3,
      name: "Sports Day",
      date: "23 Sep",
      time: "9:00 AM - 5:00 PM",
      instructor: "Mr. David Smith",
    },
    {
      id: 4,
      name: "Quiz Competition",
      date: "24 Sep",
      time: "10:00 AM - 12:00 PM",
      instructor: "Ms. Emily Brown",
    },
    {
      id: 5,
      name: "Art Exhibition",
      date: "25 Sep",
      time: "1:00 PM - 4:00 PM",
      instructor: "Ms. Sophia Turner",
    },
    {
      id: 6,
      name: "Music Concert",
      date: "26 Sep",
      time: "6:00 PM - 8:00 PM",
      instructor: "Mr. Liam Johnson",
    },
  ];
  return (
    <CommonLayout color="purple">
      <div className="bg-themeGray gap-0 rounded-tl-[30px] rounded-tr-[30px] w-full h-full unset mt-2">
        <div className="bg-themeGray gap-0 rounded-tl-[30px] rounded-tr-[30px] w-full my-2 h-[calc(100vh-64px)] overflow-y-scroll p-6">
          <NoticeBoardWrapper events={events} />
          <div className="flex flex-col w-full h-[600px] mt-4">
            <DataTable color="white" />
            {/* <TablePagination/> */}
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default TeacherDashboardPage;
