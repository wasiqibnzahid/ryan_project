import { useFeaturedItems } from "@/hooks";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useState } from "react";

export default function Featured() {
  const { featuredItems } = useFeaturedItems();

  return (
    <div className="w-min-[100%] my-10">
      <h2 className="text-2xl font-bold text-accent-foreground">Featured</h2>
      <hr className="bg-gradient-to-r from-cyan-400 to-primary opacity-20 h-1 my-3" />
      <div className="grid grid-cols-3 gap-10">
        {featuredItems &&
          featuredItems.map((featuredItem, index) => (
            <Card key={index}>
              <CardHeader className="font-bold text-2xl">
                {featuredItem.name}
              </CardHeader>
              <CardContent>
                <p className="text-xs">{featuredItem.description}</p>
              </CardContent>
              <CardFooter className="w-[100%]">
                <Button size="default" className="w-[100%] mt-10 rounded-full">
                  {" "}
                  View Report
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
