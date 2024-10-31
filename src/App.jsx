import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ItemDetails from "./features/Item/ItemDetails";
import Error from "./pages/Error";

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
    return <RouterProvider router={router} />;
}
