'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';
import { User, fakeUsers } from '@/constants/mock-api';
import { columns } from './columns';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { parseAsInteger } from 'nuqs';

export function UserTable() {
  const [data, setData] = useState<User[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const searchParams = useSearchParams();
  const page = parseAsInteger.parse(searchParams.get('page') ?? '1') ?? 1;
  const perPage =
    parseAsInteger.parse(searchParams.get('perPage') ?? '10') ?? 10;
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    fakeUsers
      .getUsers({ page: page, limit: perPage, search })
      .then((result) => {
        setData(result.users);
        setTotalItems(result.total_users);
      });
  }, [page, perPage, search]);

  const pageCount = Math.ceil(totalItems / perPage);

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    shallow: false,
    debounceMs: 500
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
}
