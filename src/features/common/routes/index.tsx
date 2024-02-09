import { lazyImport } from "@/lib/lazyImport";

const { Landing } = lazyImport(() => import("./Landing"), "Landing");
const { Users } = lazyImport(() => import("./Users"), "Users");

export const CommonRoutes = [
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "users",
    element: <Users />,
  },
];
