import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Users, GraduationCap, TrendingUp, CalendarDays } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening at Lincoln High School today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value="898"
            change="+12 this month"
            changeType="positive"
            icon={Users}
            iconColor="primary"
          />
          <StatCard
            title="Total Teachers"
            value="64"
            change="+2 new hires"
            changeType="positive"
            icon={GraduationCap}
            iconColor="info"
          />
          <StatCard
            title="Attendance Rate"
            value="92%"
            change="+3% vs last week"
            changeType="positive"
            icon={TrendingUp}
            iconColor="success"
          />
          <StatCard
            title="Upcoming Events"
            value="8"
            change="3 this week"
            changeType="neutral"
            icon={CalendarDays}
            iconColor="warning"
          />
        </div>

        {/* Large Attendance Trends Chart */}
        <div className="w-full">
          <AttendanceChart />
        </div>

        {/* Recent Activity */}
        <div className="w-full">
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
