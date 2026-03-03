import { useState } from "react";
import { MobileFormLayout } from "@/components/MobileFormLayout";
import { Factory, Droplets, CloudRain, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const stages = [
  {
    label: "Produced Today", value: "6,000", icon: Factory, gradient: "gradient-primary", pct: 100, barColor: "bg-primary",
    avgAge: "0 days",
    batches: [
      { id: "B-101", qty: "3,200", machine: "Machine A", date: "Today" },
      { id: "B-102", qty: "2,800", machine: "Machine B", date: "Today" },
    ],
  },
  {
    label: "Drying", value: "18,500", icon: Droplets, gradient: "gradient-warning", pct: 70, barColor: "bg-warning",
    avgAge: "3 days",
    batches: [
      { id: "B-098", qty: "6,000", machine: "Machine A", date: "3 days ago" },
      { id: "B-097", qty: "5,500", machine: "Machine B", date: "4 days ago" },
      { id: "B-096", qty: "7,000", machine: "Machine A", date: "5 days ago" },
    ],
  },
  {
    label: "Water Curing (20 days)", value: "32,000", icon: CloudRain, gradient: "gradient-primary", pct: 50, barColor: "bg-primary/70",
    avgAge: "12 days",
    batches: [
      { id: "B-085", qty: "8,000", machine: "Machine A", date: "12 days ago" },
      { id: "B-084", qty: "12,000", machine: "Machine B", date: "14 days ago" },
      { id: "B-083", qty: "12,000", machine: "Machine A", date: "16 days ago" },
    ],
  },
  {
    label: "Ready Stock", value: "45,200", icon: Package, gradient: "gradient-success", pct: 100, barColor: "bg-success",
    avgAge: "25+ days",
    batches: [
      { id: "B-070", qty: "15,000", machine: "Machine A", date: "25 days ago" },
      { id: "B-069", qty: "18,200", machine: "Machine B", date: "28 days ago" },
      { id: "B-068", qty: "12,000", machine: "Machine A", date: "30 days ago" },
    ],
  },
];

const StockPage = () => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  return (
    <MobileFormLayout title="📦 Stock">
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div
            key={i}
            onClick={() => setSelectedStage(i)}
            className="card-modern-hover p-4 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`rounded-xl p-2.5 ${s.gradient} shadow-sm`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Avg Age</p>
                <p className="text-sm font-semibold text-foreground">{s.avgAge}</p>
              </div>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ease-out ${s.barColor}`}
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="card-modern p-5">
        <h2 className="font-semibold text-foreground text-sm mb-3">Stock by Size</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary/40 rounded-xl p-4 text-center">
            <p className="text-xs text-muted-foreground">6 inch</p>
            <p className="text-xl font-bold text-foreground mt-1">28,400</p>
          </div>
          <div className="bg-secondary/40 rounded-xl p-4 text-center">
            <p className="text-xs text-muted-foreground">8 inch</p>
            <p className="text-xl font-bold text-foreground mt-1">16,800</p>
          </div>
        </div>
      </div>

      <Dialog open={selectedStage !== null} onOpenChange={() => setSelectedStage(null)}>
        <DialogContent className="max-w-sm rounded-2xl">
          <DialogHeader>
            <DialogTitle>{selectedStage !== null && stages[selectedStage].label}</DialogTitle>
          </DialogHeader>
          {selectedStage !== null && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 bg-secondary/40 rounded-xl p-3">
                <span className="text-sm text-muted-foreground">Total:</span>
                <span className="text-lg font-bold text-foreground">{stages[selectedStage].value}</span>
                <span className="ml-auto text-xs text-muted-foreground">Avg: {stages[selectedStage].avgAge}</span>
              </div>
              <p className="text-sm font-semibold text-foreground">Batch Details</p>
              {stages[selectedStage].batches.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{b.id}</p>
                    <p className="text-xs text-muted-foreground">{b.machine} • {b.date}</p>
                  </div>
                  <span className="text-sm font-bold text-foreground">{b.qty}</span>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </MobileFormLayout>
  );
};

export default StockPage;
