import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import { Spinner } from '@/components/Elements';
// import { MainLayout } from '@/components/Layout';
// import { lazyImport } from '@/lib/lazyImport';

const App = () => {
  return (
    <div id="mainlayout">
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <p>Spinner</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const protectedRoutes = [
  {
    path: '/owner',
    element: <App />,
    children: [
      { path: 'users', element: <div /> },
      { path: '', element: <div /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
