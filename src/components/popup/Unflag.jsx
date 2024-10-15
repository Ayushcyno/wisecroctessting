import { Modal, Button, Text, Group } from '@mantine/core';
import { useState } from 'react';
import "./popup.css"
const UnflagModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={() => setOpened(true)} className="bg-red-500 hover:bg-red-600">
        Open Unflag Modal
      </Button>

      {/* Modal Component */}
      <Modal
      className='light-popup  '
        opened={opened}
        onClose={() => setOpened(false)}
      
        centered

        classNames={{
         

          close: 'hover:bg-red-500  focus:bg-red-500 text-white bg-[#DF4744] rounded-full '
        }}
        size="lg"
      >
        <div className="flex flex-col items-center ">

        <div className="text-center">
        <div className="flex items-center text-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M6 0.666748H8.66667V38.0001C8.66667 38.7364 8.06966 39.3334 7.33333 39.3334C6.59701 39.3334 6 38.7364 6 38.0001V0.666748Z" fill="#7D4739"/>
  <path d="M19.5635 7.72534L14.4365 2.94149C12.8711 1.47957 10.8086 0.666748 8.66667 0.666748H6V19.3334H8.66667C10.8086 19.3334 12.8711 20.1462 14.4365 21.6082L14.5941 21.7546C16.4271 23.4652 18.9245 24.2745 21.4124 23.9636C23.9004 23.6531 26.1221 22.2543 27.4779 20.1453L34 10.0001H25.3333C23.1914 10.0001 21.1292 9.18725 19.5635 7.72534Z" fill="#FD7693"/>
  <path d="M5.3335 0.666674V38C5.3335 39.1045 6.229 40 7.3335 40C8.43799 40 9.3335 39.1045 9.3335 38V20.0313C11.0715 20.1781 12.7091 20.9059 13.9823 22.098L14.1395 22.2448C15.825 23.8219 18.0477 24.6992 20.3563 24.6986C20.7371 24.6986 21.1177 24.6751 21.4956 24.6279C24.1805 24.2959 26.5786 22.7861 28.0389 20.5088L34.5607 10.3633C34.6942 10.1582 34.7046 9.89616 34.5874 9.68132C34.4705 9.46615 34.2449 9.33269 34.0002 9.33334H25.3335C23.3599 9.33594 21.4591 8.58659 20.0181 7.23796L14.8914 2.45411C13.2039 0.874356 10.9784 -0.00292237 8.66683 7.31418e-06H6.00016C5.632 7.31418e-06 5.3335 0.29851 5.3335 0.666674ZM9.3335 1.36459C11.0715 1.5114 12.7091 2.23926 13.9823 3.43132L19.1089 8.2155C20.7967 9.79395 23.0223 10.6706 25.3335 10.6667H32.7788L26.9168 19.7848C25.6681 21.7275 23.6219 23.016 21.3302 23.3021C19.0389 23.5885 16.7384 22.8431 15.0503 21.2673L14.8921 21.1208C13.3716 19.7002 11.4093 18.8451 9.3335 18.6979V1.36459ZM6.66683 1.33334H8.00016V18.6667H6.66683V1.33334ZM6.66683 20H8.00016V38C8.00016 38.3682 7.70166 38.6667 7.3335 38.6667C6.96533 38.6667 6.66683 38.3682 6.66683 38V20Z" fill="black"/>
</svg>
            <span className="text-[20px] font-semibold text-center">Unflag File</span>
          </div>
          </div>
        <div className="">
          <Text className="text-[20px] font-bold mb-4">
            Are you sure you want to Unflag this file?
          </Text>

          {/* File details */}
          <div className="space-y-2 text-[16px] mb-6 w-[80%] m-auto " >
            <p className="text-gray-600">
              <span className="font-bold">File Name: </span>
              <span className="text-[#FD7693]"> “Sample paper for practice”</span>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Subject: </span>
              <span className="text-[#FD7693]"> “English”</span>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">By: </span>
              <span className="text-[#FD7693]"> “Sam”</span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="gap-10 flex justify-center ">
            <Button
           
              color="gray"
              className="px-8 text-[16px] py-2 rounded-lg cancel-btn"
              onClick={() => setOpened(false)}
            >
              Cancel
            </Button>
            <Button
              color="pink"
              className="px-8 text-[16px] py-2 rounded-lg action-btn"
              onClick={() => {
        
                setOpened(false);
              }}
            >
              Unflag
            </Button>
          </div>
        </div>
        </div>
      </Modal>
    </>
  );
};

export default UnflagModal;
