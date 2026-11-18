
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DeleteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => Promise<unknown>;
  queryKey: string[];
}

const DeleteModal = ({
  open,
  onOpenChange,
  onDelete,
  queryKey,
}: DeleteModalProps) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: onDelete,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey,
      });

      onOpenChange(false);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle className="size-6" />
          </div>

          <DialogTitle className="text-lg font-semibold">
            Delete this record?
          </DialogTitle>

          <DialogDescription className="text-sm leading-6">
            Are you sure you want to delete this record?
            This action is permanent and cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4 sm:justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={deleteMutation.isPending}
          >
            Cancel
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
          >
            <Trash2 className="mr-2 size-4" />

            {deleteMutation.isPending
              ? "Deleting..."
              : "Yes, Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
