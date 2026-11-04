import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import FooterPanel from "./FooterPanel";
import { useRevealAll } from "./ui";

interface Props {
  children: ReactNode;
  footer?: { title?: string; text?: string; image?: string };
}

export default function Layout({ children, footer }: Props) {
  const { pathname, hash } = useLocation();
  useRevealAll(pathname);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Nav />
      <main>{children}</main>
      <FooterPanel {...footer} />
    </>
  );
}
