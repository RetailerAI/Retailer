import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
