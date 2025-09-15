import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// library imports
  import { ToastContainer, toast } from 'react-toastify';

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";


// Routes
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ]
  }, 
]);

function App() {
  return<>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
}

export default App
