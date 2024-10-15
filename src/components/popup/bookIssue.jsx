import React, { useState } from "react";
import {
  Modal,
  Button,
  Avatar,
  Badge,
  Group,
  Text,
  ActionIcon,
  Radio,
  Select,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import "./popup.css";
import { useForm } from "@mantine/form";
// import { IconX, IconFileText } from '@mantine/icons';
const BookIssue = () => {
  const [opened, setOpened] = useState(false);

  const [scheduleType, setScheduleType] = useState("now");

  const form = useForm({
    initialValues: {
      book: "",
      schedule: "now",
      scheduleDate: null,
      scheduleTime: null,
    },
    validate: {
      book: (value) => (value ? null : "Book is required"),
    },
  });

  return (
    <>
      {/* Button to open the modal */}
      <Button
        onClick={() => setOpened(true)}
        className="bg-red-500  hover:bg-red-600"
      >
        Open Unflag Modal
      </Button>

      {/* Modal Component */}
      <Modal
        className="light-popup  "
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        classNames={{
          close:
            "hover:bg-red-500  focus:bg-red-500 text-white bg-[#DF4744] rounded-full ",
          header: "absolute top-0 right-0",
        }}
        size="lg"
      >
        <div className="flex flex-col px-4 pt-4">
          <div className="text-center">
            <div className="flex items-center  text-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_183_2021)">
                  <path
                    d="M39.3953 5.55035C39.0179 5.30374 38.5413 5.26462 38.1287 5.44635L37.9447 5.52769L36.3447 3.52769C35.8903 2.95498 35.1587 2.6771 34.4387 2.80369C33.6127 2.95169 32.798 3.13302 31.9993 3.33702V0.666354C31.9995 0.467956 31.9113 0.279796 31.7587 0.15302C31.6056 0.0272752 31.4049 -0.024668 31.21 0.0110204C23.9053 1.38035 21.078 5.52635 20 8.17969C18.9187 5.52169 16.0907 1.37969 8.78933 0.0110204C8.59447 -0.0244822 8.39384 0.027441 8.24067 0.15302C8.08806 0.279796 7.99984 0.467956 8 0.666354V3.34102C7.2 3.13502 6.38667 2.95369 5.56067 2.80769C4.84053 2.68306 4.10975 2.96116 3.65467 3.53302L2.05467 5.53302L1.87067 5.45235C1.45936 5.27123 0.984475 5.3095 0.60748 5.55416C0.230486 5.79882 0.0021101 6.21694 0 6.66635V31.877C0.000105687 32.4055 0.312334 32.884 0.796 33.097L16.1293 39.8437C16.502 40.0122 16.9329 39.9919 17.288 39.789C17.5003 39.926 17.7474 39.9991 18 39.9997H22C22.2523 39.9991 22.4992 39.9263 22.7113 39.7897C22.9015 39.896 23.1149 39.9537 23.3327 39.9577C23.5179 39.9576 23.7011 39.919 23.8707 39.8444L39.204 33.0977C39.6879 32.8846 40.0002 32.4058 40 31.877V6.66635C40.0005 6.21594 39.7729 5.79589 39.3953 5.55035ZM34.674 4.11835C34.9128 4.08041 35.1534 4.17388 35.304 4.36302L36.682 6.08369L22.7953 12.1937C22.776 12.2017 22.762 12.217 22.7427 12.2264C22.5232 12.0785 22.2646 11.9995 22 11.9997H20.6667V10.715V10.6904C20.9473 9.75102 26.4893 5.58235 34.674 4.11835ZM22 13.333V13.4137V15.9997H18V13.333H22ZM18 17.333H22V18.6664H18V17.333ZM18 19.9997H22V31.9997H18V19.9997ZM18 33.333H22V34.6664H18V33.333ZM30.6667 1.48502V3.71169C27.3988 4.64848 24.3061 6.11361 21.5113 8.04902C22.6 5.80635 25.0787 2.75569 30.6667 1.48502ZM9.33333 1.48502C14.9173 2.75169 17.3953 5.80169 18.4867 8.04769C15.6924 6.11287 12.6005 4.64819 9.33333 3.71169V1.48502ZM4.696 4.36302C4.84664 4.174 5.08727 4.08055 5.326 4.11835C13.496 5.57969 19.0313 9.73569 19.326 10.647L19.336 10.7137V11.9997H18C17.7354 11.9995 17.4768 12.0785 17.2573 12.2264C17.238 12.217 17.2233 12.2017 17.204 12.193L3.318 6.08369L4.696 4.36302ZM1.33333 31.877V6.66635L16.6667 13.413V38.6237L1.33333 31.877ZM18 38.6664V35.9997H22V38.6664H18ZM23.3333 38.6237V13.4137L38.6667 6.66635V31.877L23.3333 38.6237Z"
                    fill="black"
                  />
                  <path
                    d="M37.0243 11.4371C36.8316 11.3146 36.5896 11.2992 36.383 11.3964L25.0497 16.7297C24.816 16.8397 24.6669 17.0748 24.667 17.3331V23.9997C24.6669 24.228 24.7837 24.4405 24.9764 24.5628C25.1692 24.6851 25.4111 24.7003 25.6177 24.6031L36.951 19.2697C37.1846 19.1597 37.3337 18.9246 37.3337 18.6664V11.9997C37.3336 11.7716 37.2169 11.5593 37.0243 11.4371ZM36.0003 18.2431L26.0003 22.9491V17.7564L36.0003 13.0504V18.2431Z"
                    fill="black"
                  />
                  <path
                    d="M14.951 16.7328L3.61766 11.3995C3.41166 11.3025 3.17039 11.3173 2.97783 11.4388C2.78528 11.5604 2.66807 11.7718 2.66699 11.9995V18.6661C2.66692 18.9244 2.81601 19.1594 3.04966 19.2695L14.383 24.6028C14.4719 24.6444 14.5688 24.666 14.667 24.6661C15.0352 24.6661 15.3337 24.3677 15.3337 23.9995V17.3328C15.3324 17.0757 15.1836 16.8423 14.951 16.7328ZM14.0003 22.9488L4.00033 18.2428V13.0501L14.0003 17.7561V22.9488Z"
                    fill="black"
                  />
                  <path
                    d="M14.9502 26.7328L3.61686 21.3994C3.40131 21.298 3.148 21.3192 2.95235 21.4552C2.75671 21.5911 2.64845 21.8211 2.66835 22.0585C2.68826 22.2959 2.83331 22.5046 3.04886 22.6061L14.3822 27.9394C14.7154 28.0963 15.1127 27.9533 15.2695 27.6201C15.4264 27.2869 15.2834 26.8896 14.9502 26.7328Z"
                    fill="black"
                  />
                  <path
                    d="M13.5995 29.4286L4.96286 25.3619C4.746 25.2539 4.48764 25.2721 4.28801 25.4093C4.08838 25.5465 3.97892 25.7813 4.00209 26.0224C4.02526 26.2636 4.17742 26.4732 4.39953 26.5699L13.0355 30.6366C13.2518 30.7438 13.5091 30.7257 13.7083 30.5894C13.9074 30.453 14.0173 30.2196 13.9956 29.9793C13.9739 29.7389 13.8239 29.529 13.6035 29.4306L13.5995 29.4286Z"
                    fill="black"
                  />
                  <path
                    d="M36.3822 21.3996L25.0489 26.7329C24.8333 26.8344 24.6883 27.0431 24.6684 27.2805C24.6484 27.518 24.7567 27.7479 24.9524 27.8839C25.148 28.0198 25.4013 28.0411 25.6169 27.9396L36.9502 22.6063C37.2834 22.4494 37.4264 22.0521 37.2695 21.7189C37.1127 21.3857 36.7154 21.2427 36.3822 21.3996Z"
                    fill="black"
                  />
                  <path
                    d="M35.0347 25.3639L26.4 29.4285C26.0748 29.5898 25.9383 29.9815 26.093 30.3099C26.2476 30.6383 26.6366 30.7826 26.968 30.6345L35.604 26.5679C35.8265 26.4709 35.9788 26.2606 36.0015 26.0189C36.0241 25.7772 35.9136 25.5423 35.713 25.4057C35.5123 25.269 35.2533 25.2523 35.0367 25.3619L35.0347 25.3639Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_183_2021">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-2xl mx-3 font-semibold">Issue Books</h1>
            </div>
          </div>
          <div className="flex flex-col  ">
            <div className=" my-4">
              <p className="text-[#369FFF]">
                Selected Class:{" "}
                <span className="text-[#FF3636]">
                  Pre-Kindergarten - B , Grade 1 - A
                </span>
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={form.onSubmit((values) => console.log(values))}
              className="space-y-4"
            >
              <Select
                label="Books"
                placeholder="Select Book"
                data={["Book 1", "Book 2", "Book 3"]}
                required
                {...form.getInputProps("book")}
              />

              {/* Radio Buttons */}
              <Radio.Group
                label=" "
                value={scheduleType}
                onChange={setScheduleType}
                className="flex items-center "
              >
                <div className="inline-flex items-center my-3 gap-[100px]">
                  <Radio value="now" label="Schedule Now" />
                  <Radio value="schedule" label="Schedule Later" />
                </div>
              </Radio.Group>

              {scheduleType === "schedule" && (
                <>
                  <label className="text-black font-semibold mt-3">
                    Schedule Date & Time *
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="date"
                      className="input-class border"
                      {...form.getInputProps("scheduleDate")}
                    />
                    <input
                      type="time"
                      className="input-class border"
                      {...form.getInputProps("scheduleTime")}
                    />
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  color="gray"
                  onClick={() => setOpened(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" color="indigo">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookIssue;
