import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";

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
                lazy: async () => {
                    let Shop = await import("./pages/Shop");
                    return { Component: Shop.default };
                },
            },
            {
                path: "/shop/:itemId",
                lazy: async () => {
                    let Item = await import("./features/Item/ItemDetails");
                    return { Component: Item.default };
                },
            },
            {
                path: "/cart",
                lazy: async () => {
                    let Cart = await import("./pages/Cart");
                    return { Component: Cart.default };
                },
            },
            {
                path: "/admin",
                lazy: async () => {
                    let Admin = await import("./pages/Admin");
                    return { Component: Admin.default };
                },
            },
        ],
    },
    {
        path: "*",
        lazy: async () => {
            let PageNotFound = await import("./pages/PageNotFound");
            return { Component: PageNotFound.default };
        },
    },
]);

export default function App() {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<p style={{ fontSize: "10rem" }}>Loading...</p>}
        />
    );
}
