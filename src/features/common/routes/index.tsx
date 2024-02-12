import { lazyImport } from "@/lib/lazyImport";

const { Landing } = lazyImport(() => import("./Landing/Landing"), "Landing");

export const CommonRoutes = [
  {
    path: "",
    element: <Landing />,
  }
];
