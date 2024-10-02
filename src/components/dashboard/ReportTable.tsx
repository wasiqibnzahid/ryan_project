import React from "react";
import { AppTable } from "@/components/common/AppTable";
import { useReports } from "@/hooks";
import { createColumnHelper } from "@tanstack/react-table";
import { Report } from "@/types";
import { Button } from "../ui/button";
import { formatDate } from "@/utils";
const columnHelper = createColumnHelper<Report>();
const columns = [
  columnHelper.accessor("name", {
    cell(props) {
      return (
        <div className="font-semibold border-solid border-b-[#919191] text-nowrap border-b-[1px]">
          {props.getValue()}
        </div>
      );
    },
  }),
  columnHelper.accessor("description", {
    cell(props) {
      return <div className="text-muted">{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("category", {
    cell: ({ getValue }) => (
      <Button className="bg-accent-light rounded-[30px] hover:bg-accent-light cursor-default bg-opacity-10 text-accent-foreground">
        {getValue()}
      </Button>
    ),
  }),
  columnHelper.accessor("modified", {
    cell: ({ getValue }) => <>{formatDate(getValue())}</>,
  }),
];

export const ReportTable = () => {
  const { reports } = useReports();
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-accent-foreground">Reports</h2>
        <div className="flex justify-end items-center gap-2">
          <span>All Reports</span>
          <Button className="bg-[#1694cc] px-1.5 py-0 h-6" >&rarr;</Button>
        </div>
      </div>
      <hr className="bg-gradient-to-r from-cyan-400 to-primary opacity-20 h-1 my-5" />
      <AppTable data={reports} columns={columns} />
    </div>
  );
};
