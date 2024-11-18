import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-1 flex-col">{children}</div>;
};

export default PageContainer;
