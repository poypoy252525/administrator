import { AppSidebar } from "@/components/app-sidebar";
import LogoutButton from "@/components/logout-button";
import MainBreadcrumb from "@/components/main-breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 w-full">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <MainBreadcrumb />
          <div className="ms-auto">
            <LogoutButton />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col p-4 flex-grow">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default RootLayout;
