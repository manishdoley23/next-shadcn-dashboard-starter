import { AdminOverview } from '@/features/overview/components/admin-overview';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';

export default function page() {
  return (
    <PageContainer>
      <Heading
        title='Dashboard'
        description='An overview of your application.'
      />
      <AdminOverview />
    </PageContainer>
  );
}
