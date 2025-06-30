'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Item } from '@/types/item';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'itemImage',
    header: 'Image',
    cell: ({ row }) => {
      const itemImage = row.getValue('itemImage') as string[] | undefined;
      const imageUrl = itemImage?.[0] || '/file.svg'; // Using a valid placeholder
      return (
        <div className='relative flex h-16 w-16 items-center'>
          <Image
            src={imageUrl}
            alt={row.original.itemName}
            fill
            sizes='(max-width: 64px) 100vw, 64px'
            className='rounded-md object-cover'
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'itemName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => <div>{row.getValue('itemName')}</div>
  },
  {
    accessorFn: (row) => row.category.name,
    id: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Category' />
    ),
    cell: ({ cell }) => {
      return (
        <Badge variant='outline' className='capitalize'>
          {cell.getValue<string>()}
        </Badge>
      );
    }
  },
  {
    accessorFn: (row) => row.brand.name,
    id: 'brand',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Brand' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<string>()}</div>
  },
  {
    accessorFn: (row) => row.room.name,
    id: 'room',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Room' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<string>()}</div>
  },
  {
    accessorKey: 'warrantyStatus',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Warranty' />
    ),
    cell: ({ row }) => {
      const status = row.getValue('warrantyStatus') as Item['warrantyStatus'];
      const variant: 'outline' | 'secondary' | 'destructive' =
        status === 'Active'
          ? 'outline'
          : status === 'Expired'
            ? 'destructive'
            : 'secondary';
      return (
        <Badge variant={variant} className='capitalize'>
          {status}
        </Badge>
      );
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
