import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export function AdminOverview() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>+1,234</div>
          <p className='text-muted-foreground text-xs'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>+5,467</div>
          <p className='text-muted-foreground text-xs'>
            +12.2% from last month
          </p>
        </CardContent>
      </Card>
      {/* Add more cards as needed */}
    </div>
  );
}
