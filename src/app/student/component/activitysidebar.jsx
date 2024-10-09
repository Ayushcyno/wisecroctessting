import React from "react";
import {
  Card,
  Avatar,
  Button,
  Progress,
  Title,
  Text,
  Badge,
  Group,
} from "@mantine/core";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowDownSLine, RiArrowDownWideFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  IconBellFilled,
  IconBook,
  IconFileDescription,
  IconNotification,
  IconNotificationOff,
} from "@tabler/icons-react";
// import { IconBook, IconChecklist } from "@mantine/icons";
// import { FaAngleDown } from "react-icons/bs";
import prelogin from "../../../../public/Images/login/prelogin.png";
const ActivitySidebar = () => {
  return (
    <div className="bg-[#d6cafa] p-4 h-[full] relative right-0 w-[370px]">
<div className=" h-full overflow-y-auto no-scrollbar 1024p:space-y-6 space-y-10  " >
    {/* Header Section */}
    <div className="flex items-center gap-6">
        <Avatar size={50} radius="xl" className="bg-white">
          <IconBellFilled size={25} color="#A990F5" />
        </Avatar>
        <div className="bg-white p-2 rounded-full w-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar src="path/to/avatar" radius="xl" size="md" />
            <Title order={4}>Student</Title>
          </div>
          <MdKeyboardArrowDown className="w-3.5" />
        </div>
      </div>

      {/* Assignment Section */}
      <Card className="  rounded-xl shadow-md ">
        <Title className="text-center text-[20px] font-bold" order={4}>
          Assignment
        </Title>
        <div className=" mt-4 h-[300px] overflow-auto">
          {[
            "  Sample question paper for practice",

            "Notes on Healthcare",
            "Event: Quiz on Healthcare",
          ].map((item, index) => (
            <Card className="w-[300px] py-2 px-3 bg-white flex ">
              <Group noWrap>
                {/* Left Icon */}

                <IconBook size={20} className="text-gray-500" />

                {/* Text Content */}
                <div className="flex-1">
                  <Text className="text-[12px] font-bold">{item}</Text>
                  <Text size="sm" className=" text-gray-500">
                    Subject :{" "}
                    <span className="text-[#FF993A] font-bold">English</span>
                  </Text>
                  <Text size="xs" className="text-gray-500">
                    Mr. Uncle Sam
                  </Text>
                </div>

                {/* Right Icon */}
                <Avatar size={26} radius="lg" className="bg-[#A990F5]">
                  <IconFileDescription size={20} className="text-white" />
                </Avatar>
              </Group>
            </Card>
          ))}
        </div>
        <Button
          variant="light"
          className="bg-[#A990F5] text-white mt-4 w-[100px] m-auto"
        >
          View All
        </Button>
      </Card>

      {/* New Added Books Section */}
      <Card className="bg-transparent p-0  ">
        <Title className=" text-[20px] font-bold" order={4}>
          New Added Books
        </Title>
        <div className="space-y-6 mt-4">
          {[
            { title: "The Seven Friends", author: "John Green" },
            { title: "Seasons Around the World", author: "Eric Harvard" },
            { title: "Pluto and the Planet", author: "Monica Zubac" },
          ].map((book, index) => (
            <div
              key={index}
              className="flex justify-between items-center h-[80px] bg-white px-2 rounded-xl"
            >
              <div className="w-[56px] h-[56px] mr-2 bg-gray-500">
                <img
                  src={prelogin}
                  alt="prelogin"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[50%]">
                <Text size="sm" className="font-bold">
                  {book.title}
                </Text>
                <Text size="xs" color="dimmed">
                  by {book.author}
                </Text>
              </div>

              <Button
                variant="light"
                className=" tracking-wide px-2 bg-[#A990F5] rounded-xl text-white mt-4 ml-auto"
              >
                Read Now
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Task Done This Week Section */}
      <Card className="bg-transparent p-0  ">
        <Title className=" text-[20px] font-bold" order={4}>
          Task Done This Week
        </Title>

        <div className="flex justify-between items-center bg-white p-4 rounded-xl mt-4">
          {/* <IconBook size={48} className="text-purple-400" /> */}
          <div className="flex justify-center text-center space-y-2 flex-col">
            <Text size="sm" weight={500}>
              Tasks
            </Text>
            <div className="w-[56px] h-[56px]  ">
              <img
                src={prelogin}
                alt="prelogin"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex justify-center text-center space-y-2 flex-col">
            <Text size="sm" weight={500}>
              Tasks
            </Text>
            <div className="w-[56px] h-[56px]  ">
              <Progress value={60} label="3/5" size="md" color="purple" />
            </div>
          </div>
        </div>
      </Card>
</div>
  
    </div>
  );
};

export default ActivitySidebar;
