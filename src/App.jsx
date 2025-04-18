import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import {
  Budget,
  Login,
  Overview,
  Posts,
  RecurringBills,
  Register,
  TransActions,
} from "./pages";
import { ProtectedRoutes } from "./components";
import { useSelector } from "react-redux";
import { store } from "./app/store";

function App() {
  const user = true; 
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes user={user}><MainLayout /></ProtectedRoutes>,
      children: [
        { index: true, element: <Overview /> },
        { path: "/budgets", element: <Budget /> },
        { path: "/posts", element: <Posts /> },
        { path: "/recurringBills", element: <RecurringBills /> },
        { path: "/transaction", element: <TransActions /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },

  ]);
  return <RouterProvider router={routes} />;
}

export default App;