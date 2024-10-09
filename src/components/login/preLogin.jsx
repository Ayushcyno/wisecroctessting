import React, { useState } from "react";

import { IconCheck } from "@tabler/icons-react";

function PreLogin() {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = [
    { id: 'student', label: "I'm a Student" },
    { id: 'teacher', label: "I'm a Teacher" }
  ];

  return (
    <div className="bg-gradient-to-b from-[#A990F5] to-[#493096] h-screen flex justify-center items-center px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-5 md:gap-[154px] items-center ">
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-full w-[350px] h-[350px] xl:w-[474px] xl:h-[468px] ">
            <img src="/Images/login/prelogin.png"  alt="prelogin" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 w-auto md:w-[500px]  xl:w-[562px] h-auto xl:h-[574px] rounded-[40px]">
          <div className="my-6 md:my-10 text-center md:text-left">
            <div className="text-[20px]">Welcome to School Name</div>
            <div className="text-[36px] md:text-[48px] font-bold">Sign in as</div>
          </div>
          <div className="flex flex-col items-center space-y-6 md:space-y-10">
            {buttons.map(({ id, label }) => (
              <button
                key={id}
                className={`relative w-full max-w-[280px] md:max-w-[338px] px-5 h-[60px] md:h-[70px] bg-[#6BC6F3] rounded-full transition duration-300 ${activeButton === id ? 'shadow-lg' : ''}`}
                onClick={() => setActiveButton(id)}
              >
                <div className="flex items-center w-full">
                  <span className="text-white text-[16px] md:text-[18px] font-medium m-auto">{label}</span>
                  {activeButton === id && (
                    <span className="absolute right-2 flex items-center justify-center w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#FD7693] rounded-full">
                      <IconCheck className="text-white" />
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLogin;
