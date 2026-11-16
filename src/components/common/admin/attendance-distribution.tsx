"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import {
  PieChart,
  Pie,
  Cell,
} from "recharts";

const attendanceData = [
  { status: "Present", count: 105, fill: "#16A34A" },
  { status: "Absent", count: 12, fill: "#EF4444" },
  { status: "Late", count: 6, fill: "#F59E0B" },
  { status: "Half Day", count: 5, fill: "#8B5CF6" },
];

const chartConfig = {
  count: {
    label: "Employees",
  },
  present: {
    label: "Present",
    color: "#16A34A",
  },
  absent: {
    label: "Absent",
    color: "#EF4444",
  },
  late: {
    label: "Late",
    color: "#F59E0B",
  },
  halfDay: {
    label: "Half Day",
    color: "#8B5CF6",
  },
} satisfies ChartConfig;

const AttendanceDistribution = () => {
  const totalEmployees = attendanceData.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle>Attendance Distribution</CardTitle>
        <CardDescription>
          Today's employee attendance breakdown
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative">
          <ChartContainer
            config={chartConfig}
            className="mx-auto h-[230px] w-full"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="status" />}
              />

              <Pie
                data={attendanceData}
                dataKey="count"
                nameKey="status"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={4}
                strokeWidth={0}
              >
                {attendanceData.map((item) => (
                  <Cell
                    key={item.status}
                    fill={item.fill}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">
              {totalEmployees}
            </span>
            <span className="text-xs text-muted-foreground">
              Employees
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {attendanceData.map((item) => (
            <div
              key={item.status}
              className="flex items-center gap-2"
            >
              <div
                className="size-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />

              <div className="flex flex-1 items-center justify-between gap-2">
                <span className="text-sm text-muted-foreground">
                  {item.status}
                </span>

                <span className="text-sm font-semibold">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceDistribution;