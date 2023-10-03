import * as React from "react";

import logo from "@/assets/logo.png";
import { Link } from "@/components/Elements";
import { Head } from "@/components/Head";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const LoginLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="d-flex flex-column mx-auto w-40 align-content-center justify-content-center py-5">
        <div className="mx-auto">
          <img className="" width="200" src={logo} alt="Workflow" />
        </div>

        <div className="card p-4 m-4">{children}</div>
      </div>
    </>
  );
};
