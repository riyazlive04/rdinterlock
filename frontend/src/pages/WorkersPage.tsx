import { useState } from "react";
import { MobileFormLayout, FormField } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { StatusBadge } from "@/components/StatusBadge";
import { PillSelector } from "@/components/PillSelector";
import { toast } from "sonner";
import { Save, UserPlus } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const roles = ["Production", "Mason", "Driver", "Manager", "Office"];
const paymentTypes = ["Per Brick", "Daily", "Monthly"];

interface Worker {
  name: string;
  role: string;
  payType: string;
  rate: string;
  active: boolean;
}

const WorkersPage = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Production");
  const [payType, setPayType] = useState("Per Brick");
  const [rate, setRate] = useState("");
  const [showInactive, setShowInactive] = useState(false);

  const [workersList, setWorkersList] = useState<Worker[]>([
    { name: "Raju", role: "Production", payType: "Per Brick", rate: "₹0.50", active: true },
    { name: "Suresh", role: "Mason", payType: "Daily", rate: "₹800", active: true },
    { name: "Mohan", role: "Driver", payType: "Monthly", rate: "₹18,000", active: true },
    { name: "Vikram", role: "Production", payType: "Per Brick", rate: "₹0.50", active: true },
    { name: "Anil", role: "Manager", payType: "Monthly", rate: "₹25,000", active: false },
  ]);

  const toggleWorkerStatus = (index: number) => {
    const updated = [...workersList];
    updated[index].active = !updated[index].active;
    setWorkersList(updated);
    toast.success("✅ Saved Successfully", {
      description: `${updated[index].name} is now ${updated[index].active ? "Active" : "Inactive"}`,
    });
  };

  const saveWorker = () => {
    if (!name.trim()) return;
    setWorkersList([...workersList, { name: name.trim(), role, payType, rate: `₹${rate}`, active: true }]);
    toast.success("✅ Saved Successfully", { description: `${name} — ${role}` });
    setName("");
    setRate("");
  };

  const displayedWorkers = showInactive ? workersList : workersList.filter((w) => w.active);

  const getInitials = (name: string) => name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

  const roleColors: Record<string, string> = {
    Production: "primary",
    Mason: "warning",
    Driver: "success",
    Manager: "destructive",
    Office: "primary",
  };

  return (
    <MobileFormLayout title="👷 Workers">
      <EntryCard title="Add New Worker">
        <div className="space-y-5">
          <FormField label="Name" required>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Worker name"
              className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </FormField>

          <FormField label="Role">
            <PillSelector options={roles} value={role} onChange={setRole} />
          </FormField>

          <FormField label="Payment Type">
            <PillSelector options={paymentTypes} value={payType} onChange={setPayType} />
          </FormField>

          <FormField label="Rate (₹)" required>
            <input
              type="number"
              inputMode="numeric"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter rate"
              className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </FormField>

          <ActionButton label="Add Worker" icon={UserPlus} variant="success" size="lg" onClick={saveWorker} className="w-full" />
        </div>
      </EntryCard>

      <EntryCard title="All Workers">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground">
            {workersList.filter(w => w.active).length} Active • {workersList.filter(w => !w.active).length} Inactive
          </span>
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            Show Inactive
            <Switch checked={showInactive} onCheckedChange={setShowInactive} />
          </label>
        </div>
        <div className="space-y-3">
          {displayedWorkers.map((w, i) => {
            const realIndex = workersList.indexOf(w);
            return (
              <div key={i} className={`flex items-center gap-3 p-3.5 bg-secondary/30 rounded-xl transition-opacity ${!w.active ? "opacity-50" : ""}`}>
                {/* Avatar */}
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white font-bold text-sm">{getInitials(w.name)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground">{w.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <StatusBadge label={w.role} variant={(roleColors[w.role] as any) || "default"} />
                    <span className="text-xs text-muted-foreground">{w.payType}</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="text-sm font-bold text-foreground">{w.rate}</span>
                  <Switch checked={w.active} onCheckedChange={() => toggleWorkerStatus(realIndex)} />
                </div>
              </div>
            );
          })}
        </div>
      </EntryCard>
    </MobileFormLayout>
  );
};

export default WorkersPage;
