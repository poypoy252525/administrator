import PageContainer from "@/components/page-container";
import PageHeader from "@/components/page-header";
import React from "react";
import Admission from "./admission/Admission";

const DashboardPage = () => {
  return (
    <PageContainer>
      <PageHeader>Dashboard</PageHeader>
      <Admission />
    </PageContainer>
  );
};

export default DashboardPage;
