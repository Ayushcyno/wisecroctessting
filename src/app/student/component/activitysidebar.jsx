import React from "react";
import {
  Card,
  Avatar,
  Button,
  Progress,
  Title,
  Text,
  Badge,
} from "@mantine/core";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowDownSLine, RiArrowDownWideFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { IconBook, IconChecklist } from "@mantine/icons";
// import { FaAngleDown } from "react-icons/bs";

const ActivitySidebar = () => {
  return (
    <div className=" bg-[#d6cafa] p-4 space-y-6 relative right-0 w-[378px]  ">
      {/* Header Section */}
      <Card className="w-[243px] h-[50px] bg-white rounded-[30px] justify-center ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar src="path/to/avatar" radius="xl" size="md" />
            <Title order={4}>Student</Title>
          </div>
          <MdKeyboardArrowDown className="w-3.5"     />
        </div>
      </Card>

      {/* Assignment Section */}
      <Card className="bg-white p-6 rounded-xl shadow-md">
        <Title order={4}>Assignment</Title>
        <div className="space-y-4 mt-4">
          {[
            "Sample question paper",
            "Notes on Healthcare",
            "Event: Quiz on Healthcare",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <Text size="sm" weight={500}>
                  {item}
                </Text>
                <Text size="xs" color="dimmed">
                  Subject: English
                </Text>
                <Text size="xs" color="dimmed">
                  Mr. John Doe
                </Text>
              </div>
              <Button
                variant="subtle"
                size="xs"
                className="bg-purple-50 rounded-full"
              >
                {/* <IconChecklist size={16} /> */}
              </Button>
            </div>
          ))}
        </div>
        <Button variant="light" className="mt-4 w-full">
          View All
        </Button>
      </Card>

      {/* New Added Books Section */}
      <Card className="bg-white p-6 rounded-xl shadow-md">
        <Title order={4}>New Added Books</Title>
        <div className="space-y-4 mt-4">
          {[
            { title: "The Seven Friends", author: "John Green" },
            { title: "Seasons Around the World", author: "Eric Harvard" },
            { title: "Pluto and the Planet", author: "Monica Zubac" },
          ].map((book, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div>
                <Text size="sm" weight={500}>
                  {book.title}
                </Text>
                <Text size="xs" color="dimmed">
                  by {book.author}
                </Text>
              </div>
              <Button variant="light" className="bg-purple-50 rounded-full">
                Read Now
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Task Done This Week Section */}
      <Card className="bg-white p-6 rounded-xl shadow-md">
        <Title order={4}>Task Done This Week</Title>
        <div className="flex items-center space-x-4 mt-4">
          {/* <IconBook size={48} className="text-purple-400" /> */}
          <div className="flex flex-col">
            <Text size="sm" weight={500}>
              Tasks
            </Text>
            <Progress value={60} label="3/5" size="md" color="purple" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ActivitySidebar;
