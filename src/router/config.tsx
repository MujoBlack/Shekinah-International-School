import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Academics from "../pages/academics/page";
import Admission from "../pages/admission/page";
import SchoolLife from "../pages/school-life/page";
import Contact from "../pages/contact/page";

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
    path: "*",
    element: <NotFound />,
  },
];

export default routes;