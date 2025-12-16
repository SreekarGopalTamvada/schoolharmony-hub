import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Users, Clock, BookOpen } from "lucide-react";

const courses = [
  { id: 1, name: "AP Mathematics", code: "MATH-401", teacher: "Dr. Sarah Mitchell", students: 32, duration: "Full Year", status: "Active" },
  { id: 2, name: "Advanced Physics", code: "PHYS-301", teacher: "Prof. Michael Chen", students: 28, duration: "Full Year", status: "Active" },
  { id: 3, name: "English Literature", code: "ENG-201", teacher: "Ms. Jennifer Adams", students: 35, duration: "Full Year", status: "Active" },
  { id: 4, name: "World History", code: "HIST-202", teacher: "Mr. David Rodriguez", students: 30, duration: "Full Year", status: "Active" },
  { id: 5, name: "Organic Chemistry", code: "CHEM-302", teacher: "Dr. Emily Watson", students: 26, duration: "Full Year", status: "Active" },
  { id: 6, name: "Computer Programming", code: "CS-101", teacher: "Mr. Robert Kim", students: 24, duration: "Semester", status: "Active" },
];

const Courses = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Courses</h1>
            <p className="text-muted-foreground mt-1">Manage curriculum and course offerings</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {course.code}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-success/10 text-success">
                      {course.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.teacher}</p>
                </div>
                <div className="p-3 rounded-xl bg-warning/10">
                  <BookOpen className="h-5 w-5 text-warning" />
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                <Button variant="outline" size="sm" className="flex-1">Manage</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Courses;
