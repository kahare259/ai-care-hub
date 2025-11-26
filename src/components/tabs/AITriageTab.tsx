import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const AITriageTab = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">AI Triage Phone Support</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-5 h-5" />
          <span className="text-sm">Monday, Apr 29 - 11:25 AM</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Caller Info */}
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-2xl font-bold">Rachel Woods</h3>
            <p className="text-muted-foreground">Age: 67</p>
            <p className="text-sm text-muted-foreground mt-2">123 Cedar Lane, Apt 4B</p>
          </div>

          <Button variant="destructive" size="lg" className="w-full">
            <Phone className="w-5 h-5 mr-2" />
            END CALL
          </Button>

          <div className="space-y-4 pt-4 border-t border-border">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-3">AI TRIAGE CHECKLIST</h4>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">A</Badge>
                <div>
                  <p className="font-medium">MILD SYMPTOMS</p>
                  <p className="text-sm text-muted-foreground">DETECTED</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-primary">AI Triage checklist</h4>
              {[
                "Greet and identify",
                "Verify details",
                "Assess condition",
                "Discuss care"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Triage Assessment */}
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h3 className="text-xl font-bold mb-2">Check Blood Sugar</h3>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                HIGH GLUCOSE LEVEL DETECTED
              </Badge>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-3">AI TRIAGE CHECKLIST</h4>
              <div className="space-y-2">
                {[
                  { text: "Greet and identify", checked: true },
                  { text: "Verify details", checked: true },
                  { text: "Assess condition", checked: true },
                  { text: "Discuss care", checked: true },
                  { text: "Follow-up visit needed", checked: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      item.checked ? 'bg-success border-success' : 'border-muted-foreground'
                    }`}>
                      {item.checked && <CheckCircle2 className="w-4 h-4 text-success-foreground" />}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-warning mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">MODERATE RISK</h4>
                  <p className="text-sm text-muted-foreground">
                    Increased likelihood of hyperglycemia requiring intervention
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <h4 className="text-sm font-semibold mb-2">7D-PROOF DOCUMENTING</h4>
              <p className="text-sm text-muted-foreground">Start: 11:23 AM (02:14)</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Call Notes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Call Notes & Summary</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm font-medium mb-2">Symptoms Reported:</p>
            <p className="text-sm text-muted-foreground">Patient reports feeling dizzy and experiencing increased thirst. Blood glucose levels appear elevated based on symptoms.</p>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm font-medium mb-2">AI Assessment:</p>
            <p className="text-sm text-muted-foreground">Mild to moderate hyperglycemic symptoms detected. Recommend immediate glucose monitoring and potential medication adjustment.</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium mb-2">Recommended Action:</p>
            <p className="text-sm">Schedule follow-up visit within 24 hours. Patient advised to monitor blood sugar levels and maintain hydration.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AITriageTab;
