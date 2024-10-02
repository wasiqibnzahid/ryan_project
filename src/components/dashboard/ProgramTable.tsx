import { AppTable } from "@/components/common/AppTable";
import { usePrograms } from "@/hooks";
import { createColumnHelper } from "@tanstack/react-table";
import { Program } from "@/types";
import { formatDate } from "@/utils";
import { Button } from "../ui/button";
const columnHelper = createColumnHelper<Program>();
const columns = [
  //   columnHelper.accessor("id", {}),
  columnHelper.accessor("name", {
    cell({ getValue }) {
      return <div className="font-semibold">{getValue()}</div>;
    },
  }),
  columnHelper.accessor("status", {
    cell(props) {
      return (
        <div className="text-[#634d00] font-semibold flex justify-center gap-2 items-center">
          <div className="h-2 w-2 bg-[#ffdc62] rounded-full"></div>
          {props.getValue()}
        </div>
      );
    },
  }),
  columnHelper.accessor("launch date", {
    cell: ({ getValue }) => <>{formatDate(getValue())}</>,
  }),
  columnHelper.accessor("percent", {
    cell: ({ getValue }) => <div> {getValue()}</div>, // Will be used for formatting later on
  }),
];

export const ProgramTable = () => {
  const { programs } = usePrograms();
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-accent-foreground">Programs</h2>
        <div className="flex justify-end items-center gap-2">
          <span>All Programs</span>
          <Button className="bg-[#1694cc] px-1.5 py-0 h-6">&rarr;</Button>
        </div>
      </div>
      <hr className="bg-gradient-to-r from-cyan-400 to-primary opacity-20 h-1 my-5" />
      <AppTable data={programs} columns={columns} />
    </div>
  );
};
