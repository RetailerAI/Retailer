import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className="flex h-dvh flex-col sm:grid sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_1fr]">
            <div className="bg-base-300 z-10 col-span-2 flex justify-between border-b border-stone-400 px-4 py-2 text-2xl backdrop-blur-md sm:px-8">
                <Navbar
                    isHidden={isHidden}
                    setIsHidden={() => setIsHidden(!isHidden)}
                />
            </div>

            <ul
                className={`${isHidden ? "" : "translate-x-52"} fixed -left-52 top-[54px] z-10 flex h-full w-40 flex-col gap-2 border-r border-stone-400 bg-stone-200 px-2 py-2 text-xl transition-transform sm:static sm:translate-x-0 sm:text-base lg:text-xl`}
            >
                <Sidebar isHidden={isHidden} setIsHidden={setIsHidden} />
            </ul>

            <div
                className={`${isHidden ? "" : "blur-lg"} h-full flex-1 p-5 text-lg sm:blur-none`}
            >
                <Outlet />
            </div>
        </div>
    );
}
