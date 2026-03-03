import { useState } from "react";
import { MobileFormLayout, FormField } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { toast } from "sonner";
import { Plus, X, Phone, MapPin } from "lucide-react";

interface Customer {
  name: string;
  phone: string;
  location: string;
}

const SettingsPage = () => {
  const [machines, setMachines] = useState(["Machine A", "Machine B", "Machine C"]);
  const [brickTypes, setBrickTypes] = useState(["6 inch", "8 inch"]);
  const [expenseCategories, setExpenseCategories] = useState(["Fuel", "Food", "Material", "Other"]);
  const [customers, setCustomers] = useState<Customer[]>([
    { name: "Kumar Builders", phone: "9876543210", location: "Pune" },
    { name: "Sharma Construction", phone: "9123456789", location: "Mumbai" },
    { name: "Patel & Sons", phone: "", location: "Nashik" },
    { name: "Singh Infra", phone: "9988776655", location: "" },
    { name: "Gupta Developers", phone: "", location: "" },
  ]);
  const [newMachine, setNewMachine] = useState("");
  const [newBrickType, setNewBrickType] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerPhone, setNewCustomerPhone] = useState("");
  const [newCustomerLocation, setNewCustomerLocation] = useState("");

  const addItem = (list: string[], setList: (v: string[]) => void, value: string, label: string) => {
    if (!value.trim()) return;
    setList([...list, value.trim()]);
    toast.success("✅ Saved Successfully", { description: `${label} "${value.trim()}" added` });
  };

  const removeItem = (list: string[], setList: (v: string[]) => void, index: number) => {
    setList(list.filter((_, i) => i !== index));
    toast.success("✅ Saved Successfully", { description: "Item removed" });
  };

  const addCustomer = () => {
    if (!newCustomerName.trim()) return;
    setCustomers([...customers, { name: newCustomerName.trim(), phone: newCustomerPhone.trim(), location: newCustomerLocation.trim() }]);
    toast.success("✅ Saved Successfully", { description: `Customer "${newCustomerName.trim()}" added` });
    setNewCustomerName("");
    setNewCustomerPhone("");
    setNewCustomerLocation("");
  };

  const removeCustomer = (index: number) => {
    setCustomers(customers.filter((_, i) => i !== index));
    toast.success("✅ Saved Successfully", { description: "Customer removed" });
  };

  const renderSection = (
    title: string,
    items: string[],
    setItems: (v: string[]) => void,
    newValue: string,
    setNewValue: (v: string) => void,
    placeholder: string,
    label: string
  ) => (
    <EntryCard title={title}>
      <div className="space-y-2 mb-4">
        {items.map((m, i) => (
          <div key={i} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl group">
            <span className="flex-1 text-sm font-medium text-foreground">{m}</span>
            <button
              onClick={() => removeItem(items, setItems, i)}
              className="text-muted-foreground hover:text-destructive touch-target px-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem(items, setItems, newValue, label);
              setNewValue("");
            }
          }}
          className="flex-1 h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
        />
        <ActionButton
          label="Add"
          icon={Plus}
          variant="primary"
          onClick={() => { addItem(items, setItems, newValue, label); setNewValue(""); }}
        />
      </div>
    </EntryCard>
  );

  return (
    <MobileFormLayout title="⚙️ Settings">
      {renderSection("Machines", machines, setMachines, newMachine, setNewMachine, "New machine name", "Machine")}
      {renderSection("Brick Types", brickTypes, setBrickTypes, newBrickType, setNewBrickType, "New brick type", "Brick Type")}
      {renderSection("Expense Categories", expenseCategories, setExpenseCategories, newCategory, setNewCategory, "New category", "Category")}

      {/* Customers with phone & location */}
      <EntryCard title="Customers">
        <div className="space-y-2 mb-4">
          {customers.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl group">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                  {c.phone && (
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <Phone className="h-3 w-3" /> {c.phone}
                    </span>
                  )}
                  {c.location && (
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {c.location}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeCustomer(i)}
                className="text-muted-foreground hover:text-destructive touch-target px-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <input
            value={newCustomerName}
            onChange={(e) => setNewCustomerName(e.target.value)}
            placeholder="Customer name *"
            className="w-full h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              value={newCustomerPhone}
              onChange={(e) => setNewCustomerPhone(e.target.value)}
              placeholder="Phone (optional)"
              inputMode="tel"
              className="h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
            <input
              value={newCustomerLocation}
              onChange={(e) => setNewCustomerLocation(e.target.value)}
              placeholder="Location (optional)"
              className="h-12 px-3 bg-secondary/50 border border-border rounded-xl text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <ActionButton
            label="Add Customer"
            icon={Plus}
            variant="primary"
            onClick={addCustomer}
            className="w-full"
          />
        </div>
      </EntryCard>
    </MobileFormLayout>
  );
};

export default SettingsPage;
