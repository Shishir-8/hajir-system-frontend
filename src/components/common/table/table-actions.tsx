"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Edit, Eye, MoreHorizontalIcon, Trash } from "lucide-react";
import DeleteModal from "../modal/delete-modal";
import { useRouter } from "next/navigation";

interface Props<T> {
  item: T;
  onDelete: (item: T) => Promise<unknown>;
  queryKey: string[];
  editUrl: string;
  viewUrl: string;
}

const TableAction = <T, >({
  item,
  onDelete,
  queryKey,
  editUrl,
  viewUrl,
}: Props<T>) => {

  const [openDelete, setOpenDelete] = useState(false);
  const router = useRouter()

  const handleEdit = () => {
    console.log("Edit url", editUrl)
    router.push(editUrl)
  }

  const handleView = () => {
    console.log("View url", viewUrl)
    router.push(viewUrl)
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontalIcon />
              <span className="sr-only">Open menu</span>
            </Button>
          }
        />

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleView}>
            <Eye /> View
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleEdit}>
            <Edit /> Edit
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            variant="destructive"
            onClick={() => setOpenDelete(true)}
          >
            <Trash /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteModal
        open={openDelete}
        onOpenChange={setOpenDelete}
        onDelete={() => onDelete(item)}
        queryKey={queryKey}
      />
    </>
  );
};

export default TableAction;