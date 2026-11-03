import type { ReactNode } from "react";
import SiteNav from "@/components/feature/SiteNav";
import SiteFooter from "@/components/feature/SiteFooter";

interface LayoutProps {
  children: ReactNode;
  reserveBottomBar?: boolean;
}

export default function Layout({ children, reserveBottomBar = false }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background-100">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <div className={reserveBottomBar ? "pb-20 lg:pb-0" : ""}>
        <SiteFooter />
      </div>
    </div>
  );
}