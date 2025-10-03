"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { TrendingUp } from "lucide-react"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive area chart"

interface ProgressChartData {
  name: string
  grade: number
  type?: string
}

const chartConfig = {
  grade: {
    label: "Grade",
    //color: "#6B7280", // neutral gray
    color: "#FF6EC7",
  },
} satisfies ChartConfig

export function ChartAreaInteractive({ data }: { data: ProgressChartData[] }) {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-gray-900">Progress Overview</CardTitle>
        <CardDescription className="text-gray-500">Your grades across projects</CardDescription>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillGrade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6EC7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF6EC7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={16}
              tick={{ fill: '#6B7280' }}
            />

            <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="dot"
                labelFormatter={(value) => `${value}`}
                className="bg-white text-gray-900 border border-gray-200 shadow-md rounded-md"
              />
            }
          />


            <Area
              dataKey="grade"
              type="natural"
              fill="url(#fillGrade)"
              stroke="#FF6EC7"
              strokeWidth={2}
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
       <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total progress made!
        </div>
      </CardFooter>
    </Card>
  )
}