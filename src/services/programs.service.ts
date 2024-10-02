import { Program } from "@/types";
import { makeApiCall } from "./make-api-call";
import { programItems } from "@/data";

export async function getProgramList() {
  return makeApiCall<Program[]>(
    {
      method: "get",
      url: "/list-programs",
    },
    programItems
  );
}
