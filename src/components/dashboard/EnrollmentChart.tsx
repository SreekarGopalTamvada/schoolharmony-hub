import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { grade: "9th", students: 245 },
  { grade: "10th", students: 238 },
  { grade: "11th", students: 220 },
  { grade: "12th", students: 195 },
];

export function EnrollmentChart() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Students by Grade</h3>
          <p className="text-sm text-muted-foreground">Current enrollment distribution</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" vertical={false} />
            <XAxis 
              dataKey="grade" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(215, 15%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(215, 15%, 45%)', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(214, 20%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px hsl(215 25% 15% / 0.08)'
              }}
              formatter={(value: number) => [value, 'Students']}
            />
            <Bar 
              dataKey="students" 
              fill="hsl(38, 92%, 50%)" 
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
