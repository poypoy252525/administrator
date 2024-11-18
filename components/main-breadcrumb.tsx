"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Link from "next/link";

const MainBreadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => !!segment.trim());

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem className="hidden md:block capitalize">
              {segments.length - 1 !== index ? (
                <BreadcrumbLink asChild>
                  <Link href={"#"}>{segment.replaceAll("-", " ")}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{segment.replaceAll("-", " ")}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {segments.length - 1 !== index && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
        {/* <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage>Data Fetching</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MainBreadcrumb;
