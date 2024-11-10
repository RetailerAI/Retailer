import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";
import { lazy } from "react";

const Shop = lazy(() => import("./pages/Shop"));
const Admin = lazy(() => import("./pages/Admin"));
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
const ItemDetails = lazy(() => import("./features/Item/ItemDetails"));

// const Parent = lazy(() => import("./parent-route"));

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
                errorElement: <Error />,
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
