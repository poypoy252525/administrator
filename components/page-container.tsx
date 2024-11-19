import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col container max-w-screen-lg mx-auto">
      {children}
    </div>
  );
};

export default PageContainer;
