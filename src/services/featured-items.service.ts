import { FeaturedItem } from "@/types";
import { makeApiCall } from "./make-api-call";
import { featuredItems } from "@/data";

export async function getFeaturedItemsList() {
  return makeApiCall<FeaturedItem[]>(
    {
      method: "get",
      url: "/featured-items",
    },
    featuredItems
  );
}
