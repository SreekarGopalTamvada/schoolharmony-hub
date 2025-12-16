import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "Week 1", attendance: 88 },
  { name: "Week 2", attendance: 91 },
  { name: "Week 3", attendance: 89 },
  { name: "Week 4", attendance: 93 },
  { name: "Week 5", attendance: 90 },
  { name: "Week 6", attendance: 94 },
  { name: "Week 7", attendance: 92 },
  { name: "Week 8", attendance: 95 },
];

export function AttendanceChart() {
  return (
    <Card className="animate-slide-up overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold">Attendance Trends</CardTitle>
          <CardDescription>Weekly attendance rate over the past 8 weeks</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-success/10 text-success border-0 font-medium">
            <TrendingUp className="h-3 w-3 mr-1" />
            +3.2%
          </Badge>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">92%</p>
            <p className="text-xs text-muted-foreground">Current Average</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                domain={[80, 100]} 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px -10px hsl(var(--foreground) / 0.1)'
                }}
                formatter={(value: number) => [`${value}%`, 'Attendance Rate']}
                labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
              />
              <Area
                type="monotone"
                dataKey="attendance"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                fill="url(#attendanceGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
