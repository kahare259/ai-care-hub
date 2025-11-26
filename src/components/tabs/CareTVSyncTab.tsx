import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Video, CheckCircle2, Clock, User } from "lucide-react";

const CareTVSyncTab = () => {
  const recentUploads = [
    { id: "Care #1256", nurse: "Petra van Dijk", client: "Theo Visser", status: "PENDING" },
    { id: "Care #1255", nurse: "Maria Jansen", client: "Jan Smit", status: "UPLOADED" },
    { id: "Care #1254", nurse: "Ibrahim Salah", client: "Hennie de Boe", status: "UPLOADED" },
    { id: "Care #1253", nurse: "Linda Vos", client: "Karin Vermulen", status: "UPLOADED" }
  ];

  return (
    <div className="p-8 space-y-6 bg-muted/20">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-foreground">CareTV Sync</h2>
      </div>

      {/* Upload Section */}
      <Card className="p-8 bg-primary/5">
        <Button size="lg" className="w-full h-24 text-2xl font-bold bg-primary hover:bg-primary/90">
          <Upload className="w-8 h-8 mr-3" />
          UPLOAD VIDEO
        </Button>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6 text-center border-l-4 border-warning">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-6 h-6 text-warning" />
            <h3 className="text-lg font-semibold text-muted-foreground">Pending Uploads</h3>
          </div>
          <p className="text-6xl font-bold">14</p>
        </Card>

        <Card className="p-6 text-center border-l-4 border-primary">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Video className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold text-muted-foreground">Uploading</h3>
          </div>
          <p className="text-6xl font-bold">3</p>
          <p className="text-sm text-muted-foreground mt-2">Videos</p>
        </Card>

        <Card className="p-6 text-center border-l-4 border-success">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle2 className="w-6 h-6 text-success" />
            <h3 className="text-lg font-semibold text-muted-foreground">Completed</h3>
          </div>
          <p className="text-6xl font-bold">1224</p>
        </Card>
      </div>

      {/* Recent Uploads Table */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-6">Recent Uploads</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b-2 border-border">
              <tr>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Care Video</th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Nurse</th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Client</th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUploads.map((upload, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/30">
                  <td className="py-4 px-4 font-medium text-lg">{upload.id}</td>
                  <td className="py-4 px-4">{upload.nurse}</td>
                  <td className="py-4 px-4">{upload.client}</td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant="outline"
                      className={upload.status === "PENDING" 
                        ? "bg-muted text-muted-foreground border-muted-foreground/30"
                        : "bg-success/10 text-success border-success/30"
                      }
                    >
                      {upload.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* AI Suggestions */}
      <Card className="p-6 bg-card">
        <h3 className="text-xl font-bold text-foreground mb-4">AI Suggestions</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">•</span>
            <span className="text-muted-foreground">Ensure proper lighting</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">•</span>
            <span className="text-muted-foreground">Avoid excessive noise</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default CareTVSyncTab;
