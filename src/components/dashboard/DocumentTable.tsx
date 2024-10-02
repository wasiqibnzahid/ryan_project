import React from "react";
import { AppTable } from "@/components/common/AppTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Report } from "@/types";
import { useDocuments } from "@/hooks/document.";
import { formatDate } from "@/utils";
import { Button } from "../ui/button";
const columnHelper = createColumnHelper<Report>();
const columns = [
  columnHelper.accessor("name", {cell(props) {
      return <div className="font-semibold border-solid border-b-[#919191] text-nowrap border-b-[1px]">{props.getValue()}</div>
  },}),
  columnHelper.accessor("description", {
    cell(props) {
      return <div className="text-muted">{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("category", {}),
  columnHelper.accessor("modified", {
    cell: ({ getValue }) => <div> {formatDate(getValue())}</div>, // Will be used for formatting later on
  }),
];

export const DocumentTable = () => {
  const { documents } = useDocuments();
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-accent-foreground">Documents</h2>
        <div className="flex justify-end items-center gap-2">
          <span>All Documents</span>
          <Button className="bg-[#1694cc] px-1.5 py-0 h-6" >&rarr;</Button>
        </div>
      </div>
      <hr className="bg-gradient-to-r from-cyan-400 to-primary opacity-20 h-1 my-5" />
      <AppTable data={documents} columns={columns} />;
    </>
  );
};
