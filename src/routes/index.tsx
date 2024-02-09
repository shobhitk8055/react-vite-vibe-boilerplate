import { Navigate, useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { commonRoutes } from "./common";

import { useUser } from "@/lib/auth";

export const AppRoutes = () => {
  const user = useUser();

  const routes = user.data ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes, ...protectedRoutes]);

  return <>{element}</>;
};
