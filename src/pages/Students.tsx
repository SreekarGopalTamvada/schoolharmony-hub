import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast"; // This gives us nice popups

interface Student {
  id: number;
  name: string;
  grade: string;
  status: string;
  gpa: number;
}

const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // New State for the "Add Student" Form
  const [newName, setNewName] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [newGpa, setNewGpa] = useState("");

  // 1. Fetch Students (READ)
  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('id', { ascending: false }); // Show newest first

      if (error) throw error;
      if (data) setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // 2. Add Student (CREATE)
  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault(); // Stop page refresh
    if (!newName || !newGrade) return;

    try {
      const { error } = await supabase
        .from('students')
        .insert([
          { name: newName, grade: newGrade, gpa: parseFloat(newGpa) || 0.0, status: 'Active' }
        ]);

      if (error) throw error;

      // Success! Clear form and refresh list
      setNewName("");
      setNewGrade("");
      setNewGpa("");
      fetchStudents(); 
      toast({ title: "Success", description: "Student added successfully!" });

    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  // 3. Delete Student (DELETE)
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this student?")) return;

    try {
      const { error } = await supabase.from('students').delete().match({ id });
      if (error) throw error;
      fetchStudents(); // Refresh list
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground">Manage student records</p>
        </div>

        {/* --- THE NEW ADD FORM --- */}
        <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
          <h3 className="font-semibold mb-4">Add New Student</h3>
          <form onSubmit={handleAddStudent} className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Student Name (e.g. John Doe)" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
            />
            <Input 
              placeholder="Grade (e.g. 10th Grade)" 
              value={newGrade} 
              onChange={(e) => setNewGrade(e.target.value)} 
            />
            <Input 
              placeholder="GPA (e.g. 3.5)" 
              type="number"
              step="0.1"
              className="sm:w-32"
              value={newGpa} 
              onChange={(e) => setNewGpa(e.target.value)} 
            />
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" /> Add
            </Button>
          </form>
        </div>

        {/* --- THE TABLE --- */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Grade</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">GPA</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-t hover:bg-muted/50">
                    <td className="p-4 font-medium">{student.name}</td>
                    <td className="p-4">{student.grade}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4">{student.gpa}</td>
                    <td className="p-4">
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(student.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
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

export default Students;