"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export type Column<T> = {
  title: string;
  render: (row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
};

type GenericTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  getRowKey: (row: T) => string | number;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
};

export function GenericTable<T>({
  columns,
  data,
  loading = false,
  emptyMessage = "No records found.",
  getRowKey,
  selectable = false,
  onSelectionChange,
}: GenericTableProps<T>) {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const allSelected =
    data.length > 0 &&
    data.every((row) => selectedIds.includes(getRowKey(row)));

  const someSelected = data.some((row) =>
    selectedIds.includes(getRowKey(row))
  );

  // Select or deselect one row
  const handleRowSelect = (id: string | number, checked: boolean) => {
    const updatedIds = checked
      ? [...selectedIds, id]
      : selectedIds.filter((selectedId) => selectedId !== id);

    setSelectedIds(updatedIds);
    onSelectionChange?.(updatedIds);
  };

  // Select or deselect all visible rows
  const handleSelectAll = (checked: boolean) => {
    const visibleIds = data.map(getRowKey);

    const updatedIds = checked
      ? [...new Set([...selectedIds, ...visibleIds])]
      : selectedIds.filter((id) => !visibleIds.includes(id));

    setSelectedIds(updatedIds);
    onSelectionChange?.(updatedIds);
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">

              {selectable && (
                <TableHead className="w-12 px-5">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={(checked) =>
                      handleSelectAll(checked === true)
                    }
                    aria-label="Select all rows"
                  />
                </TableHead>
              )}

              {columns.map((column, index) => (
                <TableHead
                  key={column.title + index}
                  className={`
                    h-12 px-5 text-xs font-semibold uppercase
                    tracking-wider text-muted-foreground whitespace-nowrap
                    ${column.headerClassName ?? ""}
                  `}
                >
                  {column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="h-32 text-center"
                >
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <span className="text-sm">Loading records...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="h-36 text-center"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <span className="text-lg text-muted-foreground">—</span>
                    </div>
                    <p className="text-sm font-medium">{emptyMessage}</p>
                    <p className="text-xs text-muted-foreground">
                      Try again later or add a new record.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row) => {
                const id = getRowKey(row);

                return (
                  <TableRow
                    key={id}
                    className="border-b border-border/50 transition-colors duration-200 hover:bg-muted/30 last:border-0"
                  >
                    {selectable && (
                      <TableCell className="px-5 py-4">
                        <Checkbox
                          checked={selectedIds.includes(id)}
                          onCheckedChange={(checked) =>
                            handleRowSelect(id, checked === true)
                          }
                          aria-label={`Select row ${id}`}
                        />
                      </TableCell>
                    )}

                    {columns.map((column, index) => (
                      <TableCell
                        key={column.title + index}
                        className={`
                          px-5 py-4 text-sm whitespace-nowrap
                          ${column.className ?? ""}
                        `}
                      >
                        {column.render(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}