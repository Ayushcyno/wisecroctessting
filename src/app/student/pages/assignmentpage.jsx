import React from "react";
import BookStatusBar from "../component/bookstatusbar";
import CommonLayout from "../../../layouts/CommonLayout";
import { Input, Card, Text, ActionIcon, Group } from "@mantine/core";
import {
  IconSearch,
  IconDownload,
  IconShare,
  IconPlayerPlay,
} from "@tabler/icons-react";
const AssignmentPage = () => {
  const notes = [
    {
      title: "Sample paper for practice",
      subject: "English",
      date: "Mar 12, 2023",
    },
    { title: "Notes on Healthcare", subject: "English", date: "Mar 10, 2023" },
    {
      title: "Event : Quiz on Healthcare",
      subject: "English",
      date: "Mar 08, 2023",
    },
  ];
  return (
    <CommonLayout color="gray" header="none">
      <div className="bg-themeGray w-full my-2 h-[calc(100vh-64px)] overflow-y-scroll p-6">
        <BookStatusBar />

        <div className="1024p:w-[790px] max-w-4xl bg-white rounded-3xl mt-4 p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">English</h1>
            <div className="relative">
              <Input
                icon={<IconSearch size={16} />}
                placeholder="Search here..."
                className="w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="lg"
                className="w-[348px] h-[60px] bg-[#fafafb] rounded-xl border border-[#ebecee] justify-center"
              >
                <Group position="apart">
                  <div>
                    <Text className="w-[154px] h-3.5 text-[#303030] text-xs font-semibold font-Switzer">
                      {note.title}
                    </Text>
                    <Text size="sm">
                      <span className="text-[#676767] text-xs font-normal font-Switzer">
                        {" "}
                        Subject:{" "}
                      </span>
                      <span className="text-[#ff983a] text-xs font-bold font-Switzer">
                        {note.subject}
                      </span>
                    </Text>
                    <Text
                      size="xs"
                      className="w-[82px] h-2.5 text-[#676767] text-[11px] font-normal font-Switzer"
                    >
                      {note.date}
                    </Text>
                  </div>
                  <Group>
                    <ActionIcon variant="light" color="blue">
                      <IconDownload size={18} />
                    </ActionIcon>
                    <ActionIcon variant="light" color="green">
                      <IconShare size={18} />
                    </ActionIcon>
                    {index === 0 && (
                      <ActionIcon variant="light" color="cyan">
                        <IconPlayerPlay size={18} />
                      </ActionIcon>
                    )}
                  </Group>
                </Group>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default AssignmentPage;
