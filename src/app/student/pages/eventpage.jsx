import React from "react";
import CommonLayout from "../../../layouts/CommonLayout";
import BookStatusBar from "../component/bookstatusbar";
import EventCard from "../component/eventcard";

const EventPage = () => {
  const eventData = [
    {
      eventName: "Sample Event",
      duration: "2 hours",
      eventType: "Conference"
    },
    {
        eventName: "hii Event",
        duration: "2 hours",
        eventType: "Conference"
      }
      ,
    {
        eventName: "hii Event",
        duration: "2 hours",
        eventType: "Conference"
      }
      ,
    {
        eventName: "hii Event",
        duration: "2 hours",
        eventType: "Conference"
      }
      ,
    {
        eventName: "hii Event",
        duration: "2 hours",
        eventType: "Conference"
      }
  ]; // Sample data, replace with actual data

  return (
    <CommonLayout color="gray" header="none">
      <div className="bg-themeGray w-full my-2 h-[calc(100vh-64px)] overflow-y-scroll p-6">
        <BookStatusBar />
        <EventCard eventData={eventData} index={0} />
        <hr />
      </div>
    </CommonLayout>
  );
};

export default EventPage;
