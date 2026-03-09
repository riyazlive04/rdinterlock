import { useState, useMemo } from "react";
import { format } from "date-fns";
import { MobileFormLayout } from "@/components/MobileFormLayout";
import { ActionButton } from "@/components/ActionButton";
import { StatusBadge } from "@/components/StatusBadge";
import { useQuery } from "@tanstack/react-query";
import { dispatchApi } from "@/api/dispatch.api";
import { clientsApi } from "@/api/clients.api";
import { Search, Truck, Calendar, User, MapPin, CheckCircle2, IndianRupee, Loader2, X, CreditCard } from "lucide-react";

/**
 * Client History Page
 * Shows clients that satisfy BOTH conditions:
 *  1. Have at least one dispatched or completed order
 *  2. No pending amount (full payment has been received)
 */
const ClientHistoryPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClient, setSelectedClient] = useState<any>(null);

    // ─── Queries ───────────────────────────────────────────────────────────────

    // All clients with financial summaries (pendingAmount, totalPaid, etc.)
    const { data: allClients = [], isLoading: isLoadingClients } = useQuery({
        queryKey: ["clients"],
        queryFn: () => clientsApi.getAll(),
    });

    // DISPATCHED schedules → to know which clients have been dispatched (but not yet completed)
    const { data: dispatchedSchedules = [], isLoading: isLoadingSchedules } = useQuery({
        queryKey: ["dispatch-schedules", { status: "DISPATCHED" }],
        queryFn: () => clientsApi.getAllSchedules({ status: "DISPATCHED" }),
    });

    // COMPLETED dispatches → to know which clients have been fully completed
    const { data: completedDispatches = [], isLoading: isLoadingDispatches } = useQuery({
        queryKey: ["dispatches-completed"],
        queryFn: () => dispatchApi.getAll({ status: "Completed" }),
    });

    const isLoading = isLoadingClients || isLoadingSchedules || isLoadingDispatches;

    // ─── Build set of dispatched/completed client IDs ──────────────────────────

    const dispatchedClientIds = useMemo(() => {
        const ids = new Set<string>();
        // From DISPATCHED DispatchSchedule records (clientId)
        (dispatchedSchedules as any[]).forEach((s: any) => {
            if (s.clientId) ids.add(s.clientId);
        });
        // From COMPLETED Dispatch records (customerId)
        (completedDispatches as any[]).forEach((d: any) => {
            if (d.customerId) ids.add(d.customerId);
        });
        return ids;
    }, [dispatchedSchedules, completedDispatches]);

    // ─── Filter logic ───────────────────────────────────────────────────────────
    // Show clients who:
    //   1. Are in the dispatched/completed set
    //   2. Have pendingAmount <= 0 (fully paid)
    //   3. Match the search term (by name or location)

    const historyClients = useMemo(() => {
        return (allClients as any[]).filter((c: any) => {
            const isDispatched = dispatchedClientIds.has(c.id);
            const isFullyPaid = (c.pendingAmount ?? 0) <= 0;

            const searchLower = searchTerm.toLowerCase();
            const nameMatch = c.name?.toLowerCase().includes(searchLower);
            const locationMatch = c.address?.toLowerCase().includes(searchLower);
            const searchMatch = !searchTerm || nameMatch || locationMatch;

            return isDispatched && isFullyPaid && searchMatch;
        });
    }, [allClients, dispatchedClientIds, searchTerm]);

    // ─── Build dispatch details for currently selected client (for modal) ──────
    const selectedClientDispatches = useMemo(() => {
        if (!selectedClient) return [];
        const fromSchedules = (dispatchedSchedules as any[]).filter(
            (s: any) => s.clientId === selectedClient.id
        ).map((s: any) => ({
            brickSize: s.brickType?.size ?? '—',
            quantity: s.quantity,
            driver: s.driver?.name ?? null,
            notes: s.notes ?? null,
            date: s.dispatchDate,
            status: 'Dispatched',
        }));
        const fromDispatches = (completedDispatches as any[]).filter(
            (d: any) => d.customerId === selectedClient.id
        ).map((d: any) => ({
            brickSize: d.brickType?.size ?? '—',
            quantity: d.quantity,
            driver: d.driver?.name ?? null,
            notes: d.notes ?? null,
            date: d.date,
            status: 'Completed',
        }));
        return [...fromSchedules, ...fromDispatches].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }, [selectedClient, dispatchedSchedules, completedDispatches]);

    return (
        <MobileFormLayout title="Client History" subtitle="Dispatched clients with full payment received">
            {/* Search */}
            <div className="relative mb-5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search by client name or location..."
                    className="w-full h-11 pl-10 pr-10 bg-secondary/50 border border-border rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full"
                    >
                        <X className="h-3 w-3 text-muted-foreground" />
                    </button>
                )}
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin mb-4 text-primary/40" />
                    <p className="text-sm">Loading client history...</p>
                </div>
            ) : historyClients.length === 0 ? (
                <div className="text-center py-20 bg-secondary/20 rounded-3xl border border-dashed border-border">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground/20 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground font-medium">No completed history yet</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                        Clients appear here when dispatched AND fully paid
                    </p>
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="mt-4 text-xs font-semibold text-primary"
                        >
                            Clear search
                        </button>
                    )}
                </div>
            ) : (
                <div className="space-y-3">
                    {historyClients.map((client: any) => (
                        <div
                            key={client.id}
                            onClick={() => setSelectedClient(client)}
                            className="p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                        >
                            {/* Header row */}
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <h3 className="font-bold text-sm text-foreground">{client.name}</h3>
                                        <StatusBadge label="Fully Paid" variant="success" className="text-[9px] px-1.5 py-0" />
                                    </div>
                                    {client.address && (
                                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                            <MapPin className="h-3 w-3 shrink-0" />
                                            <span>{client.address}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Total Paid</p>
                                    <p className="text-sm font-bold text-green-600">₹{(client.totalPaid ?? 0).toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Financial metrics */}
                            <div className="grid grid-cols-3 gap-2 p-3 bg-secondary/30 rounded-xl border border-border">
                                <div className="text-center">
                                    <p className="text-[10px] text-muted-foreground mb-0.5">Order Value</p>
                                    <p className="text-xs font-bold text-foreground">₹{(client.totalOrderAmount ?? 0).toLocaleString()}</p>
                                </div>
                                <div className="text-center border-x border-border">
                                    <p className="text-[10px] text-muted-foreground mb-0.5">Payment Done</p>
                                    <p className="text-xs font-bold text-green-600">₹{(client.totalPaid ?? 0).toLocaleString()}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[10px] text-muted-foreground mb-0.5">Pending</p>
                                    <p className="text-xs font-bold text-green-500">₹0</p>
                                </div>
                            </div>

                            {/* Latest payment info */}
                            {client.latestPaymentDate && (
                                <div className="flex items-center gap-2 mt-2.5 text-[11px] text-muted-foreground">
                                    <CreditCard className="h-3 w-3" />
                                    <span>Last paid: {format(new Date(client.latestPaymentDate), "dd MMM yyyy")} • {client.latestPaymentMethod || "N/A"}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Client Detail Modal */}
            {selectedClient && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setSelectedClient(null)}
                >
                    <div
                        className="bg-card rounded-3xl w-full max-w-md border border-border shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 bg-green-500/5 border-b border-green-500/10 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                            </div>
                            <div>
                                <h2 className="font-bold text-base">{selectedClient.name}</h2>
                                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mt-0.5">
                                    Fully Settled Client
                                </p>
                            </div>
                        </div>

                        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                            {/* Location */}
                            {selectedClient.address && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                                    <span>{selectedClient.address}</span>
                                </div>
                            )}

                            {/* Financial Summary */}
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Financial Summary</p>
                                <div className="p-4 bg-green-500/5 rounded-2xl border border-green-500/10 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Total Order Value</span>
                                        <span className="font-bold">₹{(selectedClient.totalOrderAmount ?? 0).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-t border-green-500/10 pt-2">
                                        <span className="text-muted-foreground">Total Payment Received</span>
                                        <span className="font-bold text-green-600">₹{(selectedClient.totalPaid ?? 0).toLocaleString()}</span>
                                    </div>
                                    {(selectedClient.advanceBalance ?? 0) > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Advance Applied</span>
                                            <span className="font-bold text-blue-600">₹{(selectedClient.advanceBalance ?? 0).toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm font-semibold border-t border-green-500/10 pt-2">
                                        <span className="text-green-700">Balance Due</span>
                                        <span className="text-green-600 font-bold">₹0 — Fully Settled ✓</span>
                                    </div>
                                </div>
                            </div>

                            {/* Order / Dispatch Details */}
                            {selectedClientDispatches.length > 0 && (
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Order Details</p>
                                    <div className="space-y-2">
                                        {selectedClientDispatches.map((d: any, i: number) => (
                                            <div key={i} className="p-3 bg-secondary/30 rounded-xl border border-border space-y-1.5">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Truck className="h-3.5 w-3.5 text-primary shrink-0" />
                                                        <span className="text-sm font-semibold">{d.brickSize}</span>
                                                    </div>
                                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${d.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                                        }`}>{d.status}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground pl-5">
                                                    <span>📦 {(d.quantity ?? 0).toLocaleString()} pcs</span>
                                                    {d.driver && <span>🚗 Driver: <span className="font-medium text-foreground">{d.driver}</span></span>}
                                                    <span>📅 {format(new Date(d.date), 'dd MMM yyyy')}</span>
                                                </div>
                                                {d.notes && (
                                                    <p className="text-xs text-muted-foreground italic pl-5 border-l-2 border-primary/20">📝 {d.notes}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Last Payment */}
                            {selectedClient.latestPaymentDate && (
                                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl border border-border text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>Last Payment</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-foreground">{format(new Date(selectedClient.latestPaymentDate), "dd MMM yyyy")}</p>
                                        <p className="text-[10px] text-muted-foreground">{selectedClient.latestPaymentMethod}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-secondary/10 border-t border-border">
                            <button
                                onClick={() => setSelectedClient(null)}
                                className="w-full h-10 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MobileFormLayout>
    );
};

export default ClientHistoryPage;
