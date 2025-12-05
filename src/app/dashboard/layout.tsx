'use client';

import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Zap, LogOut } from 'lucide-react';

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const token = getToken();

  if (!token) {
    router.push('/login');
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push('/login');
  }

  return (
    <div className="min-h-screen bg-gray-950 text-blue p-6 sm:p-10">
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
        
        <div className="flex items-center">
            <Zap className="h-7 w-7 text-indigo-500 mr-3" />
            <h1 className="text-3xl font-bold text-white">AuthSphere Dashboard</h1>
        </div>
        
        <Button 
          variant="destructive" 
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white flex items-center"
        >
          <LogOut className="h-4 w-8 mr-2" />
          Logout
        </Button>
      </header>
      
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-teal-700 text-red"> 
        {children}
      </div>
    </div>
  );
}