
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface LeaveActionDialogProps {
  open: boolean;
  action: "approve" | "reject" | null;
  employeeName: string;
  loading?: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const LeaveActionDialog = ({
  open,
  action,
  employeeName,
  loading = false,
  onOpenChange,
  onConfirm,
}: LeaveActionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {action === "approve"
              ? "Approve Leave Request?"
              : "Reject Leave Request?"}
          </DialogTitle>

          <DialogDescription>
            {action === "approve"
              ? `Are you sure you want to approve ${employeeName}'s leave request?`
              : `Are you sure you want to reject ${employeeName}'s leave request?`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            disabled={loading}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            onClick={onConfirm}
            variant={action === "reject" ? "destructive" : "default"}
            className={
              action === "approve"
                ? "bg-primary text-white"
                : ""
            }
          >
            {loading
              ? "Processing..."
              : action === "approve"
                ? "Yes, Approve"
                : "Yes, Reject"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveActionDialog;
