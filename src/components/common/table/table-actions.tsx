import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontalIcon, Trash } from "lucide-react";

const TableAction = () => {
  return (
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
        <DropdownMenuItem>
          <Eye />
          View
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-primary"}>
          <Edit />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Trash />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableAction;
