'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';
import { Brand, columns } from './columns';

// Placeholder data - you'll replace this with a real data fetch
const data: Brand[] = [
  { id: '1', name: 'Acme Inc.', createdAt: new Date().toISOString() },
  { id: '2', name: 'Stark Industries', createdAt: new Date().toISOString() },
  { id: '3', name: 'Wayne Enterprises', createdAt: new Date().toISOString() }
];

export function BrandsTable() {
  const { table } = useDataTable({
    data,
    columns,
    pageCount: 1, // You'll want to calculate this based on total items
    shallow: false
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
}
