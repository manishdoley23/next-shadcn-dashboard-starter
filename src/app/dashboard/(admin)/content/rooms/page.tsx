import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function RoomsPage() {
  return (
    <PageContainer>
      <div className='flex items-center justify-between'>
        <Heading title='Rooms' description='Manage all rooms in the system.' />
        <Button>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      {/* Placeholder for RoomsTable */}
    </PageContainer>
  );
}
