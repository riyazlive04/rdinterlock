import { useState } from "react";
import { MobileFormLayout, FormField, BigNumberInput } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { DatePickerField } from "@/components/DatePickerField";
import { PillSelector } from "@/components/PillSelector";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Save, Plus, X, Fuel, UtensilsCrossed, PackageOpen, MoreHorizontal, Eye } from "lucide-react";

const machines = ["Machine A", "Machine B", "Machine C"];
const workerNames = ["Raju", "Suresh", "Mohan", "Vikram", "Anil", "Deepak", "Sunil", "Ramesh"];
const quickQuantities = [500, 800, 1000, 1500, 2000];

const DailyEntry = () => {
  const [entryDate, setEntryDate] = useState(new Date());
  const [shift, setShift] = useState("Day");
  const [brickSize, setBrickSize] = useState("6 inch");
  const [machine, setMachine] = useState(machines[0]);
  const [quantity, setQuantity] = useState("");
  const [workers, setWorkers] = useState<string[]>([""]);
  const [sameProduction, setSameProduction] = useState(true);
  const [workerQuantities, setWorkerQuantities] = useState<Record<number, string>>({});
  const [notes, setNotes] = useState("");

  const [expenseDate, setExpenseDate] = useState(new Date());
  const [expenseCategory, setExpenseCategory] = useState("Fuel");
  const [expenseAmount, setExpenseAmount] = useState("");

  const todaySummary = [
    { machine: "Machine A", qty: "3,200" },
    { machine: "Machine B", qty: "2,800" },
  ];

  const addWorker = () => setWorkers([...workers, ""]);
  const removeWorker = (i: number) => {
    setWorkers(workers.filter((_, idx) => idx !== i));
    const newQty = { ...workerQuantities };
    delete newQty[i];
    setWorkerQuantities(newQty);
  };
  const updateWorker = (i: number, v: string) => {
    const updated = [...workers];
    updated[i] = v;
    setWorkers(updated);
  };
  const updateWorkerQty = (i: number, v: string) => {
    setWorkerQuantities({ ...workerQuantities, [i]: v });
  };

  const calcTotal = () => {
    if (sameProduction) return quantity;
    const total = Object.values(workerQuantities).reduce((sum, q) => sum + (parseInt(q) || 0), 0);
    return total > 0 ? total.toString() : quantity;
  };

  const saveProduction = () => {
    toast.success("✅ Saved Successfully", {
      description: `${calcTotal()} bricks • ${machine} • ${shift} Shift`,
    });
  };

  const saveExpense = () => {
    toast.success("✅ Saved Successfully", {
      description: `₹${expenseAmount} for ${expenseCategory}`,
    });
    setExpenseAmount("");
  };

  return (
    <MobileFormLayout title="📖 Daily Entry">
      <EntryCard title="🧱 Production Entry">
        <div className="space-y-5">
          <DatePickerField date={entryDate} onDateChange={setEntryDate} />

          <FormField label="Machine">
            <PillSelector options={machines} value={machine} onChange={setMachine} />
          </FormField>

          <FormField label="Shift">
            <div className="grid grid-cols-2 gap-2">
              <ActionButton label="☀️ Day" variant="outline" active={shift === "Day"} onClick={() => setShift("Day")} />
              <ActionButton label="🌙 Night" variant="outline" active={shift === "Night"} onClick={() => setShift("Night")} />
            </div>
          </FormField>

          <FormField label="Brick Size">
            <div className="grid grid-cols-2 gap-2">
              <ActionButton label="6 inch" variant="outline" active={brickSize === "6 inch"} onClick={() => setBrickSize("6 inch")} />
              <ActionButton label="8 inch" variant="outline" active={brickSize === "8 inch"} onClick={() => setBrickSize("8 inch")} />
            </div>
          </FormField>

          <FormField label="Quantity Produced" required>
            <BigNumberInput value={sameProduction ? quantity : calcTotal()} onChange={sameProduction ? setQuantity : () => {}} placeholder="Enter number of bricks" />
          </FormField>

          {/* Quick Quantity Chips */}
          <div className="flex flex-wrap gap-2">
            {quickQuantities.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sameProduction && setQuantity(q.toString())}
                className="px-4 h-9 rounded-full border border-border bg-card text-foreground text-xs font-semibold hover:border-primary/40 hover:bg-primary/4 transition-all active:scale-95 touch-target"
              >
                {q.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Worker Production Mode */}
          <div className="flex items-center gap-2.5 p-3 bg-secondary/50 rounded-xl">
            <Checkbox
              id="same-production"
              checked={sameProduction}
              onCheckedChange={(checked) => setSameProduction(checked === true)}
            />
            <label htmlFor="same-production" className="text-sm font-medium text-foreground cursor-pointer">
              Same production for all workers
            </label>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-muted-foreground">Workers</span>
              <button type="button" onClick={addWorker} className="inline-flex items-center gap-1 text-sm text-primary font-semibold touch-target">
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
            <div className="space-y-2">
              {workers.map((w, i) => (
                <div key={i} className="flex gap-2">
                  <select
                    value={w}
                    onChange={(e) => updateWorker(i, e.target.value)}
                    className="flex-1 h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select worker...</option>
                    {workerNames.map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                  {!sameProduction && (
                    <input
                      type="number"
                      inputMode="numeric"
                      value={workerQuantities[i] || ""}
                      onChange={(e) => updateWorkerQty(i, e.target.value)}
                      placeholder="Qty"
                      className="w-24 h-12 px-2 bg-secondary/50 border border-border rounded-xl text-foreground text-sm text-center focus:border-primary focus:outline-none transition-colors"
                    />
                  )}
                  {workers.length > 1 && (
                    <button onClick={() => removeWorker(i)} className="text-muted-foreground hover:text-destructive touch-target px-2 transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>




          {/* Sticky-style Save */}
          <div className="sticky bottom-20 md:bottom-4 z-10 pt-2">
            <ActionButton label="Save Production" icon={Save} variant="success" size="lg" onClick={saveProduction} className="w-full shadow-lg" />
          </div>

          <button className="w-full text-sm text-primary font-medium flex items-center justify-center gap-1.5 py-2 hover:bg-primary/5 rounded-xl transition-colors">
            <Eye className="h-4 w-4" /> View / Edit Entries
          </button>
        </div>
      </EntryCard>

      {/* Today's Production Summary */}
      <EntryCard title="📊 Today's Summary">
        <div className="space-y-2">
          {todaySummary.map((s, i) => (
            <div key={i} className="flex justify-between items-center py-2.5 border-b border-border/50 last:border-0">
              <span className="text-sm text-muted-foreground">{s.machine}</span>
              <span className="text-sm font-bold text-foreground">{s.qty} bricks</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 border-t-2 border-primary/20">
            <span className="text-sm font-bold text-foreground">Total</span>
            <span className="text-lg font-bold text-primary">6,000 bricks</span>
          </div>
        </div>
      </EntryCard>

      {/* Quick Expense Entry */}
      <EntryCard title="💰 Quick Expense">
        <div className="space-y-5">
          <DatePickerField date={expenseDate} onDateChange={setExpenseDate} />

          <FormField label="Category">
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Fuel", icon: Fuel },
                { label: "Food", icon: UtensilsCrossed },
                { label: "Material", icon: PackageOpen },
                { label: "Other", icon: MoreHorizontal },
              ].map((cat) => (
                <ActionButton
                  key={cat.label}
                  label={cat.label}
                  icon={cat.icon}
                  variant="outline"
                  active={expenseCategory === cat.label}
                  onClick={() => setExpenseCategory(cat.label)}
                  className="flex-col gap-1 h-auto py-3 text-xs"
                />
              ))}
            </div>
          </FormField>

          <FormField label="Amount (₹)" required>
            <BigNumberInput value={expenseAmount} onChange={setExpenseAmount} placeholder="0" />
          </FormField>

          <FormField label="Notes">
            <input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What was this for?"
              className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </FormField>

          <ActionButton label="Save Expense" icon={Save} variant="accent" size="lg" onClick={saveExpense} className="w-full" />

          <button className="w-full text-sm text-primary font-medium flex items-center justify-center gap-1.5 py-2 hover:bg-primary/5 rounded-xl transition-colors">
            <Eye className="h-4 w-4" /> View / Edit Entries
          </button>
        </div>
      </EntryCard>
    </MobileFormLayout>
  );
};

export default DailyEntry;
