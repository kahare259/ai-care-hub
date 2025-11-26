import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, Activity } from "lucide-react";

const AIReportsTab = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold text-foreground">AI REPORTS</h2>
        <span className="text-lg text-muted-foreground">April 25, 2024</span>
      </div>

      {/* Metrics Overview */}
      <Card className="p-8 bg-card border-2 border-border">
        <div className="grid grid-cols-5 gap-8">
          <div className="text-center border-r border-border">
            <p className="text-7xl font-bold">452</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">UPDATES</p>
          </div>
          <div className="text-center border-r border-border">
            <p className="text-7xl font-bold">318</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">EVENTS</p>
          </div>
          <div className="text-center border-r border-border">
            <p className="text-7xl font-bold text-warning">76</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">WARNINGS</p>
          </div>
          <div className="text-center border-r border-border">
            <p className="text-7xl font-bold text-destructive">25</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">ALERTS</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-bold text-primary">25</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">AIT</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Trends Chart */}
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-6">Trends</h3>
          <p className="text-lg text-muted-foreground mb-4">Warnings Last Week</p>
          
          {/* Simple line chart visualization */}
          <div className="h-48 relative border-l-2 border-b-2 border-border">
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
              {[40, 55, 45, 60, 70, 78, 80].map((height, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full max-w-[40px] bg-primary rounded-t transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-muted-foreground mt-2">
                    {["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 flex flex-col justify-between h-full py-4 -ml-8 text-xs text-muted-foreground">
              <span>80</span>
              <span>60</span>
              <span>40</span>
            </div>
          </div>
        </Card>

        {/* Vitals Analysis */}
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-6">Vitals Analysis</h3>
          <div className="space-y-4">
            {[
              { name: "Heart Rate", trend: "up" },
              { name: "Blood Pressure", trend: "up" },
              { name: "Respiration", trend: "down" },
              { name: "Temperature", trend: "down" },
              { name: "SpO2", trend: "down" }
            ].map((vital, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  {vital.trend === "up" ? (
                    <TrendingUp className="w-5 h-5 text-destructive" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-success" />
                  )}
                  <span className="font-medium text-lg">{vital.name}</span>
                </div>
                {vital.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Risk Alerts - Two Columns */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-6">Risk Alerts</h3>
          <div className="space-y-3">
            {[
              { patient: "ANN J.", condition: "Hypoxia detected", time: "08:12" },
              { patient: "ROBERT C.", condition: "Multiple fils detected", time: "07:45" },
              { patient: "GLADYS P.", condition: "Fever detected", time: "07:18" },
              { patient: "FRANK M.", condition: "Critical blood glucose", time: "06:55" }
            ].map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-bold">{alert.patient}</p>
                    <p className="text-sm text-muted-foreground">{alert.condition}</p>
                  </div>
                </div>
                <span className="font-medium">{alert.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-6">Risk Alerts</h3>
          <div className="space-y-3">
            {[
              { patient: "ANN J.", condition: "Hypexia", time: "07:12" },
              { patient: "ROBERT C.", condition: "falls detected", time: "07:45" },
              { patient: "GLADYS P.", condition: "Fever", time: "07:18" },
              { patient: "FRANK M.", condition: "Critical glucose", time: "06:55" }
            ].map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-bold">{alert.patient}</p>
                    <p className="text-sm text-muted-foreground">{alert.condition}</p>
                  </div>
                </div>
                <span className="font-medium">{alert.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Summary Card */}
      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 text-center">
        <div className="flex items-center justify-center gap-4">
          <Activity className="w-12 h-12 text-primary" />
          <div>
            <h3 className="text-3xl font-bold">AI-Powered Healthcare Insights</h3>
            <p className="text-muted-foreground mt-2">Real-time monitoring and intelligent analysis for better patient care</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIReportsTab;
