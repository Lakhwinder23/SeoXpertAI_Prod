"use client"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import config from '@/config';
import { useUser } from '@clerk/nextjs';

export default function Settings() {
  // Always call useUser at the top level, unconditionally
  const { user } = useUser();

  // You can conditionally render content based on config.auth.enabled
  if (!config?.auth?.enabled) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4 pt-5">
        <h2 className="text-3xl font-semibold text-center">
          Authentication is disabled
        </h2>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center min-h-screen px-4 pt-5'>
      <div className="flex flex-col gap-6 w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold tracking-tight border-b pb-4">
          My Profile
        </h2>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" disabled defaultValue={user?.firstName || ""} />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" disabled defaultValue={user?.lastName || ""} />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" disabled defaultValue={user?.emailAddresses?.[0]?.emailAddress || ""} />
          </div>
        </div>
      </div>
    </div>
  );
}
