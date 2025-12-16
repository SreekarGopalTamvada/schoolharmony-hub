import { NavLink } from "@/components/NavLink";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CalendarCheck, 
  Settings,
  ChevronLeft,
  School,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Overview" },
  { to: "/students", icon: Users, label: "Students" },
  { to: "/teachers", icon: GraduationCap, label: "Teachers" },
  { to: "/courses", icon: BookOpen, label: "Courses" },
  { to: "/attendance", icon: CalendarCheck, label: "Attendance" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen bg-sidebar flex flex-col transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-0 lg:w-20",
          !isOpen && "overflow-hidden lg:overflow-visible"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-sidebar-primary flex items-center justify-center flex-shrink-0">
              <School className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            {isOpen && (
              <span className="font-semibold text-sidebar-foreground text-lg animate-fade-in">
                EduAdmin
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hidden lg:flex text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", !isOpen && "rotate-180")} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-muted transition-all duration-200",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                !isOpen && "lg:justify-center lg:px-2"
              )}
              activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && (
                <span className="animate-fade-in">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-sidebar-border">
          {isOpen && user && (
            <div className="mb-3 animate-fade-in">
              <p className="text-xs text-sidebar-muted">Logged in as</p>
              <p className="text-sm text-sidebar-foreground font-medium truncate">
                {user.email}
              </p>
            </div>
          )}
          <Button
            variant="ghost"
            onClick={handleSignOut}
            className={cn(
              "w-full text-sidebar-muted hover:text-destructive hover:bg-destructive/10",
              !isOpen && "lg:px-2"
            )}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            {isOpen && <span className="ml-2">Sign out</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}
