import React from "react";
import CardContainer from "@/components/card-container";
import RootLayout from "@/app/layout";
import { Providers } from "@/app/providers";


type MainLayoutProps = {
  children: React.ReactNode;
  childrenClassName?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  childrenClassName,
}: MainLayoutProps) => {
  return (
    <RootLayout>
      <Providers>
      <div className="flex h-screen light:bg-stone-50 dark:bg-neutral-950">
        <div className={"flex flex-col min-w-[96px] w-full"}>
          <CardContainer className={childrenClassName}>
            {children}
          </CardContainer>
        </div>
      </div>
      </Providers>
    </RootLayout>
  );
};

export default MainLayout;
