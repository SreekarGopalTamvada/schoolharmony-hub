import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  experience: number;
  status: string;
}

const Teachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const { data, error } = await supabase
          .from('teachers')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;
        if (data) setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Teachers</h1>
            <p className="text-muted-foreground">Manage faculty and staff</p>
          </div>
          <Button onClick={() => alert("Add Teacher feature coming next!")}>
            <Plus className="h-4 w-4 mr-2" />
            Add Teacher
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
             <p className="text-muted-foreground">Loading faculty...</p>
          ) : teachers.map((teacher) => (
            <div key={teacher.id} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{teacher.name}</h3>
                  <p className="text-sm text-primary font-medium">{teacher.subject}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  teacher.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {teacher.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>Experience: {teacher.experience} years</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="h-3 w-3 mr-2" /> Email
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="h-3 w-3 mr-2" /> Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Teachers;