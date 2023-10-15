import { UserRoutes } from '@/features/user';

export const protectedRoutes = [
  {
    path: '/admin/*',
    element: <UserRoutes />
  },
];
