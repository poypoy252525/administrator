import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  data: string | number;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const SummaryCard = ({ data, title, Icon }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-4xl text-muted-foreground">{data}</span>
          <Icon className="w-10 h-10 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
