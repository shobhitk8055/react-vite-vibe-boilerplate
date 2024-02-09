import { CommonRoutes } from "@/features/common";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from '@/vibe/components';

const CommonLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="h-90-vh w-100 d-flex align-items-center justify-content-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const commonRoutes = [
  {
    path: "/*",
    element: <CommonLayout />,
    children: CommonRoutes,
  },
];
