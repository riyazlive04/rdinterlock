import { MobileFormLayout } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { KPICard } from "@/components/KPICard";
import { ActionButton } from "@/components/ActionButton";
import { DatePickerField } from "@/components/DatePickerField";
import { Factory, Truck, Wallet, TrendingUp, Download, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ReportsPage = () => {
  const [quickFilter, setQuickFilter] = useState("This Month");
  const [fromDate, setFromDate] = useState(new Date(new Date().setDate(1)));
  const [toDate, setToDate] = useState(new Date());

  const quickFilters = ["Today", "7 Days", "30 Days", "Custom"];

  const handleQuickFilter = (f: string) => {
    setQuickFilter(f);
    const now = new Date();
    if (f === "Today") {
      setFromDate(now);
      setToDate(now);
    } else if (f === "7 Days") {
      setFromDate(new Date(now.getTime() - 7 * 86400000));
      setToDate(now);
    } else if (f === "30 Days") {
      setFromDate(new Date(now.getTime() - 30 * 86400000));
      setToDate(now);
    }
  };

  return (
    <MobileFormLayout title="📈 Reports">
      {/* Quick Filters as pills */}
      <div className="flex gap-2 flex-wrap">
        {quickFilters.map((r) => (
          <button
            key={r}
            onClick={() => handleQuickFilter(r)}
            className={`h-10 px-5 rounded-full text-sm font-semibold transition-all active:scale-95 touch-target ${
              quickFilter === r
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary/70 text-secondary-foreground hover:bg-secondary"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {quickFilter === "Custom" && (
        <div className="grid grid-cols-2 gap-3">
          <DatePickerField date={fromDate} onDateChange={setFromDate} label="From" />
          <DatePickerField date={toDate} onDateChange={setToDate} label="To" />
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <KPICard title="Total Production" value="1,85,000" icon={Factory} variant="primary" />
        <KPICard title="Total Dispatch" value="1,62,000" icon={Truck} variant="accent" />
        <KPICard title="Total Expense" value="₹4.2L" icon={Wallet} variant="warning" />
        <KPICard title="Est. Profit" value="₹2.8L" icon={TrendingUp} variant="success" />
      </div>

      <EntryCard title="Summary">
        <div className="space-y-0">
          {[
            { label: "Production (6 inch)", value: "1,20,000" },
            { label: "Production (8 inch)", value: "65,000" },
            { label: "Dispatched", value: "1,62,000" },
            { label: "Revenue Collected", value: "₹8,10,000" },
            { label: "Pending Payments", value: "₹32,000" },
            { label: "Worker Payments", value: "₹1,85,000" },
            { label: "Fuel Costs", value: "₹42,000" },
            { label: "Material Costs", value: "₹1,50,000" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-bold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </EntryCard>

      <div className="grid grid-cols-2 gap-3">
        <ActionButton
          label="Export PDF"
          icon={FileText}
          variant="primary"
          size="lg"
          onClick={() => toast.info("PDF export coming soon")}
          className="w-full"
        />
        <ActionButton
          label="Export Excel"
          icon={Download}
          variant="accent"
          size="lg"
          onClick={() => toast.info("Excel export coming soon")}
          className="w-full"
        />
      </div>
    </MobileFormLayout>
  );
};

export default ReportsPage;
