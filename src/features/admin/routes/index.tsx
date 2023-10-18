import { lazyImport } from "@/lib/lazyImport";

const { Dashboard } = lazyImport(() => import("./Dashboard"), "Dashboard");

export const AdminRoutes = [
  {
    path: "",
    element: <Dashboard />,
  },
];
