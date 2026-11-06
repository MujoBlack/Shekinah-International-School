import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Rise } from "./ui";

interface Props {
  crumb: string;
  parent?: { label: string; to: string };
  title: string;
  text?: string;
  image: string;
  position?: string;
  /* where the photo is anchored on phones, where the frame is tall and narrow */
  mobilePosition?: string;
  children?: ReactNode;
}

export default function PageHero({ crumb, parent, title, text, image, position = "center 45%", mobilePosition, children }: Props) {
  return (
    <header className="phero">
      <img src={image} alt="" style={{ objectPosition: position, ["--mpos" as string]: mobilePosition ?? position }} fetchPriority="high" />
      <div className="in">
        <div className="wrap">
          <span className="crumbs fade-up" style={{ ["--d" as string]: "0.1s" }}>
            <Link to="/">Home</Link> <i className="ri-arrow-right-s-line" aria-hidden="true" />{" "}
            {parent && (
              <>
                <Link to={parent.to}>{parent.label}</Link> <i className="ri-arrow-right-s-line" aria-hidden="true" />{" "}
              </>
            )}
            {crumb}
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
