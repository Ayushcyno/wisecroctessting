import React from "react";
import CommonLayout from "../../../layouts/CommonLayout";
import BookStatusBar from "../component/bookstatusbar";
import NoticeBoardWrapper from "../../../components/NoticeBoard/NoticeBoardWrapper";

const StudentNoticeBoardPage = () => {
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
    {
      id: 7,
      name: "Music Concert",
      date: "26 Sep",
      time: "6:00 PM - 8:00 PM",
      instructor: "Mr. Liam Johnson",
    },
  ];
  return (
    <CommonLayout color="gray" header="none">
      <div className="bg-themeGray w-full my-2 h-[calc(100vh-64px)] overflow-y-scroll p-6">
        <BookStatusBar />
        <hr />
        <div className="mt-4">

        <NoticeBoardWrapper
          events={events}
          studentNoticeBoardPage="studentNoticeBoardPage"
          color="white"
        />
        </div>
      </div>
    </CommonLayout>
  );
};

export default StudentNoticeBoardPage;
