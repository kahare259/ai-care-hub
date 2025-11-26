import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Smartphone, Radio, Bell, Activity, Lock, Wifi, Battery } from "lucide-react";

const DevicesTab = () => {
  const devices = [
    {
      name: "NeoCam",
      status: "Offline",
      icon: Camera,
      details: ["ESIM esF a 70%", "Battery 75%"],
      badge: "eSIM",
      color: "muted"
    },
    {
      name: "Smart-Care Vital Dock",
      status: "Online",
      icon: Activity,
      details: ["Online", "Last Measurement"],
      badge: "SICJ",
      alerts: ["Vitals Abnormal"],
      color: "success"
    },
    {
      name: "FallRadar",
      status: "ONLINE",
      icon: Radio,
      details: ["High Fall Risk", "Battery"],
      alerts: ["Vitals Abnormal"],
      color: "destructive"
    },
    {
      name: "BuzzBand",
      status: "ONLINE",
      icon: Bell,
      details: ["Online", "Last Sync 4:30 min"],
      alerts: ["⚠ △ | Tisk"],
      color: "success"
    },
    {
      name: "ScanPanel-Care",
      status: "ONLINE",
      icon: Smartphone,
      details: ["Online", "No ID Scan For 2 days"],
      alerts: ["△ No ID-scan"],
      color: "success"
    },
    {
      name: "Voice-First",
      status: "ONLINE",
      icon: Wifi,
      details: ["Online", "No Patient Assigned"],
      extra: "Battery 55%",
      color: "success"
    },
    {
      name: "Pendant Button",
      status: "Online",
      icon: Bell,
      details: ["Online", "Nurse Assigned"],
      extra: "Nurse",
      color: "muted"
    },
    {
      name: "NeoLock",
      status: "ONLINE",
      icon: Lock,
      details: ["Online", "Last Sync 20 min ago"],
      extra: "⟲ Alert",
      color: "success"
    },
    {
      name: "NeoLock",
      status: "ONLINE",
      icon: Lock,
      details: ["Online", "Last Unlock 30 min"],
      extra: "⊡ Low",
      color: "success"
    },
    {
      name: "NeoNodeMini",
      status: "ONLINE",
      icon: Wifi,
      details: ["Online", "Low Battery"],
      extra: "Battery 55%",
      color: "success"
    },
    {
      name: "NeoCare Hub",
      status: "ONLINE",
      icon: Wifi,
      details: ["Online", "Device ID"],
      extra: "NU-5457",
      color: "success"
    },
    {
      name: "Smart-Care Glucose Meter",
      status: "Online",
      icon: Activity,
      details: ["Online", "Last Glucose 30 min ago"],
      extra: "Ar alert 25%",
      color: "success"
    },
    {
      name: "Smart-Care Glucose Meter",
      status: "Online",
      icon: Activity,
      details: ["Online", "Last Glucose 188 mg/dL"],
      alerts: ["⚠ Warning !-hyper"],
      extra: "Battery 45%",
      color: "success"
    },
    {
      name: "Smart-Care Radar Pad",
      status: "Online",
      icon: Activity,
      details: ["Online", "Breath Rsl 15 min"],
      extra: "HR Radar 64 bpm",
      color: "success"
    },
    {
      name: "Smart-Care PillCheck",
      status: "Online",
      icon: Activity,
      details: ["Online", "Door Opem"],
      alerts: ["⚠ Wandering Ris"],
      color: "success"
    },
    {
      name: "Smart-Care Door Beacon",
      status: "Online",
      icon: Activity,
      details: ["Online", "Door Open"],
      alerts: ["⚠ Warndern Dlatiectel"],
      color: "success"
    }
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">DEVICES</h2>
        <p className="text-sm text-muted-foreground">NEOCARE</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {devices.map((device, i) => (
          <Card key={i} className="p-5 space-y-3 hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-center h-24 rounded-lg bg-muted/30">
              <device.icon className="w-12 h-12 text-primary" />
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-foreground">{device.name}</h3>
              <Badge 
                variant="outline" 
                className={`mt-2 ${
                  device.status === "Online" || device.status === "ONLINE" 
                    ? 'bg-success/10 text-success border-success/30'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {device.status}
              </Badge>
            </div>

            <div className="space-y-1 text-xs text-center">
              {device.details.map((detail, j) => (
                <div key={j} className="flex items-center justify-between px-2">
                  <span className={device.color === "success" ? "text-success" : "text-muted-foreground"}>●</span>
                  <span className="text-muted-foreground flex-1 text-left ml-2">{detail}</span>
                </div>
              ))}
            </div>

            {device.alerts && device.alerts.map((alert, j) => (
              <div key={j} className="text-xs text-center">
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30 text-xs">
                  {alert}
                </Badge>
              </div>
            ))}

            {device.badge && (
              <div className="text-center">
                <Badge variant="outline" className="text-xs">{device.badge}</Badge>
              </div>
            )}

            {device.extra && (
              <div className="text-center text-xs text-muted-foreground">
                {device.extra}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DevicesTab;
