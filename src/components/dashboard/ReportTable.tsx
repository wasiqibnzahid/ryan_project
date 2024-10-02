import React from "react";
import { AppTable } from "@/components/common/AppTable";
import { useReports } from "@/hooks";
import { createColumnHelper } from "@tanstack/react-table";
import { Report } from "@/types";
const columnHelper = createColumnHelper<Report>();
const columns = [
  columnHelper.accessor("name", {
    header: () => "Name", // To capitalize
  }),
  columnHelper.accessor("description", {}),
  columnHelper.accessor("category", {}),
  columnHelper.accessor("modified", {
    cell: ({ getValue }) => <div>ASDASD {getValue()}</div>, // Will be used for formatting later on
  }),
];

export const ReportTable = () => {
  const { reports } = useReports();
  return <AppTable data={reports} columns={columns} />;
};
