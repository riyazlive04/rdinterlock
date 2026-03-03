import { useState } from "react";
import { MobileFormLayout, FormField, BigNumberInput } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { KPICard } from "@/components/KPICard";
import { StatusBadge } from "@/components/StatusBadge";
import { DatePickerField } from "@/components/DatePickerField";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Save, ArrowDownCircle, ArrowUpCircle, Wallet, Eye } from "lucide-react";

const customers = ["Kumar Builders", "Sharma Construction", "Patel & Sons", "Singh Infra", "Gupta Developers"];

// Mock pending dispatches (in real app, shared state or DB)
const pendingDispatchesMock = [
  { id: 1, customer: "Sharma Construction", qty: "3,200", totalAmount: "₹19,200", deliveryDate: "04 Mar 2026" },
  { id: 2, customer: "Patel & Sons", qty: "8,000", totalAmount: "₹40,000", deliveryDate: "03 Mar 2026" },
  { id: 3, customer: "Singh Infra", qty: "2,000", totalAmount: "₹10,000", deliveryDate: "08 Mar 2026" },
];

const initialLedger = [
  { type: "IN" as const, desc: "Payment from Kumar Builders", amount: "₹45,000", date: "Today", customer: "Kumar Builders", dispatchRef: "5,000 bricks • 6 inch" },
  { type: "OUT" as const, desc: "Diesel for generator", amount: "₹4,500", date: "Today", customer: "", dispatchRef: "" },
  { type: "OUT" as const, desc: "Worker salary - Raju", amount: "₹2,800", date: "Today", customer: "", dispatchRef: "" },
  { type: "IN" as const, desc: "Payment from Patel & Sons", amount: "₹32,000", date: "Yesterday", customer: "Patel & Sons", dispatchRef: "8,000 bricks" },
  { type: "OUT" as const, desc: "Cement 50 bags", amount: "₹12,000", date: "Yesterday", customer: "", dispatchRef: "" },
  { type: "IN" as const, desc: "Cash advance return", amount: "₹5,000", date: "2 days ago", customer: "", dispatchRef: "" },
];

const CashBookPage = () => {
  const [entryDate, setEntryDate] = useState(new Date());
  const [type, setType] = useState<"IN" | "OUT">("IN");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedDispatch, setSelectedDispatch] = useState("");
  const [deductFromBalance, setDeductFromBalance] = useState(true);
  const [ledger] = useState(initialLedger);

  // Filter pending dispatches for selected customer
  const customerPendingDispatches = selectedCustomer
    ? pendingDispatchesMock.filter(d => d.customer === selectedCustomer)
    : [];

  const saveEntry = () => {
    const extraMsg = type === "OUT" && deductFromBalance ? " (deducted from balance)" : "";
    const customerMsg = type === "IN" && selectedCustomer ? ` from ${selectedCustomer}` : "";
    const dispatchMsg = selectedDispatch ? ` (against dispatch #${selectedDispatch})` : "";
    toast.success("✅ Saved Successfully", { description: `₹${amount} — ${description}${customerMsg}${dispatchMsg}${extraMsg}` });
    setAmount("");
    setDescription("");
    setSelectedCustomer("");
    setSelectedDispatch("");
  };

  // Calculate totals
  const totalIn = ledger.filter(e => e.type === "IN").length;
  const totalOut = ledger.filter(e => e.type === "OUT").length;

  return (
    <MobileFormLayout title="💵 Cash Book">
      <KPICard title="Current Balance" value="₹1,20,500" icon={Wallet} variant="primary" />

      <EntryCard title="New Entry">
        <div className="space-y-5">
          <DatePickerField date={entryDate} onDateChange={setEntryDate} />

          <FormField label="Type">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { setType("IN"); setSelectedCustomer(""); setSelectedDispatch(""); }}
                className={`h-12 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.97] touch-target ${
                  type === "IN"
                    ? "bg-success/10 border-2 border-success text-success shadow-sm"
                    : "border border-border bg-card text-foreground hover:border-success/40"
                }`}
              >
                💰 Money IN
              </button>
              <button
                type="button"
                onClick={() => { setType("OUT"); setSelectedCustomer(""); setSelectedDispatch(""); }}
                className={`h-12 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.97] touch-target ${
                  type === "OUT"
                    ? "bg-destructive/10 border-2 border-destructive text-destructive shadow-sm"
                    : "border border-border bg-card text-foreground hover:border-destructive/40"
                }`}
              >
                💸 Money OUT
              </button>
            </div>
          </FormField>

          {/* Customer selector for Money IN */}
          {type === "IN" && (
            <FormField label="Received From" required>
              <select
                value={selectedCustomer}
                onChange={(e) => { setSelectedCustomer(e.target.value); setSelectedDispatch(""); }}
                className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select customer...</option>
                {customers.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </FormField>
          )}

          {/* Show pending dispatches for selected customer */}
          {type === "IN" && selectedCustomer && customerPendingDispatches.length > 0 && (
            <FormField label="Against Dispatch (optional)">
              <div className="space-y-2">
                {customerPendingDispatches.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => {
                      setSelectedDispatch(selectedDispatch === d.id.toString() ? "" : d.id.toString());
                      if (selectedDispatch !== d.id.toString()) {
                        setAmount(d.totalAmount.replace(/[₹,]/g, ""));
                        setDescription(`Payment for ${d.qty} bricks`);
                      }
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all active:scale-[0.98] ${
                      selectedDispatch === d.id.toString()
                        ? "border-primary bg-primary/5"
                        : "border-border bg-secondary/30 hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{d.qty} bricks</span>
                      <span className="text-sm font-bold text-foreground">{d.totalAmount}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Deliver by {d.deliveryDate}</p>
                  </button>
                ))}
              </div>
            </FormField>
          )}

          {type === "IN" && selectedCustomer && customerPendingDispatches.length === 0 && (
            <div className="text-xs text-muted-foreground bg-secondary/30 rounded-xl px-3 py-2.5">
              No pending dispatches for {selectedCustomer}
            </div>
          )}

          <FormField label="Amount (₹)" required>
            <BigNumberInput value={amount} onChange={setAmount} />
          </FormField>

          <FormField label="Description" required>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What is this for?"
              className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </FormField>

          {type === "OUT" && (
            <div className="flex items-center gap-2.5 p-3 bg-secondary/50 rounded-xl">
              <Checkbox
                id="deduct-balance"
                checked={deductFromBalance}
                onCheckedChange={(checked) => setDeductFromBalance(checked === true)}
              />
              <label htmlFor="deduct-balance" className="text-sm font-medium text-foreground cursor-pointer">
                Deduct from cash balance
              </label>
            </div>
          )}

          <div className="sticky bottom-20 md:bottom-4 z-10 pt-2">
            <ActionButton label="Save Entry" icon={Save} variant="success" size="lg" onClick={saveEntry} className="w-full shadow-lg" />
          </div>

          <button className="w-full text-sm text-primary font-medium flex items-center justify-center gap-1.5 py-2 hover:bg-primary/5 rounded-xl transition-colors">
            <Eye className="h-4 w-4" /> View / Edit Entries
          </button>
        </div>
      </EntryCard>

      <EntryCard title="Ledger">
        <div className="space-y-2">
          {ledger.map((e, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 bg-secondary/30 rounded-xl">
              <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${
                e.type === "IN" ? "bg-success/10" : "bg-destructive/10"
              }`}>
                {e.type === "IN" ? (
                  <ArrowDownCircle className="h-4 w-4 text-success" />
                ) : (
                  <ArrowUpCircle className="h-4 w-4 text-destructive" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">{e.desc}</p>
                <p className="text-xs text-muted-foreground">
                  {e.customer && <span className="text-primary font-medium">{e.customer} • </span>}
                  {e.dispatchRef && <span>{e.dispatchRef} • </span>}
                  {e.date}
                </p>
              </div>
              <span className={`text-sm font-bold ${e.type === "IN" ? "text-success" : "text-destructive"}`}>
                {e.type === "IN" ? "+" : "-"}{e.amount}
              </span>
            </div>
          ))}
        </div>
      </EntryCard>
    </MobileFormLayout>
  );
};

export default CashBookPage;
