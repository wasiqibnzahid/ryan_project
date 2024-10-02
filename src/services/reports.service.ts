import { Report } from "@/types";
import { makeApiCall } from "./make-api-call";
import { reportItems } from "@/data";

export async function getReports() {
  return makeApiCall<Report[]>(
    {
      method: "get",
      url: "/report-items",
    },
    reportItems
  );
}
