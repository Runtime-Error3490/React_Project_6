import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import TransactionPage from "./pages/Transaction/TransactionPage";
import Support from "./pages/Support/Support";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path:"/transaction",
    element: <TransactionPage/>,
  },
  {
    path:"/support",
    element: <Support/>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
