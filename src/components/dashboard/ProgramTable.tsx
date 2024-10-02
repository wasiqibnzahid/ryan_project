import { AppTable } from "@/components/common/AppTable";
import { usePrograms } from "@/hooks";
import { createColumnHelper } from "@tanstack/react-table";
import { Program, Report } from "@/types";
const columnHelper = createColumnHelper<Program>();
const columns = [
  //   columnHelper.accessor("id", {}),
  columnHelper.accessor("name", {
    header: () => "Name", // To capitalize
  }),
  columnHelper.accessor("status", {}),
  columnHelper.accessor("launch_date", {}),
  columnHelper.accessor("percent", {
    cell: ({ getValue }) => <div> {getValue()}</div>, // Will be used for formatting later on
  }),
];

export const ProgramTable = () => {
  const { programs } = usePrograms();
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold ">Programs</h2>
        <span>
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          {"  "}
          All Programs
        </span>
      </div>
      <hr className="bg-gradient-to-r from-cyan-400 to-primary opacity-20 h-1 my-5" />
      <AppTable data={programs} columns={columns} />;
    </>
  );
};
