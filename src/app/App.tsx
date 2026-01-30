import { useEffect } from 'react';
import { RouterProvider, useNavigate } from 'react-router';
import { router } from '@/app/routes';
import { UserProvider, useUser } from '@/app/contexts/UserContext';
import { Toaster } from '@/app/components/ui/sonner';

function AppContent() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
