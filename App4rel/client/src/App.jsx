import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Sidebar from "./components/Sidebar";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

// Import necessary components and modules

const DefaultLayout = () => (
  <div className="app min-h-[100vh] flex flex-col">
    <Navbar />
    <Sidebar />
    <Outlet />
    <Footer />
  </div>
);

const OrderPageLayout = () => (
  <div className="app min-h-[100vh] flex flex-col">
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    element: <OrderPageLayout />,
    children: [
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
