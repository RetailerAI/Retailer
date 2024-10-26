import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className="flex h-dvh w-dvw flex-col overflow-x-hidden sm:grid sm:grid-cols-[15dvw_1fr] sm:grid-rows-[auto_1fr]">
            <Navbar
                isHidden={isHidden}
                setIsHidden={() => setIsHidden(!isHidden)}
            />
            <Sidebar isHidden={isHidden} setIsHidden={setIsHidden} />
            <div
                className={`${isHidden ? "" : "blur-lg"} p-5 text-lg sm:blur-none`}
            >
                <Outlet />
            </div>
        </div>
    );
}
