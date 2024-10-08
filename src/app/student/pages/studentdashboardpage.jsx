import React from "react";
import CommonLayout from "../../../layouts/CommonLayout";
import NoticeBoardWrapper from "../../../components/NoticeBoard/NoticeBoardWrapper";
import BookStatusBar from "../component/bookstatusbar";
import LibraryCard from "../component/librarycard";
import { Card, Title, Text, Group, Button } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const StudentDashboardPage = () => {
  const teachers = [
    {
      name: "Rahul",
      subject: "English",
      imageUrl: "../Images/student/dashboard/teacher1.svg",
    },
    {
      name: "Tiffny",
      subject: "Physics",
      imageUrl: "../Images/student/dashboard/teacher1.svg",
    },
    {
      name: "Michele",
      subject: "Social Studies",
      imageUrl: "../Images/student/dashboard/teacher1.svg",
    },
    {
      name: "Sam",
      subject: "Math",
      imageUrl: "../Images/student/dashboard/teacher1.svg",
    },
  ];

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

  const subjects = [
    {
      img: "../Images/student/dashboard/bio.gif", // Replace with actual paths
      title: "Subject: Biology",
      books: " 03 Books",
      Teacher: "Lucas Bern",
    },
    {
      img: "../Images/student/dashboard/math.gif",
      title: "Subject: Math",
      books: " 03 Books",
      Teacher: "Lucas Bern",
    },
    {
      img: "../Images/student/dashboard/eng.gif",
      title: "English",
      books: " 03 Books",
      Teacher: "Lucas Bern",
    },
  ];

  return (
    <CommonLayout color="gray" header="none">
      <div className="bg-themeGray gap-0 rounded-tl-[30px] rounded-tr-[30px] w-full h-full mt-2">
        <div className="bg-themeGray w-full my-2 h-[calc(100vh-64px)] overflow-y-scroll p-6">
          {/* mid section .................... */}
          <NoticeBoardWrapper
            events={events}
            studentDashboard="studentDashboard"
          />
          <BookStatusBar />
          <LibraryCard />

          {/* carousel.................. */}
          <div className="relative 1024p:w-[790px]  flex items-center mt-4">
            {/* Left scroll button (optional) */}
            {/* Uncomment if you want the scroll buttons */}
            {/* 
      <Button variant="subtle" className="absolute left-0 top-6 z-10">
        <IconChevronLeft size={24} />
      </Button>
      */}

            <div className="flex overflow-x-auto space-x-4 px-4 w-full justify-around">
              {subjects.map((subject, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  p="lg"
                  radius="md"
                  withBorder
                  className="min-w-[231px] h-[87px] bg-white rounded-2xl shadow flex justify-center"
                >
                  <div className="flex gap-3">
                    <img
                      src={subject.img}
                      alt={subject.title}
                      width={67}
                      height={67}
                      className="bg-[#D6CAFA] rounded-xl p-[5px]"
                    />
                    <div className="flex flex-col">
                      <Text className="text-[#303030] text-base font-semibold font-Switzer">
                        {subject.title}
                      </Text>
                      <Text
                        size="sm"
                        className="text-[#8997a3] text-xs font-normal font-Switzer"
                      >
                        {subject.books}
                      </Text>
                      <Text
                        size="sm"
                        className="text-[#8997a3] text-xs font-normal font-Switzer"
                      >
                        {subject.Teacher}
                      </Text>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right scroll button (optional) */}
            {/* Uncomment if you want the scroll buttons */}
            {/* 
      <Button variant="subtle" className="absolute right-0 top-6 z-10">
        <IconChevronRight size={24} />
      </Button>
      */}
          </div>

          {/* teacher section............ */}
          <div className="w-full max-w-2xl p-6 rounded-lg shadow-sm">
            <Title
              order={2}
              className="text-[#303030] text-2xl font-bold font-Switzer tracking-tight mb-4"
            >
              Your Teachers
            </Title>
            <Group
              position="apart"
              className="flex flex-wrap justify-between gap-4"
            >
              {teachers.map((teacher, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={teacher.imageUrl}
                    alt={teacher.name}
                    width={80}
                    height={80}
                    className="mb-2"
                  />
                  <Text className="text-sm font-semibold">{teacher.name}</Text>
                  <Text className="text-xs text-gray-600">
                    Subject: {teacher.subject}
                  </Text>
                </div>
              ))}
            </Group>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default StudentDashboardPage;
