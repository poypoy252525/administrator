import React, { ReactNode } from "react";

const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-2xl font-medium py-4 leading-none">{children}</span>
  );
};

export default PageHeader;
