import { Doughnut } from "../charts/Doughnut";

import { ReportTable } from "./ReportTable";
import { ProgramTable } from "./ProgramTable";
import { DocumentTable } from "./DocumentTable";

export default function Insights() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <ReportTable />
        <ProgramTable />
        <DocumentTable />
      </div>
      <div>
        <Doughnut />
      </div>
    </div>
  );
}
