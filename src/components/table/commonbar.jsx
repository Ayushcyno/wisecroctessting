import { useState } from "react";
import { TextInput, Button, Modal, Tooltip } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import FilterSidebar from "./Filtersidebar";
// import { IconButton } from "@mui/material"; // Assuming IconButton is from MUI
// import Iconify from '../../../components/iconify'; // Ensure Iconify path is correct

export default function CommonBar({
  numSelected,
  filterName,
  onFilterName,
  rowsPerPage,
  setRowsPerPage,
  setUSERLIST,
  setTotalUsers,
  handleChangePage,
  setPageAfterFilter,
  setPage,
  page,
  heading,
}) {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center relative left-[5%] gap-2">
        <span className=" text-[#202224] text-2xl font-bold font-Switzer leading-tight">
          {heading}
        </span>
        <span className="text-[#7257c5] text-xs font-medium font-Switzer relative top-[4%]">
          Add School
        </span>
      </div>
      <div className="flex items-center   h-24 px-3">
        {numSelected > 0 ? (
          <span className="text-primary font-semibold">
            {numSelected} selected
          </span>
        ) : (
          <div className="relative flex items-center w-60">
            <TextInput
              value={filterName}
              onChange={onFilterName}
              placeholder="Search user..."
              classNames={{
                input:
                  "w-full h-8 bg-[#fafafb] rounded-full border border-[#ebecee] pl-10 pr-4",
              }}
            />
            <CiSearch className="absolute left-3 text-gray-500" size={20} />
          </div>
        )}

        {numSelected > 0 ? (
          <Tooltip label="Delete" position="top">
            {/* <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton> */}
          </Tooltip>
        ) : (
          <FilterSidebar
          //   setUSERLIST={setUSERLIST}
          //   rowsPerPage={rowsPerPage}
          //   setRowsPerPage={setRowsPerPage}
          //   openFilter={openFilter}
          //   onOpenFilter={handleOpenFilter}
          //   onCloseFilter={handleCloseFilter}
          //   setTotalUsers={setTotalUsers}
          //   handleChangePage={handleChangePage}
          //   setPageAfterFilter={setPageAfterFilter}
          //   setPage={setPage}
          //   page={page}
          />
        )}
      </div>
    </div>
  );
}
