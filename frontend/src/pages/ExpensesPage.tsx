import { useState } from "react";
import { MobileFormLayout, FormField, BigNumberInput } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { KPICard } from "@/components/KPICard";
import { DatePickerField } from "@/components/DatePickerField";
import { toast } from "sonner";
import { Save, Fuel, UtensilsCrossed, PackageOpen, MoreHorizontal, Receipt, Eye, Users, Truck, Building } from "lucide-react";

const categories = [
  { label: "Fuel", icon: Fuel },
  { label: "Food", icon: UtensilsCrossed },
  { label: "Material", icon: PackageOpen },
  { label: "Other", icon: MoreHorizontal },
];

const expenseTags = [
  { label: "Material", icon: PackageOpen },
  { label: "Worker", icon: Users },
  { label: "Vehicle", icon: Truck },
  { label: "Office", icon: Building },
  { label: "Other", icon: MoreHorizontal },
];

const workerNames = ["Raju", "Suresh", "Mohan", "Vikram", "Anil"];
const materials = ["Cement", "Sand", "Aggregate", "Colour", "Other"];

const recentExpenses = [
  { category: "Fuel", amount: "₹4,500", note: "Diesel for generator", time: "Today" },
  { category: "Food", amount: "₹1,200", note: "Workers lunch", time: "Today" },
  { category: "Material", amount: "₹12,000", note: "Cement 50 bags", time: "Today" },
  { category: "Fuel", amount: "₹3,800", note: "Petrol for truck", time: "Yesterday" },
];

const ExpensesPage = () => {
  const [entryDate, setEntryDate] = useState(new Date());
  const [category, setCategory] = useState("Fuel");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [tag, setTag] = useState("");
  const [selectedWorker, setSelectedWorker] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const saveExpense = () => {
    toast.success("✅ Saved Successfully", { description: `₹${amount} for ${category}` });
    setAmount("");
    setNotes("");
    setTag("");
    setSelectedWorker("");
    setSelectedMaterial("");
  };

  return (
    <MobileFormLayout title="💰 Expenses">
      <KPICard title="Today's Total Expenses" value="₹17,700" icon={Receipt} variant="warning" />

      <EntryCard title="Add Expense">
        <div className="space-y-5">
          <DatePickerField date={entryDate} onDateChange={setEntryDate} />

          <FormField label="Category">
            <div className="grid grid-cols-4 gap-2">
              {categories.map((c) => (
                <ActionButton
                  key={c.label}
                  label={c.label}
                  icon={c.icon}
                  variant="outline"
                  active={category === c.label}
                  onClick={() => setCategory(c.label)}
                  className="flex-col gap-1 h-auto py-3 text-xs"
                />
              ))}
            </div>
          </FormField>

          <FormField label="Amount (₹)" required>
            <BigNumberInput value={amount} onChange={setAmount} />
          </FormField>

          <FormField label="Notes">
            <input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What was this for?"
              className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </FormField>


          <div className="sticky bottom-20 md:bottom-4 z-10 pt-2">
            <ActionButton label="Save Expense" icon={Save} variant="accent" size="lg" onClick={saveExpense} className="w-full shadow-lg" />
          </div>

          <button className="w-full text-sm text-primary font-medium flex items-center justify-center gap-1.5 py-2 hover:bg-primary/5 rounded-xl transition-colors">
            <Eye className="h-4 w-4" /> View / Edit Entries
          </button>
        </div>
      </EntryCard>

      <EntryCard title="Recent Expenses">
        <div className="space-y-3">
          {recentExpenses.map((e, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 bg-secondary/30 rounded-xl">
              <div className="h-10 w-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
                <Receipt className="h-5 w-5 text-warning" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">{e.note}</p>
                <p className="text-xs text-muted-foreground">{e.category} • {e.time}</p>
              </div>
              <span className="text-sm font-bold text-foreground">{e.amount}</span>
            </div>
          ))}
        </div>
      </EntryCard>
    </MobileFormLayout>
  );
};

export default ExpensesPage;
