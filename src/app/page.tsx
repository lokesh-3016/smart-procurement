"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}