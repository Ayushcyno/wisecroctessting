import { Modal, Button, Text, Group } from "@mantine/core";
import { useState } from "react";
import "./popup.css";
import { useForm } from "@mantine/form";
const CreateAssignment = () => {
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      assignmentTitle: "",
      assignmentDescription: "",
      scheduleDate: "",
      scheduleTime: "",
      submissionDate: "",
      submissionTime: "",
      sendNow: false,
      schedule: true,
    },
  });
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);  // Update state with the selected file name
    }
  };
  return (
    <>
      {/* Button to open the modal */}
      <Button
        onClick={() => setOpened(true)}
        className="bg-red-500 hover:bg-red-600"
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
        }}
        size="xl"
      >
        <div className="flex flex-col items-center ">
    
          <div className="w-full mx-auto px-6 bg-white rounded-md">
      <h2 className="text-xl font-bold text-center mb-4">Create Assignment</h2>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Selected Class: <span className="text-red-500">Grade 1 - A</span></label>
      </div>

      <form>
        {/* Assignment Title */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Assignment Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Assignment Title"
            {...form.getInputProps('assignmentTitle')}
       
          />
        </div>

        {/* Upload File */}
        <div className="mb-4">
  <label className="block font-medium text-gray-700">Upload File</label>
  <div className="flex items-center">
    {/* Hidden File Input */}
    <input
      id="file-upload"
      type="file"
      className="hidden"
      {...form.getInputProps('uploadFile')}
      onChange={handleFileChange}
    />

    {/* Custom Styled Label as Upload Button */}
    <label
      htmlFor="file-upload"
      className="w-full border rounded-l-md p-2 text-gray-500 bg-white cursor-pointer"
    >
   {fileName || 'Upload file'} {/* Show file name or placeholder */}
    </label>

    {/* Styled Button on the Right */}
    <label
      htmlFor="file-upload"
      className="bg-gray-400  w-[35%] text-white p-2 rounded-r-md cursor-pointer"
    >
      Upload File
    </label>
  </div>
</div>


        {/* Assignment Description */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Assignment Description</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="4"
            placeholder="Write assignment description here"
            {...form.getInputProps('assignmentDescription')}
          />
        </div>

        {/* Radio Buttons for Send Now or Schedule */}
        <div className="mb-4">
          {/* <label className="block font-medium text-gray-700">Send:</label> */}
          <div className="flex items-center gap-20">
            <label className="">
              <input
                type="radio"
                className="mr-2"
                {...form.getInputProps('sendNow', { type: 'radio' })}
                value={true}
              />
              Send Now
            </label>
            <label>
              <input
                type="radio"
                className="mr-2"
                {...form.getInputProps('schedule', { type: 'radio' })}
                value={true}
                checked
              />
              Schedule
            </label>
          </div>
        </div>

        {/* Schedule Date and Time */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Schedule Date & Time</label>
          <div className="flex space-x-10">
            <input
              type="date"
              className="p-2 border rounded-md"
              {...form.getInputProps('scheduleDate')}
            />
            <input
              type="time"
              className="p-2 border rounded-md"
              {...form.getInputProps('scheduleTime')}
            />
          </div>
        </div>

        {/* Last Submission Date and Time */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Last Submission Date & Time</label>
          <div className="flex space-x-10">
            <input
              type="date"
              className="p-2 border rounded-md"
              {...form.getInputProps('submissionDate')}
            />
            <input
              type="time"
              className="p-2 border rounded-md"
              {...form.getInputProps('submissionTime')}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-20 mt-6">
          <button
            type="button"
       className="px-8 text-[16px] py-2 rounded-lg cancel-btn"
          >
            Cancel
          </button>
          <button
            type="submit"
              className="px-8 text-[16px] py-2 rounded-lg action-btn-blue"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateAssignment;
