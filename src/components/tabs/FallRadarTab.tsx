import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, CheckCircle2, AlertTriangle, Bell, MapPin, Radio } from "lucide-react";

const FallRadarTab = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">FallRadar AI Dashboard</h2>
        <div className="flex gap-3">
          <Button variant="outline" size="sm"><Bell className="w-4 h-4 mr-2" />Notifications</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Client Overview */}
        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-primary">Client Overview</h3>
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center">
              <Activity className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold">Ernest Turner</h4>
              <p className="text-sm text-muted-foreground">75 years old</p>
              <p className="text-sm text-muted-foreground mt-1">COPD / Diabetes Type II</p>
              <Badge variant="destructive" className="mt-2">High Risk</Badge>
            </div>
          </div>
          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Assigned Nurse</span>
              <span className="font-medium">Carol Smith</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next Visit</span>
              <span className="font-medium">Today at 14:15</span>
            </div>
          </div>
        </Card>

        {/* FallRadar Status */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">FallRadar Status</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-muted" />
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">Location Sensor</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">Radar Pulse</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">AI Monitor</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="text-center">
              <MapPin className="w-6 h-6 mx-auto text-success mb-1" />
              <p className="text-xs text-muted-foreground">Location</p>
            </div>
            <div className="text-center">
              <Radio className="w-6 h-6 mx-auto text-success mb-1" />
              <p className="text-xs text-muted-foreground">Radar</p>
            </div>
            <div className="text-center">
              <Activity className="w-6 h-6 mx-auto text-success mb-1" />
              <p className="text-xs text-muted-foreground">AI Monitor</p>
            </div>
          </div>
        </Card>

        {/* FallAlert Status */}
        <Card className="p-6 space-y-4 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-semibold text-primary">FallAlert Sent</h3>
          <div className="flex items-center justify-center py-6">
            <div className="w-32 h-32 rounded-full bg-destructive/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-destructive/20 animate-ping" />
              <Bell className="w-16 h-16 text-destructive relative z-10" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
              Alert sent to be answered
            </Badge>
            <Button className="w-full mt-4 bg-success hover:bg-success/90">
              Mark as Resolved
            </Button>
          </div>
        </Card>
      </div>

      {/* Fall History */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Fall History</h3>
        <div className="space-y-3">
          {[
            { date: "April 22, 2024", status: "Safely Averted", detail: "Recovered easily", color: "success" },
            { date: "April 9, 2024", status: "Increased Risk", detail: "Unsteady gait", color: "warning" },
            { date: "January 19, 2024", status: "Critical Aid", detail: "Emergency called", color: "destructive" },
            { date: "January 2024", status: "Emergency Care", detail: "Hospitalized", color: "destructive" },
          ].map((event, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
              <div className={`w-3 h-3 rounded-full bg-${event.color}`} />
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{event.date}</span>
                  <span className="font-semibold">{event.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Risk Factors & Recommendations */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Risk Factors Detected</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
              <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <p className="font-medium">Balance & Stability</p>
                <p className="text-sm text-muted-foreground">Unstable stride detected</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <p className="font-medium">BuzzBand not worn</p>
                <p className="text-sm text-muted-foreground">Hanging on coat rack</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
              <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <p className="font-medium">Home Hazard</p>
                <p className="text-sm text-muted-foreground">Corner rug lifts up</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Colored failline strips</p>
                <p className="text-sm text-muted-foreground">Install visual guides</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Chair position shift</p>
                <p className="text-sm text-muted-foreground">Improve ergonomics</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">BuzzBand Monitor</p>
                <p className="text-sm text-muted-foreground">Ensure daily wearing</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FallRadarTab;
