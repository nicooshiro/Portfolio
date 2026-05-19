import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { GraphicDesign } from "./pages/GraphicDesign";
import { Audiovisual } from "./pages/Audiovisual";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "graphic-design", Component: GraphicDesign },
      { path: "audiovisual", Component: Audiovisual },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "project/:id", Component: ProjectDetail },
      { path: "project", Component: () => <Navigate to="/" replace /> },
      { path: "*", Component: () => <Navigate to="/" replace /> },
    ],
  },
]);
