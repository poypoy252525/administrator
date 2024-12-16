import PageContainer from "@/components/page-container";
import Content from "./Content";

const page = () => {
  return (
    <PageContainer>
      <span className="text-2xl font-medium py-4">New Exam</span>
      <Content />
    </PageContainer>
  );
};

export default page;
