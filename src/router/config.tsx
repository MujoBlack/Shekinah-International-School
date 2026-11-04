import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Academics from "../pages/academics/page";
import EarlyYears from "../pages/academics/early-years/page";
import Primary from "../pages/academics/primary/page";
import Curriculum from "../pages/academics/curriculum/page";
import Admission from "../pages/admission/page";
import SchoolLife from "../pages/school-life/page";
import Contact from "../pages/contact/page";
import Visit from "../pages/visit/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/academics",
    element: <Academics />,
  },
  { path: "/academics/early-years", element: <EarlyYears /> },
  { path: "/academics/primary", element: <Primary /> },
  { path: "/academics/curriculum", element: <Curriculum /> },
  {
    path: "/admission",
    element: <Admission />,
  },
  {
    path: "/school-life",
    element: <SchoolLife />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/visit",
    element: <Visit />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;