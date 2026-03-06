import { useState, useMemo } from "react";
import { MobileFormLayout } from "@/components/MobileFormLayout";
import { toast } from "sonner";
import { Plus, Edit2, Trash2, Loader2, X, Download, IndianRupee, Tag } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { clientsApi } from "@/api/clients.api";
import { cn } from "@/lib/utils";

const PAYMENT_METHODS = ["CASH", "UPI", "BANK_TRANSFER", "CHEQUE", "OTHER"];

const ClientLedgerPage = () => {
    const queryClient = useQueryClient();
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState<any>(null);
    const [filterClient, setFilterClient] = useState("");
    const [typeFilter, setTypeFilter] = useState("ALL");
    const [formType, setFormType] = useState<"PAYMENT" | "ADVANCE">("PAYMENT");
    const [form, setForm] = useState({ clientId: "", orderId: "", amount: "", paymentDate: new Date().toISOString().split("T")[0], paymentMethod: "CASH", notes: "" });

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ["client-payments", filterClient],
        queryFn: () => clientsApi.getAllPayments({ clientId: filterClient || undefined }),
    });

    const { data: clients = [] } = useQuery({ queryKey: ["clients"], queryFn: () => clientsApi.getAll() });
    const { data: orders = [] } = useQuery({
        queryKey: ["client-orders-for-payment", form.clientId],
        queryFn: () => clientsApi.getAllOrders({ clientId: form.clientId }),
        enabled: !!form.clientId && formType === "PAYMENT",
    });

    const createMut = useMutation({
        mutationFn: (data: any) => clientsApi.createPayment(data),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["client-payments"] }); queryClient.invalidateQueries({ queryKey: ["client-orders"] }); setShowModal(false); resetForm(); toast.success(`✅ ${formType === "ADVANCE" ? "Advance" : "Payment"} recorded`); },
        onError: (e: any) => toast.error("❌ Failed", { description: e.message }),
    });

    const updateMut = useMutation({
        mutationFn: ({ id, data }: any) => clientsApi.updatePayment(id, data),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["client-payments"] }); setShowModal(false); setEditing(null); resetForm(); toast.success("✅ Updated successfully"); },
        onError: (e: any) => toast.error("❌ Failed", { description: e.message }),
    });

    const deleteMut = useMutation({
        mutationFn: (id: string) => clientsApi.deletePayment(id),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["client-payments"] }); toast.success("✅ Deleted successfully"); },
    });

    const resetForm = () => {
        setForm({ clientId: "", orderId: "", amount: "", paymentDate: new Date().toISOString().split("T")[0], paymentMethod: "CASH", notes: "" });
        setEditing(null);
    };

    const openModal = (type: "PAYMENT" | "ADVANCE", p?: any) => {
        setFormType(type);
        if (p) {
            setEditing(p);
            setForm({
                clientId: p.clientId, orderId: p.orderId || "", amount: String(p.amount),
                paymentDate: new Date(p.paymentDate).toISOString().split("T")[0], paymentMethod: p.paymentMethod, notes: p.notes || "",
            });
        } else {
            resetForm();
        }
        setShowModal(true);
    };

    const handleSubmit = () => {
        if (!form.clientId || !form.amount) return toast.error("Fill required fields");
        const payload = {
            clientId: form.clientId,
            orderId: (formType === "PAYMENT" && form.orderId) ? form.orderId : undefined,
            type: formType,
            amount: parseFloat(form.amount),
            paymentDate: form.paymentDate,
            paymentMethod: form.paymentMethod,
            notes: form.notes || undefined,
        };
        if (editing) {
            updateMut.mutate({ id: editing.id, data: { amount: payload.amount, paymentDate: payload.paymentDate, paymentMethod: payload.paymentMethod, notes: payload.notes } });
        } else {
            createMut.mutate(payload);
        }
    };

    const downloadInvoice = (payment: any) => {
        const order = payment.order;
        const isAdvance = payment.type === 'ADVANCE';
        const lines = [
            "═══════════════════════════════════",
            "          RD INTERLOCK",
            `         ${isAdvance ? 'ADVANCE RECEIPT' : 'PAYMENT INVOICE'}`,
            "═══════════════════════════════════",
            "",
            `Client: ${payment.client?.name}`,
            `Date: ${new Date(payment.paymentDate).toLocaleDateString()}`,
            `Payment Method: ${payment.paymentMethod}`,
            "",
            "───────────────────────────────────",
            !isAdvance && order ? `Order: ${order.brickType?.size || "N/A"} × ${order.quantity || 0} pcs` : (isAdvance ? "Advance Payment" : "General Payment"),
            !isAdvance && order ? `Order Total: ₹${order.totalAmount?.toLocaleString()}` : "",
            `Amount Paid: ₹${payment.amount.toLocaleString()}`,
            payment.notes ? `Notes: ${payment.notes}` : "",
            "",
            "═══════════════════════════════════",
            "        Thank you for your",
            "           business!",
            "═══════════════════════════════════",
        ].filter(Boolean).join("\n");

        const blob = new Blob([lines], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `receipt_${payment.client?.name}_${new Date(payment.paymentDate).toISOString().split("T")[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success("📄 Document downloaded");
    };

    const filteredPayments = useMemo(() => {
        let result = payments;
        if (typeFilter === "PAYMENT") result = result.filter((p: any) => p.type === "PAYMENT");
        if (typeFilter === "ADVANCE") result = result.filter((p: any) => p.type === "ADVANCE");
        return result;
    }, [payments, typeFilter]);

    // Summaries
    const totalReceived = payments.filter((p: any) => p.type === "PAYMENT" && p.paymentMethod !== "ADVANCE_APPLIED").reduce((s: number, p: any) => s + p.amount, 0);
    const totalAdvance = payments.filter((p: any) => p.type === "ADVANCE").reduce((s: number, p: any) => s + p.amount, 0);

    return (
        <MobileFormLayout title="Client Ledger" subtitle="Payment & Advance tracking">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-center">
                    <p className="text-[10px] sm:text-xs text-green-600 font-medium">Total Received</p>
                    <p className="text-base sm:text-lg font-bold text-green-700">₹{totalReceived.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
                    <p className="text-[10px] sm:text-xs text-blue-600 font-medium">Total Advance</p>
                    <p className="text-base sm:text-lg font-bold text-blue-700">₹{totalAdvance.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-center">
                    <p className="text-[10px] sm:text-xs text-purple-600 font-medium">Transactions</p>
                    <p className="text-base sm:text-lg font-bold text-purple-700">{payments.length}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <button onClick={() => openModal("PAYMENT")} className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                    <Plus className="h-4 w-4" /> Add Payment
                </button>
                <button onClick={() => openModal("ADVANCE")} className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
                    <Plus className="h-4 w-4" /> Add Advance
                </button>
            </div>

            {/* Filter */}
            <div className="flex gap-2 mb-4">
                <select value={filterClient} onChange={(e) => setFilterClient(e.target.value)} className="flex-1 h-10 px-3 bg-card border border-border rounded-xl text-sm">
                    <option value="">All Clients</option>
                    {clients.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="flex-1 h-10 px-3 bg-card border border-border rounded-xl text-sm">
                    <option value="ALL">All Transactions</option>
                    <option value="PAYMENT">Payments</option>
                    <option value="ADVANCE">Advances</option>
                </select>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-primary/40" /></div>
            ) : filteredPayments.length === 0 ? (
                <p className="text-center text-muted-foreground text-sm py-8">No records found</p>
            ) : (
                <div className="space-y-2">
                    {filteredPayments.map((p: any) => (
                        <div key={p.id} className="p-3 bg-card border border-border rounded-xl relative overflow-hidden">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold">₹{p.amount.toLocaleString()}</h3>
                                        <span className={cn(
                                            "flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase",
                                            p.type === 'ADVANCE' ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                                        )}>
                                            <Tag className="w-3 h-3" />
                                            {p.type === 'ADVANCE' ? 'Advance' : (p.paymentMethod === 'ADVANCE_APPLIED' ? 'Advance Applied' : 'Payment')}
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground">{p.client?.name}</p>
                                    <p className="text-[11px] text-muted-foreground mt-0.5 flex flex-wrap gap-1">
                                        <span>{p.paymentMethod}</span> | <span>{new Date(p.paymentDate).toLocaleDateString()}</span>
                                    </p>
                                    {p.order && <p className="text-[11px] text-muted-foreground mt-0.5">Order: {p.order.brickType?.size}</p>}
                                    {p.notes && <p className="text-[11px] text-muted-foreground italic mt-0.5 bg-secondary/50 p-1.5 rounded-md">{p.notes}</p>}
                                </div>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => downloadInvoice(p)} className="p-2 rounded-lg hover:bg-secondary" title="Download Document">
                                        <Download className="h-4 w-4 text-blue-500" />
                                    </button>
                                    {p.paymentMethod !== 'ADVANCE_APPLIED' && (
                                        <button onClick={() => openModal(p.type, p)} className="p-2 rounded-lg hover:bg-secondary"><Edit2 className="h-4 w-4 text-amber-500" /></button>
                                    )}
                                    <button onClick={() => deleteMut.mutate(p.id)} className="p-2 rounded-lg hover:bg-secondary"><Trash2 className="h-4 w-4 text-red-500" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-card rounded-2xl p-6 w-full max-w-md border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">
                                {editing ? (formType === 'ADVANCE' ? "Edit Advance" : "Edit Payment") : (formType === 'ADVANCE' ? "Add Advance" : "Add Payment")}
                            </h2>
                            <button onClick={() => { setShowModal(false); resetForm(); }}><X className="h-5 w-5" /></button>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <select value={form.clientId} onChange={(e) => setForm({ ...form, clientId: e.target.value, orderId: "" })} className="w-full h-11 px-3 bg-secondary/50 border border-border rounded-xl text-sm">
                                    <option value="">Select Client *</option>
                                    {clients.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                                {form.clientId && (
                                    <div className="text-xs text-muted-foreground bg-secondary/30 p-2 rounded-lg border border-border/50">
                                        {(() => {
                                            const c: any = clients.find((x: any) => x.id === form.clientId);
                                            if (!c) return null;
                                            return (
                                                <div className="flex justify-between font-medium">
                                                    <span>Order Total: <span className="text-foreground">₹{c.totalOrderAmount?.toLocaleString() || 0}</span></span>
                                                    <span>Advance: <span className="text-foreground">₹{c.advanceBalance?.toLocaleString() || 0}</span></span>
                                                    <span>Pending: <span className="text-destructive font-bold">₹{c.pendingAmount?.toLocaleString() || 0}</span></span>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                )}
                            </div>
                            {formType === "PAYMENT" && form.clientId && orders.length > 0 && (
                                <select value={form.orderId} onChange={(e) => setForm({ ...form, orderId: e.target.value })} className="w-full h-11 px-3 bg-secondary/50 border border-border rounded-xl text-sm">
                                    <option value="">Link to Order (optional)</option>
                                    {orders.map((o: any) => <option key={o.id} value={o.id}>{o.brickType?.size} — {o.quantity} pcs — ₹{o.totalAmount?.toLocaleString()} ({o.status})</option>)}
                                </select>
                            )}
                            {formType === "PAYMENT" && form.clientId && (
                                <p className="text-xs text-muted-foreground mt-1 px-1">If client has Advance Balance, it will be automatically applied to the order.</p>
                            )}
                            <input value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} type="number" placeholder="Amount (₹) *" className="w-full h-11 px-3 bg-secondary/50 border border-border rounded-xl text-sm" />
                            <input value={form.paymentDate} onChange={(e) => setForm({ ...form, paymentDate: e.target.value })} type="date" className="w-full h-11 px-3 bg-secondary/50 border border-border rounded-xl text-sm" />
                            <select value={form.paymentMethod} onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })} className="w-full h-11 px-3 bg-secondary/50 border border-border rounded-xl text-sm">
                                {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m.replace("_", " ")}</option>)}
                            </select>
                            <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Notes" rows={3} className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-xl text-sm resize-none" />
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button onClick={() => { setShowModal(false); resetForm(); }} className="flex-1 h-11 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors">Cancel</button>
                            <button onClick={handleSubmit} disabled={createMut.isPending || updateMut.isPending} className={cn("flex-1 h-11 rounded-xl text-white text-sm font-semibold transition-colors disabled:opacity-50", formType === 'ADVANCE' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-primary hover:bg-primary/90')}>
                                {(createMut.isPending || updateMut.isPending) ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : editing ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MobileFormLayout>
    );
};

export default ClientLedgerPage;
