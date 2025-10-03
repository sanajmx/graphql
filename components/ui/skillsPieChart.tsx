"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
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

export const description = "A pie chart showing skill distribution"

interface ChartPieValues {
  data: Array<{ skill: string; level: number }>
}

const generateChartConfig = (data: Array<{ skill: string; level: number }>) => {
  const config: ChartConfig = {
    level: {
      label: "Level",
    },
  }
  



  const chartColors = [
  "#FCE7F3", // pink-100 (soft baby pink)
  "#F9A8D4", // pink-300 (bubblegum pink)
  "#F472B6", // pink-400 (bright candy pink)
  "#EC4899", // pink-500 (Barbie pink)
  "#DB2777", // pink-600 (deep pink)
  "#BE185D", // pink-700 (bold magenta)
  "#9D174D", // pink-800 (dark fuchsia)
  "#831843", // pink-900 (deep rose)
  "#FBCFE8", // pink-200 (pastel cotton candy pink)
]

  
  data.forEach((item, index) => {
    config[item.skill] = {
      label: item.skill.charAt(0).toUpperCase() + item.skill.slice(1),
      color: chartColors[index % chartColors.length],
    }
  })
  
  return config
}

export function SkillsPieChart({ data }: ChartPieValues) {
  const chartConfig = generateChartConfig(data)
  
  const chartData = data.map((item, _) => ({
    ...item,
    fill: `var(--color-${item.skill})`,
  }))

  return (
    <Card className="flex flex-col border-0 shadow-none bg-transparent">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-gray-900">Skills Distribution</CardTitle>
        <CardDescription className="text-gray-500">Your skill levels breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
           <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="bg-white text-gray-900 border border-gray-200 shadow-lg rounded-md" />}
            />
            <Pie
              data={chartData}
              dataKey="level"
              nameKey="skill"
              stroke="0"
            />
          </PieChart>          
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium text-gray-900">
          Skills Development Progress <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-gray-500 leading-none">
          Based on your transaction data
        </div>
      </CardFooter>
      
    </Card>
  
  )
}