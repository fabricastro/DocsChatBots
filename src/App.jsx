import { Main } from "./components/pure/Main";
import { Diseno } from "./components/diseno/Diseno";
import { Docs } from "./components/docs/Docs";
import { Repositorios } from "./components/repositorios/Repositorios";
import { Finanzas } from "./components/finanzas/Finanzas";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/diseno",
    element: <Diseno />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/repositorios",
    element: <Repositorios />,
  },
  {
    path: "/finanzas",
    element: <Finanzas />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
