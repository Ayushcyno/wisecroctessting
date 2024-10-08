import React from "react";
import { Card, Text, Menu, Button, ActionIcon, Switch } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

// Event Card Component
const EventCard = ({ event, studentNoticeBoardPage }) => (
  <Card
    className={`rounded-lg shadow-sm p-1 flex items-center justify-between overflow-hidden ${
      studentNoticeBoardPage
        ? "bg-[#fafafb] w-full sm:w-[350px] h-[60px]"
        : "bg-white w-full sm:w-[300px] h-[60px]"
    }`}
  >
    <div className="flex items-center w-full">
      <div className="relative w-12 h-12 rounded-full flex items-center justify-center mr-3">
        <div className="absolute inset-0 rounded-full opacity-20 bg-[#D6CAFA]"></div>
        <img
          src="../Images/teacher/dashboard/note.png"
          className="w-8 h-8 z-10"
          alt="event icon"
        />
      </div>
      <div className="flex-1">
        <Text className="text-[#303030] text-sm font-switzer font-semibold truncate">
          {event.name}
        </Text>
        <Text className="text-[#676767] text-xs font-switzer font-normal truncate">
          {event.date}, {event.time}
        </Text>
        <Text className="text-[#676767] text-xs font-switzer font-[11px] truncate">
          {event.instructor}
        </Text>
      </div>

      {/* Menu for Edit and Delete options */}
      <Menu>
        <Menu.Target>
          <ActionIcon variant="subtle" color="gray" size="xs">
            <IconDotsVertical size={14} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  </Card>
);

// StatCard component for displaying dashboard stats
const StatCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-6 flex-1 min-w-[200px]">
      <div className="mr-4 text-blue-500">{icon}</div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

// NoticeBoard Component
function NoticeBoardWrapper({
  events,
  studentDashboard,
  color,
  studentNoticeBoardPage,
}) {
  const dashboardData = [
    {
      icon: "../Images/teacher/dashboard/classes.svg",
      title: "Total Class",
      value: 10,
    },
    {
      icon: "../Images/teacher/dashboard/student.svg",
      title: "Total Students",
      value: 1000,
    },
    {
      icon: "../Images/teacher/dashboard/book.svg",
      title: "Total Book Issued",
      value: 210,
    },
  ];

  return (
    <div>
      {/* Notice Board Section */}
      <div
        className={`${
          studentDashboard === "studentDashboard"
            ? "w-[790px]"
            : studentNoticeBoardPage === "studentNoticeBoardPage"
            ? "w-[790px] h-[648px] bg-white rounded-3xl"
            : "w-[1131px] h-[280px] mx-auto"
        } bg-mainColor p-4 rounded-xl`}
      >
        <div className="flex justify-between items-center mb-2">
          <Text
            className={`font-bold font-Switzer tracking-tight ${
              studentNoticeBoardPage ? "text-2xl" : "text-sm text-white"
            }`}
          >
            {studentNoticeBoardPage ? (
              <span className="text-[#303030] text-2xl font-bold font-Switzer tracking-tight">
                {" "}
                Notice
              </span>
            ) : (
              "Notice Board"
            )}
          </Text>
        </div>

        <div className="flex justify-between">
          {/* Events Grid */}
          <div
            className={
              studentNoticeBoardPage
                ? "w-[790px] grid grid-cols-2 gap-3 place-content-center"
                : "grid grid-cols-2 gap-3 place-content-center w-[62%]"
            }
          >
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                studentNoticeBoardPage={studentNoticeBoardPage}
              />
            ))}
          </div>

          {/* SVG Image */}
          {!studentNoticeBoardPage && (
            <div className="relative right-[15%] flex">
              <img
                src="../Images/teacher/dashboard/human.svg"
                alt="human icon"
                className="w-20 h-30"
              />
            </div>
          )}
        </div>

        {/* View All Button */}
        {!studentNoticeBoardPage && (
          <div className="mt-4 text-right">
            <Button variant="light" color="grape" size="xs">
              View All
            </Button>
          </div>
        )}
      </div>

      {/* Dashboard Stats Section */}

      {!studentDashboard && !studentNoticeBoardPage ? (
        <>
          <div className="flex justify-between mt-4 w-[1131px] mx-auto">
            {dashboardData.map((item, index) => (
              <div
                key={index}
                className="flex items-center  justify-evenly space-x-3 w-[357px] h-[86px] bg-white rounded-2xl shadow"
              >
                <div>
                  <p className="text-black text-lg font-bold font-Switzer">
                    {item.title}
                  </p>
                  <p className="w-[119px] text-black text-3xl font-bold font-Switzer">
                    {item.value}
                  </p>
                </div>
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md mt-3 w-[1131px]  h-[88px] mx-auto">
            <div className="flex items-center  ">
              <input className="" type="checkbox" />
              <span className="text-xl  text-mainColor font-medium font-manrop ml-8">
                Select ALL
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
              <Button className="bg-[#ebecee] text-white flex flex-row items-center justify-center w-[250px] sm:w-[250px] h-[50px] px-4 py-2 rounded-lg transition duration-300 ease-in-out">
                <span className="flex items-center">
                  <img
                    src="../Images/teacher/dashboard/notice.svg"
                    width={20}
                    height={20}
                    alt="Add"
                    className="mr-2"
                  />
                  <span>Create Notice</span>
                </span>
              </Button>
              <Button className="bg-[#5cd6a3] text-white flex flex-row items-center justify-center w-[250px] sm:w-[250px] h-[50px] px-4 py-2 rounded-lg transition duration-300 ease-in-out">
                <span className="flex items-center">
                  <img
                    src="../Images/teacher/dashboard/assignment.svg"
                    width={20}
                    height={20}
                    alt="Add"
                    className="mr-2"
                  />
                  <span>Create Assignment</span>
                </span>
              </Button>
              <Button className="bg-[#6bc6f3] text-white flex flex-row items-center justify-center w-[250px] sm:w-[250px] h-[50px] px-4 py-2 rounded-lg transition duration-300 ease-in-out">
                <span className="flex items-center">
                  <img
                    src="../Images/teacher/dashboard/issuebook.svg"
                    width={20}
                    height={20}
                    alt="Add"
                    className="mr-2"
                  />
                  <span>Issue Books</span>
                </span>
              </Button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default NoticeBoardWrapper;
