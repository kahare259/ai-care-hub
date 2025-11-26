import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, MessageSquare, Camera, AlertTriangle, Clock } from "lucide-react";

const DoctorPortalTab = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Doctor & Family Portal</h2>
        <Button variant="outline">
          <User className="w-4 h-4 mr-2" />
          Profile Settings
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Patients List */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">PATIENTS</h3>
          <div className="space-y-3">
            {[
              { name: "John Marchand", status: "Needs Care", badge: "Reeds Care" },
              { name: "Anne Hofman", status: "Recent Activity", badge: "Recent Activity" },
              { name: "Michael Nolting", status: "No Updates", badge: "No Updates" },
              { name: "Albert Busing", status: "No Updates", badge: "No Updates" },
            ].map((patient, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-xs text-muted-foreground">{patient.status}</p>
                  <Badge variant="outline" className="mt-1 text-xs">{patient.badge}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Messages */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">MESSAGES</h3>
          <div className="space-y-3">
            {[
              { from: "Marian Lindeman", time: "9:45 AM", message: "Arrived late after dinner with my son. All is OK. Thanks!" },
              { from: "Trish Lindeman", time: "Yesterday", message: "Please make sure my mother gets her medications today!" },
              { from: "Lois Caro", time: "Yesterday", message: "Poop from chair. Sorry for the mess." },
              { from: "Prakgent Paragh", time: "Yesterday", message: "" },
            ].map((msg, i) => (
              <div key={i} className="p-3 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer">
                <div className="flex items-start justify-between mb-1">
                  <span className="font-medium text-sm">{msg.from}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                {msg.message && (
                  <p className="text-xs text-muted-foreground line-clamp-2">{msg.message}</p>
                )}
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            ALL UPDATES
          </Button>
        </Card>

        {/* Visit Details */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">VISIT DETAILS</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Vogan visit</p>
              <p className="font-medium">2: Apr 24, 2024</p>
            </div>
            
            <div className="aspect-video rounded-lg bg-muted overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Camera className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>

            <Badge variant="outline" className="bg-primary/10">
              <Camera className="w-3 h-3 mr-1" />
              Video Upload Available
            </Badge>

            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">WOUND ALERT</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Venous leg ulcer detected with moderate severity
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Nurse Notes</h4>
              <p className="text-sm text-muted-foreground">Pressure dressing applied.</p>
              <p className="text-sm text-muted-foreground">No signs of infection.</p>
            </div>

            <div className="pt-3 border-t border-border">
              <h4 className="text-sm font-semibold mb-2">All Updates</h4>
              <div className="space-y-2">
                {[
                  { text: "Pressure re-roged:", time: "9:3 AM" },
                  { text: "10 minutes pressure", time: "9:3 AM" },
                ].map((update, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{update.text}</span>
                    <span className="font-medium">{update.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Updates Section */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Recent Activity Log</h3>
          <div className="space-y-3">
            {[
              { time: "9:12 AM", activity: "NeoCam", icon: Camera },
              { time: "9 AM", activity: "WOUND AI DETECTION", icon: AlertTriangle },
              { time: "9 AM", activity: "Visit Details", icon: Clock },
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <log.icon className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <span className="font-medium text-sm">{log.activity}</span>
                </div>
                <span className="text-xs text-muted-foreground">{log.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Patient Care Summary</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm font-medium mb-1">Total Visits This Week</p>
              <p className="text-2xl font-bold text-primary">12</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm font-medium mb-1">Active Alerts</p>
              <p className="text-2xl font-bold text-warning">3</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm font-medium mb-1">Pending Actions</p>
              <p className="text-2xl font-bold text-destructive">5</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DoctorPortalTab;
