import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";
import { lazy } from "react";
import Home from "./pages/Home";

const Shop = lazy(() => import("./pages/Shop"));
const Admin = lazy(() => import("./pages/Admin"));
const Cart = lazy(() => import("./pages/Cart"));
const ItemDetails = lazy(() => import("./features/Item/ItemDetails"));

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        path: "/",
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/shop/:itemId",
                element: <ItemDetails />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
