import { useState } from "react";
import { format, isBefore, startOfDay } from "date-fns";
import { MobileFormLayout, FormField, BigNumberInput } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { DatePickerField } from "@/components/DatePickerField";
import { StatusBadge } from "@/components/StatusBadge";
import { toast } from "sonner";
import { Save, Truck, Plus, CalendarClock, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DispatchRecord {
  customer: string;
  qty: string;
  size: string;
  orderDate: Date;
  deliveryDate: Date;
  status: "Pending" | "Paid";
  amountReceived: string;
  totalAmount: string;
}

const DispatchPage = () => {
  const [customers, setCustomers] = useState(["Kumar Builders", "Sharma Construction", "Patel & Sons", "Singh Infra", "Gupta Developers"]);
  const [orderDate, setOrderDate] = useState(new Date());
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [customer, setCustomer] = useState("");
  const [brickSize, setBrickSize] = useState<"6 inch" | "8 inch">("6 inch");
  const [quantity, setQuantity] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"Pending" | "Paid">("Pending");
  const [amountReceived, setAmountReceived] = useState("");

  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerPhone, setNewCustomerPhone] = useState("");
  const [newCustomerLocation, setNewCustomerLocation] = useState("");
  const [customerDialogOpen, setCustomerDialogOpen] = useState(false);

  const today = startOfDay(new Date());

  const [dispatches, setDispatches] = useState<DispatchRecord[]>([
    { customer: "Kumar Builders", qty: "5,000", size: "6 inch", orderDate: new Date(2026, 2, 1), deliveryDate: new Date(2026, 2, 5), status: "Paid", amountReceived: "₹25,000", totalAmount: "₹25,000" },
    { customer: "Sharma Construction", qty: "3,200", size: "8 inch", orderDate: new Date(2026, 2, 2), deliveryDate: new Date(2026, 2, 4), status: "Pending", amountReceived: "", totalAmount: "₹19,200" },
    { customer: "Patel & Sons", qty: "8,000", size: "6 inch", orderDate: new Date(2026, 1, 28), deliveryDate: new Date(2026, 2, 3), status: "Pending", amountReceived: "", totalAmount: "₹40,000" },
    { customer: "Singh Infra", qty: "2,000", size: "6 inch", orderDate: new Date(2026, 2, 3), deliveryDate: new Date(2026, 2, 8), status: "Pending", amountReceived: "", totalAmount: "₹10,000" },
  ]);

  const saveDispatch = () => {
    if (!customer || !quantity) {
      toast.error("Please fill customer and quantity");
      return;
    }
    const newDispatch: DispatchRecord = {
      customer,
      qty: parseInt(quantity).toLocaleString(),
      size: brickSize,
      orderDate,
      deliveryDate,
      status: paymentStatus,
      amountReceived: paymentStatus === "Paid" ? `₹${parseInt(amountReceived || "0").toLocaleString()}` : "",
      totalAmount: totalAmount ? `₹${parseInt(totalAmount).toLocaleString()}` : "",
    };
    setDispatches([newDispatch, ...dispatches]);
    toast.success("✅ Saved Successfully", { description: `${quantity} bricks to ${customer} — Deliver by ${format(deliveryDate, "dd MMM")}` });
    setCustomer("");
    setQuantity("");
    
    setAmountReceived("");
    setTotalAmount("");
    setPaymentStatus("Pending");
  };

  const saveNewCustomer = () => {
    if (!newCustomerName.trim()) return;
    const name = newCustomerName.trim();
    setCustomers([...customers, name]);
    setCustomer(name);
    setNewCustomerName("");
    setNewCustomerPhone("");
    setNewCustomerLocation("");
    setCustomerDialogOpen(false);
    toast.success("✅ Saved Successfully", { description: `Customer "${name}" added` });
  };

  const pendingDispatches = dispatches.filter(d => d.status === "Pending");
  const overdueDispatches = pendingDispatches.filter(d => isBefore(d.deliveryDate, today));
  const upcomingDispatches = pendingDispatches.filter(d => !isBefore(d.deliveryDate, today));

  return (
    <MobileFormLayout title="🚚 Dispatch">
      {/* Pending Orders Summary */}
      {pendingDispatches.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-warning/8 border border-warning/20 rounded-2xl">
            <p className="text-xs font-medium text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-warning">{pendingDispatches.length}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              ₹{pendingDispatches.reduce((sum, d) => sum + (parseInt(d.totalAmount.replace(/[₹,]/g, "")) || 0), 0).toLocaleString()} due
            </p>
          </div>
          {overdueDispatches.length > 0 && (
            <div className="p-4 bg-destructive/8 border border-destructive/20 rounded-2xl">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
                <p className="text-xs font-medium text-destructive">Overdue</p>
              </div>
              <p className="text-2xl font-bold text-destructive">{overdueDispatches.length}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Past delivery date</p>
            </div>
          )}
        </div>
      )}

      <EntryCard title="Customer Order">
        <div className="space-y-5">
          <FormField label="Customer Name" required>
            <div className="flex gap-2">
              <select
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="flex-1 h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select customer...</option>
                {customers.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <Dialog open={customerDialogOpen} onOpenChange={setCustomerDialogOpen}>
                <DialogTrigger asChild>
                  <button className="h-12 w-12 rounded-xl gradient-primary text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform touch-target">
                    <Plus className="h-5 w-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-sm rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Customer</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-2">
                    <FormField label="Customer Name" required>
                      <input value={newCustomerName} onChange={(e) => setNewCustomerName(e.target.value)} placeholder="Customer name"
                        className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none" />
                    </FormField>
                    <FormField label="Phone (optional)">
                      <input value={newCustomerPhone} onChange={(e) => setNewCustomerPhone(e.target.value)} placeholder="Phone number" inputMode="tel"
                        className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none" />
                    </FormField>
                    <FormField label="Location (optional)">
                      <input value={newCustomerLocation} onChange={(e) => setNewCustomerLocation(e.target.value)} placeholder="City or area"
                        className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none" />
                    </FormField>
                    <ActionButton label="Save Customer" icon={Save} variant="success" size="lg" onClick={saveNewCustomer} className="w-full" />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </FormField>

          <FormField label="Brick Size">
            <div className="grid grid-cols-2 gap-2">
              <ActionButton label="6 inch" variant="outline" active={brickSize === "6 inch"} onClick={() => setBrickSize("6 inch")} />
              <ActionButton label="8 inch" variant="outline" active={brickSize === "8 inch"} onClick={() => setBrickSize("8 inch")} />
            </div>
          </FormField>

          <FormField label="Bricks Ordered" required>
            <BigNumberInput value={quantity} onChange={setQuantity} placeholder="How many bricks?" />
          </FormField>

          <FormField label="Total Amount (₹)">
            <BigNumberInput value={totalAmount} onChange={setTotalAmount} placeholder="Order value" />
          </FormField>

          <DatePickerField label="Delivery Date" date={deliveryDate} onDateChange={setDeliveryDate} />

          <FormField label="Payment Status">
            <div className="grid grid-cols-2 gap-2">
              <ActionButton label="⏳ Pending" variant="outline" active={paymentStatus === "Pending"} onClick={() => setPaymentStatus("Pending")} />
              <ActionButton label="✅ Paid" variant="outline" active={paymentStatus === "Paid"} onClick={() => setPaymentStatus("Paid")} />
            </div>
          </FormField>

          {paymentStatus === "Paid" && (
            <FormField label="Amount Received (₹)">
              <BigNumberInput value={amountReceived} onChange={setAmountReceived} />
            </FormField>
          )}

          <div className="sticky bottom-20 md:bottom-4 z-10 pt-2">
            <ActionButton label="Save Order" icon={Save} variant="success" size="lg" onClick={saveDispatch} className="w-full shadow-lg" />
          </div>
        </div>
      </EntryCard>

      {/* Pending / Overdue Dispatches */}
      {pendingDispatches.length > 0 && (
        <EntryCard title={`⏳ Pending Dispatches (${pendingDispatches.length})`}>
          <div className="space-y-3">
            {[...overdueDispatches, ...upcomingDispatches].map((d, i) => {
              const isOverdue = isBefore(d.deliveryDate, today);
              return (
                <div key={i} className={`p-3.5 rounded-xl border transition-colors ${
                  isOverdue ? "bg-destructive/5 border-destructive/20" : "bg-warning/5 border-warning/20"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-sm text-foreground">{d.customer}</p>
                    <StatusBadge label={isOverdue ? "Overdue" : "Upcoming"} variant={isOverdue ? "destructive" : "warning"} />
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>{d.qty} • {d.size}</span>
                    <span className="flex items-center gap-1">
                      <CalendarClock className="h-3 w-3" />
                      Deliver by {format(d.deliveryDate, "dd MMM yyyy")}
                    </span>
                  </div>
                  {d.totalAmount && (
                    <p className="text-sm font-bold text-foreground mt-1.5">{d.totalAmount} due</p>
                  )}
                </div>
              );
            })}
          </div>
        </EntryCard>
      )}

      {/* All Dispatches */}
      <EntryCard title="All Dispatches">
        <div className="space-y-3">
          {dispatches.map((d, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">{d.customer}</p>
                <p className="text-xs text-muted-foreground">{d.qty} • {d.size} • {format(d.orderDate, "dd MMM")}</p>
              </div>
              <div className="text-right space-y-1">
                <StatusBadge label={d.status} variant={d.status === "Paid" ? "success" : "warning"} />
                {d.totalAmount && <p className="text-xs font-medium text-foreground">{d.totalAmount}</p>}
              </div>
            </div>
          ))}
        </div>
      </EntryCard>
    </MobileFormLayout>
  );
};

export default DispatchPage;
