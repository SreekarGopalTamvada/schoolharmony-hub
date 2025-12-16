import { UserPlus, BookOpen, Award, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    icon: UserPlus,
    iconBg: "bg-success/10 text-success",
    title: "New student enrolled",
    description: "Emily Johnson joined Grade 10",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: BookOpen,
    iconBg: "bg-info/10 text-info",
    title: "Course updated",
    description: "AP Mathematics syllabus revised",
    time: "4 hours ago",
  },
  {
    id: 3,
    icon: Award,
    iconBg: "bg-warning/10 text-warning",
    title: "Achievement unlocked",
    description: "Science Department reached 95% attendance",
    time: "Yesterday",
  },
  {
    id: 4,
    icon: AlertCircle,
    iconBg: "bg-destructive/10 text-destructive",
    title: "Attention required",
    description: "5 students with incomplete assignments",
    time: "Yesterday",
  },
  {
    id: 5,
    icon: UserPlus,
    iconBg: "bg-primary/10 text-primary",
    title: "Teacher onboarded",
    description: "Dr. Sarah Miller joined Science Department",
    time: "2 days ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
          <CardDescription>Latest updates from your school</CardDescription>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          View all
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("p-2.5 rounded-xl flex-shrink-0", activity.iconBg)}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted/50 px-2 py-1 rounded-md">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
