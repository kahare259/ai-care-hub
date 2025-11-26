import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, FileText } from "lucide-react";

const FinanceTab = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Finance & Billing</h2>
        <Button variant="outline">
          <FileText className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">TOTAL REVENUE</h3>
            <DollarSign className="w-5 h-5 text-success" />
          </div>
          <p className="text-4xl font-bold">$185,420</p>
          <div className="flex items-center gap-2 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">+12.5% from last month</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">TOTAL EXPENSES</h3>
            <DollarSign className="w-5 h-5 text-destructive" />
          </div>
          <p className="text-4xl font-bold">$124,032</p>
          <div className="flex items-center gap-2 mt-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">+8.2% from last month</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">NET PROFIT</h3>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="text-4xl font-bold">$61,388</p>
          <div className="flex items-center gap-2 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">+18.3% from last month</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Revenue Overview */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">REVENUE OVERVIEW</h3>
          <div className="h-48 bg-muted/30 rounded-lg flex items-end justify-around p-4 gap-2">
            {[10, 15, 12, 18, 22, 28, 35].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
                  style={{ height: `${height * 3}%` }}
                />
                <span className="text-xs text-muted-foreground mt-2">
                  {["Jan", "Feb", "Mar", "Jun", "Jul", "Sept"][i]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Invoices */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">RECENT INVOICES</h3>
          <div className="space-y-2">
            {[
              { date: "Sep 23", client: "PATEL FAMILY", amount: "$220.0" },
              { date: "Sep 21", client: "ANDERSON", amount: "$520.0" },
              { date: "Sep 18", client: "DR. MARTENS", amount: "$460.0" },
              { date: "Sep 15", client: "SMITH FAMILY", amount: "$180.0" },
              { date: "Sep 12", client: "GOODHEALTH", amount: "$860.0" },
            ].map((invoice, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{invoice.date}</span>
                  <span className="font-medium">{invoice.client}</span>
                </div>
                <span className="font-bold">{invoice.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Expenses Breakdown */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">EXPENSES BREAKDOWN</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">SERVICES</span>
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '65%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">EQUIPMENT</span>
                <span className="text-sm text-muted-foreground">20%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-chart-2" style={{ width: '20%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">SUPPLIES</span>
                <span className="text-sm text-muted-foreground">15%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-chart-3" style={{ width: '15%' }} />
              </div>
            </div>
          </div>
        </Card>

        {/* Billing Status */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">BILLING STATUS</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-success/10 border border-success/20">
              <span className="font-medium">PAID</span>
              <span className="text-2xl font-bold">1085</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-warning/10 border border-warning/20">
              <span className="font-medium">PARTIAL</span>
              <span className="text-2xl font-bold">120</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <span className="font-medium">UNPAID</span>
              <span className="text-2xl font-bold">74</span>
            </div>
          </div>
        </Card>
      </div>

      {/* NEOCARE Branding */}
      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-foreground">NEOCARE</h3>
          <p className="text-muted-foreground mt-2">Financial Management System</p>
        </div>
      </Card>
    </div>
  );
};

export default FinanceTab;
