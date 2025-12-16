import { Calendar, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    date: "Dec 18, 2025",
    time: "3:00 PM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Winter Break Starts",
    date: "Dec 20, 2025",
    time: "All Day",
    type: "holiday",
  },
  {
    id: 3,
    title: "Science Fair",
    date: "Jan 10, 2026",
    time: "9:00 AM",
    type: "event",
  },
];

export function UpcomingEvents() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-slide-up">
      <h3 className="text-lg font-semibold text-foreground mb-6">Upcoming Events</h3>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors animate-slide-in-left"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="font-medium text-foreground mb-2">{event.title}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {event.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
