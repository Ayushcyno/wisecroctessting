import React from "react";
import { Button, Select } from "@mantine/core";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

function TablePagination({ table, totalPages, currentPage, onPageChange }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex-1 text-sm text-gray-500 hidden md:block">
        {/* Showing {table.getRowModel().rows.length} of{" "} */}
        {/* {table.getFilteredRowModel().rows.length} row(s). */}
      </div>
      <div className="flex items-center space-x-2  w-full justify-end">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium hidden md:block">Rows per page</p>
          {/* <Select
            value={`${table.getState().pagination.pageSize}`}
            onChange={(event) => {
              table.setPageSize(Number(event.currentTarget.value));
            }}
            className="h-8 w-[70px]"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select> */}
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TablePagination;
