import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "default" | "destructive";
}

export const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "destructive",
}: ConfirmModalProps) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="max-w-[400px] border-none bg-background/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6">
                <AlertDialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-2xl ${variant === 'destructive' ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                            <AlertTriangle className={`h-5 w-5 ${variant === 'destructive' ? 'text-red-500' : 'text-primary'}`} />
                        </div>
                        <AlertDialogTitle className="text-xl font-bold tracking-tight">
                            {title}
                        </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-6 gap-3">
                    <AlertDialogCancel
                        onClick={onClose}
                        className="flex-1 h-12 rounded-2xl border-none bg-secondary/50 text-foreground font-bold hover:bg-secondary transition-all"
                    >
                        {cancelText}
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={(e) => {
                            e.preventDefault();
                            onConfirm();
                            onClose();
                        }}
                        className={`flex-1 h-12 rounded-2xl font-bold shadow-lg transition-all ${variant === "destructive"
                                ? "bg-red-500 text-white hover:bg-red-600 shadow-red-500/20"
                                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20"
                            }`}
                    >
                        {confirmText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
