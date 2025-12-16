import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Filter } from "lucide-react";

const attendanceData = [
  { id: 1, date: "Dec 16, 2025", present: 856, absent: 42, rate: 95.3 },
  { id: 2, date: "Dec 15, 2025", present: 842, absent: 56, rate: 93.8 },
  { id: 3, date: "Dec 14, 2025", present: 868, absent: 30, rate: 96.7 },
  { id: 4, date: "Dec 13, 2025", present: 821, absent: 77, rate: 91.4 },
  { id: 5, date: "Dec 12, 2025", present: 834, absent: 64, rate: 92.9 },
];

const Attendance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
            <p className="text-muted-foreground mt-1">Track and manage student attendance records</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
            <p className="text-4xl font-bold text-primary">92%</p>
            <p className="text-sm text-muted-foreground mt-1">Weekly Average</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
            <p className="text-4xl font-bold text-success">856</p>
            <p className="text-sm text-muted-foreground mt-1">Present Today</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
            <p className="text-4xl font-bold text-warning">42</p>
            <p className="text-sm text-muted-foreground mt-1">Absent Today</p>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-card rounded-xl shadow-sm border border-border animate-slide-up">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Daily Attendance Log</h3>
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Select Date Range
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Present</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Absent</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Rate</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr 
                    key={record.id} 
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors animate-slide-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="py-4 px-6 font-medium text-foreground">{record.date}</td>
                    <td className="py-4 px-6">
                      <span className="text-success font-medium">{record.present}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-destructive font-medium">{record.absent}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${record.rate}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{record.rate}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Button variant="outline" size="sm">View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Attendance;
