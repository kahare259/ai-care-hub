import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Syringe, Droplet, Bandage, Heart } from "lucide-react";

const MaterialsStockTab = () => {
  const supplies = [
    { name: "Gloves", icon: "🧤", stock: "12,800", assignees: "N-105, N-222", lastOrder: "April 14", days: "20" },
    { name: "Insulin Pens", icon: "💉", stock: "515", assignees: "N-291, N-060", lastOrder: "April 4", days: "18" },
    { name: "Catheters", icon: "🔬", stock: "220", assignees: "N-260", lastOrder: "April 4", days: "25", low: true },
    { name: "Wound Dressings", icon: "🏥", stock: "300", assignees: "N-260", lastOrder: "April 4", days: "30", low: true },
    { name: "Compression Stockings", icon: "🦵", stock: "180", assignees: "N-260", lastOrder: "April 4", days: "21" },
    { name: "Lancets", icon: "💉", stock: "95", assignees: "N-260", lastOrder: "March 1", days: "16", low: true },
    { name: "Incontinence Pads", icon: "🧻", stock: "90", assignees: "N-204", lastOrder: "March 1", days: "9", low: true },
    { name: "Adhesive Tape", icon: "📎", stock: "80", assignees: "N-204, N-223", lastOrder: "March 1", days: "8" },
    { name: "Syringes", icon: "💉", stock: "75", assignees: "N-203", lastOrder: "March 8", days: "5", low: true },
    { name: "Ostomy Bags", icon: "🔬", stock: "50", assignees: "N-037", lastOrder: "March 21", days: "6" },
    { name: "Medication Cups", icon: "💊", stock: "34", assignees: "N-315", lastOrder: "February", days: "10" }
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">NeoCare</h2>
          <h3 className="text-2xl font-bold text-primary mt-1">Materials & Stock</h3>
        </div>
        <Button className="bg-primary hover:bg-primary/90">AI Assist</Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card border-b-2 border-border">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">SUPPLIES</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">STOCK</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">ASSIGNEDS</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">LAST ORDER</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">EST. DAYS</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((supply, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/30">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{supply.icon}</span>
                      <span className="font-medium text-lg">{supply.name}</span>
                      {supply.low && (
                        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                          LOW
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xl font-semibold">{supply.stock}</td>
                  <td className="py-4 px-6 text-muted-foreground">{supply.assignees}</td>
                  <td className="py-4 px-6">{supply.lastOrder}</td>
                  <td className="py-4 px-6 text-xl font-semibold">{supply.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-semibold">Total Items</h3>
          </div>
          <p className="text-4xl font-bold text-primary">11</p>
          <p className="text-sm text-muted-foreground mt-2">Active supply categories</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30 text-lg px-3 py-1">
              LOW STOCK
            </Badge>
          </div>
          <p className="text-4xl font-bold text-warning">5</p>
          <p className="text-sm text-muted-foreground mt-2">Items need reordering</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-8 h-8 text-success" />
            <h3 className="text-lg font-semibold">Well Stocked</h3>
          </div>
          <p className="text-4xl font-bold text-success">6</p>
          <p className="text-sm text-muted-foreground mt-2">Items in good supply</p>
        </Card>
      </div>
    </div>
  );
};

export default MaterialsStockTab;
