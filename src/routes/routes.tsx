import {
  createBrowserRouter,
} from "react-router-dom";
import { paths } from "./routerPath";

import Homepage from "../pages/homepage";

const router = createBrowserRouter([
  {
    path: paths.homepage,
    element: (<Homepage />),
    errorElement: <div>Error Page</div>
  },

]);

export default router;