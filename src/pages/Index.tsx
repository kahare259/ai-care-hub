import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FallRadarTab from "@/components/tabs/FallRadarTab";
import PlanningRoutesTab from "@/components/tabs/PlanningRoutesTab";
import AITriageTab from "@/components/tabs/AITriageTab";
import DoctorPortalTab from "@/components/tabs/DoctorPortalTab";
import FinanceTab from "@/components/tabs/FinanceTab";
import DevicesTab from "@/components/tabs/DevicesTab";
import HouseholdHelpTab from "@/components/tabs/HouseholdHelpTab";
import MaterialsStockTab from "@/components/tabs/MaterialsStockTab";
import CareTVSyncTab from "@/components/tabs/CareTVSyncTab";
import AIReportsTab from "@/components/tabs/AIReportsTab";
import { Activity, Calendar, Phone, Users, DollarSign, Cpu, Home, Package, Video, BarChart3 } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("tab4");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Vertical Tab Navigation */}
      <div className="w-72 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">NeoCare</h1>
          </div>
          <p className="text-sm text-muted-foreground">Healthcare Dashboard</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="flex-1 flex flex-col">
          <TabsList className="flex flex-col h-auto bg-transparent p-4 gap-2">
            <TabsTrigger
              value="tab4"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Activity className="w-5 h-5" />
              <span className="font-medium">Tab 4: FallRadar AI</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab5"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Tab 5: Planning & Routes</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab6"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Tab 6: AI Triage</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab7"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Tab 7: Doctor Portal</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab8"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Tab 8: Finance</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab9"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Cpu className="w-5 h-5" />
              <span className="font-medium">Tab 9: Devices</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab10"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Tab 10: Household Help</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab11"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Package className="w-5 h-5" />
              <span className="font-medium">Tab 11: Materials</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab12"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <Video className="w-5 h-5" />
              <span className="font-medium">Tab 12: CareTV Sync</span>
            </TabsTrigger>
            
            <TabsTrigger
              value="tab13"
              className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary rounded-lg"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Tab 13: AI Reports</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <Tabs value={activeTab} className="h-full">
          <TabsContent value="tab4" className="m-0 h-full">
            <FallRadarTab />
          </TabsContent>
          
          <TabsContent value="tab5" className="m-0 h-full">
            <PlanningRoutesTab />
          </TabsContent>
          
          <TabsContent value="tab6" className="m-0 h-full">
            <AITriageTab />
          </TabsContent>
          
          <TabsContent value="tab7" className="m-0 h-full">
            <DoctorPortalTab />
          </TabsContent>
          
          <TabsContent value="tab8" className="m-0 h-full">
            <FinanceTab />
          </TabsContent>
          
          <TabsContent value="tab9" className="m-0 h-full">
            <DevicesTab />
          </TabsContent>
          
          <TabsContent value="tab10" className="m-0 h-full">
            <HouseholdHelpTab />
          </TabsContent>
          
          <TabsContent value="tab11" className="m-0 h-full">
            <MaterialsStockTab />
          </TabsContent>
          
          <TabsContent value="tab12" className="m-0 h-full">
            <CareTVSyncTab />
          </TabsContent>
          
          <TabsContent value="tab13" className="m-0 h-full">
            <AIReportsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
