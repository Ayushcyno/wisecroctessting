import React from "react";
import { Card } from "@mantine/core";
import { FaPlay } from "react-icons/fa";

const EventCard = ({ eventData = [] }) => {
  return (
    <div className="h-auto bg-white rounded-3xl">
      {/* Events eligible for you Section */}
      <div>
        <h2 className="text-[#303030] text-2xl font-bold font-Switzer tracking-tight  p-4">
          {" "}
          Events eligible for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {eventData.map((event, index) => (
            <div key={index}>
              {/* Event Card */}
              <div className="relative inset-0 overflow-hidden h-[292px] flex justify-center items-center flex-col">
                <img
                  src="/Images/student/dashboard/Plutoandtheplanets.png"
                  className="w-[280px] h-[192px] rounded-[14px]"
                  alt="Event"
                />

                {/* Overlay Container */}
                <div className="w-[318px] h-[65px] bg-[#9caaed] rounded-2xl shadow flex justify-center items-center relative  bottom-[40px]">
                  <div className="flex items-center w-full p-4">
                    <div className="flex-1">
                      {/* Event Name and Duration */}
                      <div className="text-white text-[17px] font-semibold font-Switzer leading-normal">
                        {event.eventName || "Event Name Here"}
                      </div>
                      <div className="mt-1 text-[#e4ddfc] text-sm font-normal font-Switzer">
                        <span>{event.duration || "Duration Here"}</span>
                        <span className="ml-2">
                          {event.eventType || "Event Type Here"}
                        </span>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="ml-4">
                      <div className="w-[53px] h-[51px] bg-[#291665] rounded-[15px] flex justify-center items-center">
                        <FaPlay className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      {/* School Events Section */}
      <div>
        <h2 className="text-[#303030] text-2xl font-bold font-Switzer tracking-tight  pl-4">
          School Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {eventData.map((event, index) => (
            <div key={index}>
              {/* Event Card */}
              <div className="relative inset-0 overflow-hidden h-[292px] flex justify-center items-center flex-col">
                <img
                  src="/Images/student/dashboard/Plutoandtheplanets.png"
                  className="w-[280px] h-[192px] rounded-[14px]"
                  alt="Event"
                />
  
                {/* Overlay Container */}
                <div className="w-[318px] h-[65px] bg-[#9caaed] rounded-2xl shadow flex justify-center items-center relative  bottom-[40px]">
                  <div className="flex items-center w-full p-4">
                    <div className="flex-1">
                      {/* Event Name and Duration */}
                      <div className="text-white text-[17px] font-semibold font-Switzer leading-normal">
                        {event.eventName || "Event Name Here"}
                      </div>
                      <div className="mt-1 text-[#e4ddfc] text-sm font-normal font-Switzer">
                        <span>{event.duration || "Duration Here"}</span>
                        <span className="ml-2">
                          {event.eventType || "Event Type Here"}
                        </span>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="ml-4">
                      <div className="w-[53px] h-[51px] bg-[#291665] rounded-[15px] flex justify-center items-center">
                        <FaPlay className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
