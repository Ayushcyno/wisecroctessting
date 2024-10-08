import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Text,
  Paper,
  Image,
} from "@mantine/core";

export default function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen  bg-bgGradient flex items-center justify-center ">
      <div className="flex w-full  overflow-hidden h-[560.29px] 1024p:h-[772.29px] 1024p:t-[126px] justify-around ">
        <div className="   flex-col items-center  text-center w-1/2 relative hidden md:flex 1024p:left-[95px]  1024p:w-[589px] 1024p:h-[587px] 1024p:top-[129px] ">
          <div className="absolute top-[36%] left-[45%] transform -translate-x-1/2 -translate-y-1/2  1024p:w-[589px] 1024p:h-[587px] 1024p:left[95px] w-[25rem] h-[25rem] opacity-10 bg-white rounded-full 1024p:top-[28%]"></div>
          <div className="relative z-10 top-[50px] right-[30px] 1024p:w-[313.37px] 1024p:h-[340px] 1024p:top-[0px]">
            <Image
              src="../public/Images/login/login.png"
              alt="Wise Croc Mascot"
              width={305}
              height={340}
              // fit="contain"
            />
          </div>
          <div className="relative top-[28%] w-[25rem] 1024p:top-[27%]">
            <Text
              size="xl"
              weight={700}
              className=" text-center text-white  font-normal font-alfa text-balance "
            >
              Are you ready to learn new things easily in the funniest way?
            </Text>
            <Text
              size="sm"
              color="white"
              className=" text-center text-white text-sm font-normal font-switzer mt-4"
            >
              Explore, Calculate, and Play Adventures in learning with E-Books,
              Math Challenges, and Brain Games!
            </Text>
          </div>
        </div>

        <div
          className="p-12 flex flex-col  w-[470.76px] h-[542.29px] 1024p:w-[561.76px] 1024p:h-[772.29px] 1024p:py-28 bg-white rounded-[40px] relative "
          radius={0}
        >
         

          <div className="w-[279px] h-8 text-black text-sm font-normal font-switzer">
            Welcome to Wise Croc
          </div>
          <div
            weight={700}
            className="w-[190px] h-[38px] text-[#202741] text-5xl font-normal font-alfa"
          >
            Sign in
          </div>
          <form className="justify-center h-full flex flex-col">
            <TextInput
              // className="font-switzer"
              label="Enter Student ID"
              placeholder="Student ID"
              value={studentId}
              onChange={(event) => setStudentId(event.currentTarget.value)}
              required
              styles={(theme) => ({
                label: {
                  color: "black",
                  fontSize: "16px",
                  fontFamily: "Switzer",
                  fontWeight: 400,
                  wordWrap: "break-word",
                },
                input: {
                  padding: "0.75rem",
                  borderRadius: "9px",
                  border: "1px #ADADAD solid",
                  width: "100%",
                },
              })}
            />
            <PasswordInput
              className="mt-8"
              label="Enter your Password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              required
              styles={(theme) => ({
                label: {
                  color: "black",
                  fontSize: "16px",
                  fontFamily: "Switzer",
                  fontWeight: 400,
                  wordWrap: "break-word",
                },
                input: {
                  padding: "0.75rem",
                  borderRadius: "9px",
                  border: "1px #ADADAD solid",
                  width: "100%",
                },
              })}
            />
            <Text
              size="xs"
              className="text-right text-[#FD7693] cursor-pointer hover:underline"
            >
              Forgot Password?
            </Text>
            <Button
              fullWidth
              className="bg-mainColor h-12 text-base font-semibold rounded-md w-full mt-8"
            >
              Sign in
            </Button>
          </form>
          </div>
        </div>
      </div>
    
  );
}
