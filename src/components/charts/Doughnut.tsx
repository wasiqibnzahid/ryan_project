import React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { duration: "total_time", value: 12, fill: "#7a13ff" },
  {
    duration: "consumed_time",
    value: 3,
    fill: "rgb(170 229 255)",
  },
];

const chartConfig: Record<string, { label: string; color: string }> = {
  consumed_time: {
    label: "Contract Duration",
    color: "hsl(var(--chart-1))",
  },
  total_time: {
    label: "Total Time",
    color: "#7a13ff",
  },
} satisfies ChartConfig;

export const Doughnut: React.FC = () => {
  return (
    <Card className="pb-10">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="duration"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="bg-red-500"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        100%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Complete
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col w-[80%] m-auto border-b-[#ccc] border-2 border-solid border-transparent pb-2 mb-2">
        {chartData.map((x) => (
          <div className="flex justify-between capitalize">
            <span className="text-black opacity-70">
              {chartConfig[x.duration].label}
            </span>
            <span className="font-bold">{x.value} Months</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[80%] m-auto pb-2 mb-2">
        <div className="flex justify-between capitalize">
          <span className="text-black opacity-70">
            Contracted Items to be Styled
          </span>
          <span className="font-bold">52,024</span>
        </div>
        <div className="flex justify-between capitalize">
          <span className="text-black opacity-70">Styled to Date</span>
          <span className="font-bold">52,024</span>
        </div>
        <div className="flex justify-between capitalize">
          <span className="text-black opacity-70">Remaining Items</span>
          <span className="font-bold">26,012</span>
        </div>
      </div>
    </Card>
  );
};
