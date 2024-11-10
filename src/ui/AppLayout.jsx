import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className="flex h-dvh flex-col overflow-y-hidden sm:grid sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_1fr]">
            <Navbar
                isHidden={isHidden}
                setIsHidden={() => setIsHidden(!isHidden)}
            />
            <Sidebar isHidden={isHidden} setIsHidden={setIsHidden} />
            <div
                className={`${isHidden ? "" : "pointer-events-none blur-lg"} mt-14 flex h-full flex-1 flex-col overflow-y-auto p-5 text-lg sm:mt-0 sm:blur-none`}
            >
                <Suspense fallback={<p>loading ...</p>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}
