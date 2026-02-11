"use client";

import Footer from "./footer";
import Header from "./header";

type LayoutContentProps = {
  children: React.ReactNode;
};

const LayoutContent = ({ children }: LayoutContentProps) => {
  return (
    <main className="flex h-dvh flex-col overflow-auto transition-all duration-200 ease-in-out">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default LayoutContent;
