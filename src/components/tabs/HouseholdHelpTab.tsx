import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Search, LogOut, User } from "lucide-react";

const HouseholdHelpTab = () => {
  const clients = [
    {
      name: "Joost Vos",
      home: "House",
      time: "10.30-11.30",
      tasks: ["Vacuuming", "Laundry", "Trash Removal"],
      notes: "Client has a cat",
      aide: "Emma"
    },
    {
      name: "Sanne",
      home: "Apartment",
      time: "13.30-14.00",
      tasks: ["Cleaning Kitchen"],
      notes: "Change bed linens",
      aide: "Anne"
    },
    {
      name: "Antoine",
      home: "Apartment",
      time: "14.30-15.00",
      tasks: ["Shopping"],
      notes: "—",
      aide: "Laura"
    },
    {
      name: "Ingrid Post",
      home: "House",
      time: "15.50-16.00",
      tasks: ["Dusting", "Cleaning Floors"],
      notes: "Top up supplies",
      aide: "Esther"
    },
    {
      name: "Willem Jaco",
      home: "House",
      time: "16.00-16.00",
      tasks: ["Cleaning", "Dusting"],
      notes: "Client has limited mobility",
      aide: "Tim"
    },
    {
      name: "Rita Hendriks",
      home: "Apartment",
      time: "16.10-17.00",
      tasks: ["Cleaning Floors"],
      notes: "—",
      aide: "Carol"
    },
    {
      name: "Rita Herdriks",
      home: "House",
      time: "15.00-16.00",
      tasks: ["Clean firors"],
      notes: "—",
      aide: "Carol"
    }
  ];

  return (
    <div className="p-8 space-y-6 bg-secondary/20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">NeoCare</h2>
          <h3 className="text-2xl font-bold text-foreground mt-1">HOUSEHOLD HELP</h3>
        </div>
        <div className="flex gap-3">
          <Button className="bg-primary hover:bg-primary/90">UPDATE</Button>
          <Button variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            LOGOUT
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search clients"
          className="pl-10 bg-background"
        />
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card border-b-2 border-border">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-foreground">CLIENT</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">HOME</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">HELP TIME</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">TASKS</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">NOTES</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">ASSIGNED AIDE</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/30">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{client.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">{client.home}</td>
                  <td className="py-4 px-6">{client.time}</td>
                  <td className="py-4 px-6">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {client.tasks.map((task, j) => (
                        <li key={j}>{task}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">{client.notes}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{client.aide}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default HouseholdHelpTab;
