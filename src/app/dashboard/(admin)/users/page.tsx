import { UserTable } from '@/features/users/components/user-tables';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';

export default function UsersPage() {
  return (
    <PageContainer>
      <div className='flex items-center justify-between'>
        <Heading title='Users' description='Manage all users in the system.' />
      </div>
      <UserTable />
    </PageContainer>
  );
}
