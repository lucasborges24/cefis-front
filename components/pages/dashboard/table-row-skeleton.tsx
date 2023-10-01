import { TableCell, TableRow } from "@/components/ui/table";

export function TableRowSkeleton() {
  return (
    <TableRow>
      <TableCell className="h-24 bg-gray-300 animate-pulse" colSpan={10} />
    </TableRow>
  );
}
