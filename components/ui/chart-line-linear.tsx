"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear line chart"

export function ChartLineLinear({data}: {data: any[]}) {
    const chartConfig = {
  desktop: {
    label: "XP",
    //color: "#6B7280", // neutral gray
    color: "#FF6EC7"
  },
} satisfies ChartConfig

  return (
   <Card className="border-0 shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-gray-900">XP Progress</CardTitle>
        <CardDescription className="text-gray-500">XP earned per project</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="project"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: '#6B7280' }}
             //tick={{ fill: '#FF6EC7' }}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="bg-white text-gray-900 border border-gray-200 shadow-md rounded-md"
                />
              }
            />
                        <Line
              dataKey="xp"
              type="linear"
              //stroke="#6B7280"
              stroke="#FF6EC7"
              strokeWidth={2}
              //dot={{ fill: '#6B7280', r: 4 }}
              dot={{ fill: '#FF6EC7', r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}