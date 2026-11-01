
import React from "react";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
};

type GenericTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  getRowKey: (row: T) => string | number;
};

export function GenericTable<T>({
  columns,
  data,
  loading = false,
  emptyMessage = "No records found.",
  getRowKey,
}: GenericTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted/50 text-muted-foreground">
          <tr>
            {columns.map((column, index) => (
              <th
                key={String(column.key) + index}
                className={`px-4 py-3 font-medium whitespace-nowrap ${
                  column.headerClassName ?? ""
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-muted-foreground"
              >
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-muted-foreground"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={getRowKey(row)}
                className="hover:bg-muted/30 transition-colors"
              >
                {columns.map((column, index) => (
                  <td
                    key={String(column.key) + index}
                    className={`px-4 py-3 whitespace-nowrap ${
                      column.className ?? ""
                    }`}
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key as keyof T] ?? "-")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
