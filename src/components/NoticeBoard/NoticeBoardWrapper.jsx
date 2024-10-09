import React from "react";
import { Card, Text, Menu, Button, ActionIcon, Switch } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { split } from "postcss/lib/list";

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
          studentDashboard
            ? " w-full  1024p:h-auto h-[280px]"
            : studentNoticeBoardPage === "studentNoticeBoardPage"
            ? "  w-full 1024p:h-auto h-[648px] bg-white rounded-3xl"
            : " w-full  1024p:h-auto h-[280px] mx-auto"
        } p-4 rounded-xl relative`}
        style={
          !studentNoticeBoardPage
            ? {
                backgroundImage: `url('/Images/dashboard/bg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        <div className="flex justify-between items-center ">
          <Text
            className={`font-bold font-Switzer tracking-tight ${
              studentNoticeBoardPage ? "text-2xl" : "text-base text-white"
            }`}
          >
            {studentNoticeBoardPage ? (
              <span className="text-[#303030] text-2xl font-bold font-Switzer tracking-tight">
                Notice
              </span>
            ) : (
              "Notice Board"
            )}
          </Text>
        </div>

        <div className="flex w-[81%] items-center h-full ">
          {/* Events Grid */}
          <div
            className={
              studentDashboard
                ? "w-full h-[210px] gap-3 grid md:grid-cols-2 overflow-y-auto no-scrollbar"
                : "grid grid-cols-2 gap-3 place-content-center w-[62%]"
            }
          >
            {events.slice(0, 7).map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                studentNoticeBoardPage={studentNoticeBoardPage}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        {!studentNoticeBoardPage && (
          <div className="mt-4 text-right absolute bottom-5 right-5 ">
            {/* <Button variant="light" color="grape" size="xs">
              View All
            </Button> */}
            <Button
              color="grape"
              className="bg-[#A990F5] text-white border-[#A990F5]"
              leftSection={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M12 1H4C3.20463 1.0009 2.44209 1.31726 1.87967 1.87967C1.31726 2.44209 1.0009 3.20463 1 4V12C1.0009 12.7954 1.31726 13.5579 1.87967 14.1203C2.44209 14.6827 3.20463 14.9991 4 15H12C12.7954 14.9991 13.5579 14.6827 14.1203 14.1203C14.6827 13.5579 14.9991 12.7954 15 12V4C14.9991 3.20463 14.6827 2.44209 14.1203 1.87967C13.5579 1.31726 12.7954 1.0009 12 1ZM13 12C12.9995 12.2651 12.8939 12.5191 12.7065 12.7065C12.5191 12.8939 12.2651 12.9995 12 13H4C3.73495 12.9995 3.4809 12.8939 3.29348 12.7065C3.10606 12.5191 3.00053 12.2651 3 12V4C3.00053 3.73495 3.10606 3.4809 3.29348 3.29348C3.4809 3.10606 3.73495 3.00053 4 3H12C12.2651 3.00053 12.5191 3.10606 12.7065 3.29348C12.8939 3.4809 12.9995 3.73495 13 4V12Z"
                    fill="white"
                  />
                  <path
                    d="M28 1H20C19.2046 1.0009 18.4421 1.31726 17.8797 1.87967C17.3173 2.44209 17.0009 3.20463 17 4V12C17.0009 12.7954 17.3173 13.5579 17.8797 14.1203C18.4421 14.6827 19.2046 14.9991 20 15H28C28.7954 14.9991 29.5579 14.6827 30.1203 14.1203C30.6827 13.5579 30.9991 12.7954 31 12V4C30.9991 3.20463 30.6827 2.44209 30.1203 1.87967C29.5579 1.31726 28.7954 1.0009 28 1ZM29 12C28.9995 12.2651 28.8939 12.5191 28.7065 12.7065C28.5191 12.8939 28.2651 12.9995 28 13H20C19.7349 12.9995 19.4809 12.8939 19.2935 12.7065C19.1061 12.5191 19.0005 12.2651 19 12V4C19.0005 3.73495 19.1061 3.4809 19.2935 3.29348C19.4809 3.10606 19.7349 3.00053 20 3H28C28.2651 3.00053 28.5191 3.10606 28.7065 3.29348C28.8939 3.4809 28.9995 3.73495 29 4V12Z"
                    fill="white"
                  />
                  <path
                    d="M12 17H4C3.20463 17.0009 2.44209 17.3173 1.87967 17.8797C1.31726 18.4421 1.0009 19.2046 1 20V28C1.0009 28.7954 1.31726 29.5579 1.87967 30.1203C2.44209 30.6827 3.20463 30.9991 4 31H12C12.7954 30.9991 13.5579 30.6827 14.1203 30.1203C14.6827 29.5579 14.9991 28.7954 15 28V20C14.9991 19.2046 14.6827 18.4421 14.1203 17.8797C13.5579 17.3173 12.7954 17.0009 12 17ZM13 28C12.9995 28.2651 12.8939 28.5191 12.7065 28.7065C12.5191 28.8939 12.2651 28.9995 12 29H4C3.73495 28.9995 3.4809 28.8939 3.29348 28.7065C3.10606 28.5191 3.00053 28.2651 3 28V20C3.00053 19.7349 3.10606 19.4809 3.29348 19.2935C3.4809 19.1061 3.73495 19.0005 4 19H12C12.2651 19.0005 12.5191 19.1061 12.7065 19.2935C12.8939 19.4809 12.9995 19.7349 13 20V28Z"
                    fill="white"
                  />
                  <path
                    d="M27.8802 26.4657C28.7592 25.2322 29.1425 23.7133 28.9541 22.2104C28.7658 20.7075 28.0194 19.3302 26.8632 18.3518C25.7069 17.3734 24.2252 16.8652 22.7118 16.9281C21.1984 16.9909 19.7639 17.6202 18.6928 18.6912C17.6217 19.7622 16.9922 21.1966 16.9291 22.71C16.866 24.2233 17.374 25.7052 18.3522 26.8616C19.3305 28.0179 20.7077 28.7645 22.2106 28.9531C23.7135 29.1417 25.2323 28.7586 26.466 27.8797L29.293 30.7069C29.4816 30.8891 29.7342 30.9899 29.9964 30.9876C30.2586 30.9853 30.5094 30.8802 30.6948 30.6948C30.8802 30.5094 30.9854 30.2585 30.9877 29.9963C30.99 29.7341 30.8892 29.4815 30.707 29.2929L27.8802 26.4657ZM19.0002 22.9999C19.0002 22.2088 19.2348 21.4355 19.6743 20.7777C20.1139 20.1199 20.7386 19.6072 21.4695 19.3044C22.2004 19.0017 23.0047 18.9225 23.7806 19.0768C24.5565 19.2311 25.2692 19.6121 25.8286 20.1715C26.3881 20.7309 26.769 21.4437 26.9234 22.2196C27.0777 22.9955 26.9985 23.7998 26.6957 24.5307C26.393 25.2616 25.8803 25.8863 25.2225 26.3258C24.5647 26.7653 23.7913 26.9999 23.0002 26.9999C21.9398 26.9985 20.9232 26.5766 20.1734 25.8268C19.4235 25.077 19.0017 24.0604 19.0002 22.9999Z"
                    fill="white"
                  />
                </svg>
              }
              variant="default"
            >
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
