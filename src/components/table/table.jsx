import { useState } from "react";
import { Table, Checkbox } from "@mantine/core";
import { dashboardTableHeader } from "../../lib/utils";
import { dashboardTableBody } from "../../lib/utils"; // Import the data

function DataTable({ color }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const rows = dashboardTableBody.map((data, index) => (
    <tr
      key={index}
      className={`${
        selectedRows.includes(index) ? "bg-blue-100" : ""
      } text-center h-16 border`}
    >
      <td className="px-4 py-1">
        {" "}
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(index)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, index]
                : selectedRows.filter((i) => i !== index)
            )
          }
        />
      </td>
      <td className="px-4 py-2">{data.schoolName}</td>
      <td className="px-4 py-2">{data.city}</td>
      <td className="px-4 py-2">{data.address}</td>
      <td className="px-4 py-2">{data.totalTeacher}</td>
      <td className="px-4 py-2">{data.totalStudent}</td>
      <td className="px-4 py-2">{data.status}</td>
      <td className="px-4 py-2">{data.viewProfile}</td>
    </tr>
  ));

  return (
    <Table
      className={`${
        color === "white" ? "bg-white" : ""
      } w-[1131px] mx-auto h-[562px] rounded-xl`}
      // withRowBorders={true}
    >
      <thead>
        <tr className="h-12 bg-[#ffff]">
          <th />
          {dashboardTableHeader.map((header) => (
            <th
              key={header}
              className="text-[#202224] text-sm font-medium font-Switzer px-4 py-2"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default DataTable;
