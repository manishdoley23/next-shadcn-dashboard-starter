import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { BrandsTable } from '@/features/brands/components/brands-table';

export default function BrandsPage() {
  return (
    <PageContainer>
      <div className='flex items-center justify-between'>
        <Heading
          title='Brands'
          description='Manage all product brands in the system.'
        />
        <Button>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <BrandsTable />
    </PageContainer>
  );
}
