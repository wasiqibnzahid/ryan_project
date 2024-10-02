import { useFeaturedItems } from "@/hooks";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useState } from "react";

export default function Featured() {
  const { featuredItems } = useFeaturedItems();
  const [noOfItems, setNoOfItems] = useState(3);

  const ShowMore = () => {
    setNoOfItems((prev) => prev + 3);
  };
  return (
    <div className="w-min-[100%] my-10">
      <h2 className="text-2xl font-bold ">Feature</h2>
      <hr className="bg-gradient-to-r from-cyan-400 to-primary opacity-20 h-1 my-3" />
      <div className="grid grid-cols-3 gap-10">
        {featuredItems &&
          featuredItems.map(
            (featuredItem, index) =>
              index < noOfItems && (
                <Card key={index}>
                  <CardHeader className="font-bold text-2xl">
                    {featuredItem.name}
                  </CardHeader>
                  <CardContent>{featuredItem.description}</CardContent>
                  <CardFooter className="w-[100%]">
                    <Button
                      size="default"
                      className="w-[100%] mt-10 rounded-full"
                    >
                      {" "}
                      View Report
                    </Button>
                  </CardFooter>
                </Card>
              )
          )}
      </div>
      {featuredItems.length > noOfItems && (
        <Button className="m-auto block my-9" onClick={ShowMore}>
          Show more
        </Button>
      )}
    </div>
  );
}
