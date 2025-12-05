'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { saveToken } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { API_BASE } from '@/lib/config';
import { FormEvent } from 'react';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || 'Login failed');
      return;
    }

    saveToken(data.accessToken);
    router.push('/dashboard');
  }

  return (
    // Aesthetic Background: Dark base with a vibrant blue-purple gradient
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <Card className="w-full max-w-sm p-6 bg-gray-800 border border-indigo-500 shadow-2xl text-white">
        <CardContent>
          <div className="flex items-center justify-center mb-6">
             <LogIn className="h-6 w-6 text-indigo-400 mr-2" />
             <h1 className="text-2xl font-bold">Sign In</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Note: Assuming your Input component is styled for dark mode */}
            <Input 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500"
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <Button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" 
              type="submit"
            >
              Log In
            </Button>
          </form>
          <Button 
            variant="link" 
            className="mt-4 w-full text-indigo-400 hover:text-indigo-300" 
            onClick={() => router.push('/register')}
          >
            Create an Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}