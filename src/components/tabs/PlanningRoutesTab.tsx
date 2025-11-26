import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Navigation, User, Calendar } from "lucide-react";

const PlanningRoutesTab = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Planning & Routes</h2>
        <Button className="bg-primary hover:bg-primary/90">
          <Navigation className="w-4 h-4 mr-2" />
          Route Optimization
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Client Info */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">Client</h3>
            <Badge variant="outline" className="text-xs">Active</Badge>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Sharon Weston</h4>
            <p className="text-muted-foreground">Age 35</p>
          </div>
          
          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Assigned Nurse</span>
              <span className="text-sm font-medium">Emma Nolan</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Shift</span>
              <span className="text-sm font-medium">14:30 - 14:30</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
              <Clock className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">Next Visit</p>
                <p className="text-lg font-bold">14:30 - 21:30</p>
              </div>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-muted">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">0:5m</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">0 min delay</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Map Placeholder */}
        <Card className="col-span-2 p-6 bg-muted/30">
          <div className="relative w-full h-[400px] rounded-lg bg-muted/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-16 h-16 text-primary mx-auto" />
                <p className="text-lg font-medium text-muted-foreground">Route Map</p>
                <p className="text-sm text-muted-foreground">GPS navigation visualization</p>
              </div>
            </div>
            {/* Route markers */}
            <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
              E
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      {/* Care Plan Tasks */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Care Plan Tasks</h3>
        <div className="space-y-2">
          {[
            { task: "Hydration Reminder", checked: false },
            { task: "Medication Check", checked: false },
            { task: "Bathroom Assist", checked: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              <input type="radio" className="w-4 h-4" />
              <span className="text-sm font-medium">{item.task}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Visits */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Upcoming Visits</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">DATE</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">TIME</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">CLIENT</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">LOCATION</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">DURATION</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "April 26", time: "16:00", client: "Lucas Hendricks", location: "18 Linden St.", duration: "15:00 - 13:45" },
                { date: "Sat. 27", time: "11:00", client: "Helen Foster", location: "65 Pine Ln.", duration: "11:00 - 12:90" },
                { date: "Mon. 29", time: "09:30", client: "Gary Lyons", location: "88 Highland Dr.", duration: "03:30 - 10:15" },
              ].map((visit, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4">{visit.date}</td>
                  <td className="py-3 px-4">{visit.time}</td>
                  <td className="py-3 px-4 font-medium">{visit.client}</td>
                  <td className="py-3 px-4 text-muted-foreground">{visit.location}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{visit.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Additional Section */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Upcoming Visits Summary</h3>
          <div className="space-y-3">
            {[
              { day: "Friday", client: "Lucas Hendricks", location: "12 Linden St." },
              { day: "Sat, April", client: "Helen Foster", location: "65 Pine Ln" },
              { day: "Monday", client: "Gary Lyons", location: "85 Highland Dr" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <div>
                  <span className="text-sm font-medium block">{item.day}</span>
                  <span className="text-sm text-muted-foreground">{item.client}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.location}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">7D-Proof Log</h3>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">April 25, 2024-12:38</p>
            <p>Jucus Emma Nolan arrived on time</p>
            <p className="text-muted-foreground mt-3">April 23, 2324-12:21</p>
            <p>Cara block assigned to Emma Nolan</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanningRoutesTab;
