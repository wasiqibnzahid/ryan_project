import { Document } from "@/types";
import { makeApiCall } from "./make-api-call";
import { documentItems } from "@/data";

export async function getDocuments() {
  return makeApiCall<Document[]>(
    {
      method: "get",
      url: "/documents",
    },
    documentItems
  );
}
