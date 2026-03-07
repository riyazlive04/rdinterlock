import { useState, useMemo } from "react";
import { format } from "date-fns";
import { MobileFormLayout } from "@/components/MobileFormLayout";
import { EntryCard } from "@/components/EntryCard";
import { ActionButton } from "@/components/ActionButton";
import { DatePickerField } from "@/components/DatePickerField";
import { StatusBadge } from "@/components/StatusBadge";
import { useQuery } from "@tanstack/react-query";
import { dispatchApi } from "@/api/dispatch.api";
import { settingsApi } from "@/api/settings.api";
import { Search, Filter, Truck, Calendar, User, MapPin, Hash, Info, Loader2, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const ClientHistoryPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [brickTypeId, setBrickTypeId] = useState("");
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    // Queries
    const { data: dispatches = [], isLoading } = useQuery({
        queryKey: ["dispatches", { startDate, endDate, brickTypeId, status: 'Completed' }],
        queryFn: () => dispatchApi.getAll({
            startDate: startDate?.toISOString(),
            endDate: endDate?.toISOString(),
            brickTypeId: brickTypeId || undefined,
            status: 'Completed'
        }),
    });

    const { data: metaData } = useQuery({
        queryKey: ["form-metadata"],
        queryFn: () => settingsApi.getFormMetadata(),
    });

    const filteredDispatches = useMemo(() => {
        return dispatches.filter((d: any) => {
            const searchMatch =
                d.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                d.customer?.name.toLowerCase().includes(searchTerm.toLowerCase());
            return searchMatch;
        });
    }, [dispatches, searchTerm]);

    return (
        <MobileFormLayout title="Client History" subtitle="History of all completed deliveries">
            {/* Search & Basic Filters */}
            <div className="space-y-3 mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search Dispatch ID or Client..."
                        className="w-full h-11 pl-10 pr-4 bg-secondary/50 border border-border rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
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

                <div className="grid grid-cols-2 gap-2">
                    <DatePickerField
                        label="From Date"
                        date={startDate || new Date()}
                        onDateChange={setStartDate}
                    />
                    <DatePickerField
                        label="To Date"
                        date={endDate || new Date()}
                        onDateChange={setEndDate}
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    <ActionButton
                        label="All Sizes"
                        variant="outline"
                        size="sm"
                        active={brickTypeId === ""}
                        onClick={() => setBrickTypeId("")}
                        className="shrink-0"
                    />
                    {metaData?.brickTypes.map((type: any) => (
                        <ActionButton
                            key={type.id}
                            label={type.size}
                            variant="outline"
                            size="sm"
                            active={brickTypeId === type.id}
                            onClick={() => setBrickTypeId(type.id)}
                            className="shrink-0"
                        />
                    ))}
                </div>
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin mb-4 text-primary/40" />
                    <p className="text-sm">Loading dispatches...</p>
                </div>
            ) : filteredDispatches.length === 0 ? (
                <div className="text-center py-20 bg-secondary/20 rounded-3xl border border-dashed border-border">
                    <Truck className="h-12 w-12 text-muted-foreground/20 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">No client history found</p>
                    {(searchTerm || startDate || brickTypeId) && (
                        <button
                            onClick={() => { setSearchTerm(""); setStartDate(undefined); setEndDate(undefined); setBrickTypeId(""); }}
                            className="mt-4 text-xs font-semibold text-primary"
                        >
                            Clear all filters
                        </button>
                    )}
                </div>
            ) : (
                <div className="space-y-3">
                    {filteredDispatches.map((d: any) => (
                        <div
                            key={d.id}
                            onClick={() => setSelectedOrder(d)}
                            className="p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="space-y-0.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase">#{d.id.slice(0, 8)}</span>
                                        <StatusBadge label="Completed" variant="success" className="text-[9px] px-1.5 py-0" />
                                    </div>
                                    <h3 className="font-bold text-sm text-foreground">{d.customer?.name}</h3>
                                </div>
                                <p className="text-xs font-semibold text-primary">₹{d.totalAmount.toLocaleString()}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    <span>{format(new Date(d.date), "dd MMM yyyy")}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                    <Truck className="h-3 w-3" />
                                    <span>{d.quantity.toLocaleString()} • {d.brickType?.size}</span>
                                </div>
                                {d.location && (
                                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground col-span-2">
                                        <MapPin className="h-3 w-3 shrink-0" />
                                        <span className="truncate">{d.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Detail View Modal */}
            <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
                <DialogContent className="max-w-sm rounded-3xl p-0 overflow-hidden border-none bg-background shadow-2xl">
                    <DialogHeader className="p-6 bg-primary/5 border-b border-primary/10">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <Truck className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <DialogTitle className="text-lg">Order Details</DialogTitle>
                                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mt-0.5">
                                    ID: #{selectedOrder?.id.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <User className="h-3 w-3" /> Client
                                </p>
                                <p className="text-sm font-bold">{selectedOrder?.customer?.name}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <Calendar className="h-3 w-3" /> Date
                                </p>
                                <p className="text-sm font-bold">
                                    {selectedOrder?.date && format(new Date(selectedOrder.date), "dd MMM yyyy")}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Dispatch Info</p>
                            <div className="p-4 bg-secondary/30 rounded-2xl border border-border space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Brick Size</span>
                                    <span className="font-bold">{selectedOrder?.brickType?.size}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Quantity</span>
                                    <span className="font-bold text-primary">{selectedOrder?.quantity.toLocaleString()} pcs</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Vehicle Number</span>
                                    <span className="font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-lg">
                                        {selectedOrder?.vehicleNumber || "Not Recorded"}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Driver</span>
                                    <span className="font-bold">{selectedOrder?.driver?.name || "Not Recorded"}</span>
                                </div>
                            </div>
                        </div>

                        {selectedOrder?.location && (
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground flex items-center gap-1.5">
                                    <MapPin className="h-3 w-3" /> Delivery Location
                                </p>
                                <div className="p-4 bg-secondary/30 rounded-2xl border border-border text-xs leading-relaxed">
                                    {selectedOrder.location}
                                </div>
                            </div>
                        )}

                        <div className="space-y-3">
                            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Financial Summary</p>
                            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Order Value</span>
                                    <span className="font-bold">₹{selectedOrder?.totalAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pt-2 border-t border-primary/10">
                                    <span className="text-muted-foreground">Amount Received</span>
                                    <span className="font-bold text-success">₹{selectedOrder?.paidAmount.toLocaleString()}</span>
                                </div>
                                {selectedOrder?.totalAmount - selectedOrder?.paidAmount > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Pending Balance</span>
                                        <span className="font-bold text-destructive">₹{(selectedOrder.totalAmount - selectedOrder.paidAmount).toLocaleString()}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {selectedOrder?.notes && (
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground flex items-center gap-1.5">
                                    <Info className="h-3 w-3" /> Notes
                                </p>
                                <p className="text-xs text-muted-foreground italic bg-secondary/20 p-3 rounded-xl">
                                    "{selectedOrder.notes}"
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-secondary/10 border-t border-border">
                        <ActionButton
                            label="Close Details"
                            onClick={() => setSelectedOrder(null)}
                            className="w-full"
                            variant="outline"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </MobileFormLayout>
    );
};

export default ClientHistoryPage;
