import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Rise } from "./ui";

interface Props {
  crumb: string;
  title: string;
  text?: string;
  image: string;
  position?: string;
  children?: ReactNode;
}

export default function PageHero({ crumb, title, text, image, position = "center 45%", children }: Props) {
  return (
    <header className="phero">
      <img src={image} alt="" style={{ objectPosition: position }} fetchPriority="high" />
      <div className="in">
        <div className="wrap">
          <span className="crumbs fade-up" style={{ ["--d" as string]: "0.1s" }}>
            <Link to="/">Home</Link> <i className="ri-arrow-right-s-line" aria-hidden="true" /> {crumb}
          </span>
          <h1 className="s-h1">
            <Rise text={title} />
          </h1>
          {text && <p className="fade-up">{text}</p>}
          {children && (
            <div className="ctas fade-up" style={{ ["--d" as string]: "0.8s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
