import { Button } from "@mantine/core";
import { Search, Filter } from "lucide-react";

export default function LibraryCard({type}) {
  const books = [
    {
      title: "Pluto and the Planets",
      author: "Uncle Sam",
      subject: "English",
      coins: 20,
      image: "../Images/student/dashboard/Plutoandtheplanets.png",
    },
    {
      title: "Seasons Around the World",
      author: "Uncle Sam",
      subject: "English",
      coins: 30,
      image: "../Images/student/dashboard/seasonsAroundtheworld1.png",
    },
    {
      title: "The Smart Friends",
      author: "Uncle Sam",
      subject: "English",
      coins: 30,
      image: "../Images/student/dashboard/Thesevenfriends1.png",
    },
    {
      title: "Seasons Around the World",
      author: "Uncle Sam",
      subject: "English",
      coins: 30,
      image: "../Images/student/dashboard/seasonsAroundtheworld1.png",
    },
    {
      title: "The Smart Friends",
      author: "Uncle Sam",
      subject: "English",
      coins: 30,
      image: "../Images/student/dashboard/Thesevenfriends1.png",
    },
  ];

  return (
    <div className="1024p:w-[790px] max-w-4xl bg-white rounded-3xl mt-4 p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-[#303030] text-2xl font-bold font-Switzer tracking-tight">
        {type}
        </h2>
        <Button
          justify="center"
          leftSection={<Filter size={20} className="mr-2" />}
          rightSection={<Filter size={20} className="mr-2" />}
          variant="default"
        >
          Filters
        </Button>
      </div>

      <div className="flex items-center mb-4">
        <div className="relative flex-grow">
          {/* Uncomment and customize your input component if needed */}
          {/* <Input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          /> */}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-around">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <img
                src={book.image}
                alt={book.title}
                className="w-[89px] h-[90px] object-cover rounded-md shadow-md mb-2"
              />
              <h3 className="text-center text-[#434c56] text-base font-semibold font-Switzer">
                {book.title}
              </h3>
              <img
                src="../Images/student/dashboard/coins.png"
                alt="Coin"
                className="w-3.5 h-3.5"
              />
              <span className="text-center text-[#434c56] text-sm font-normal font-Switzer">
                {book.coins} coins
              </span>
              <p className="text-center text-[#8c95a7] text-sm font-normal font-Switzer">
                Subject : {book.subject}
              </p>
              <p className="text-center text-[#8c95a7] text-xs font-normal font-Switzer text-nowrap">
                Allocated By: {book.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
