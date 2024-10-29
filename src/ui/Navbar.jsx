import SidebarButton from "./SidebarButton";
import CartButton from "./CartButton";
import Logo from "./Logo";
import SearchFiled from "./SearchFiled";
import ThemeButton from "./ThemeButton";

export default function Navbar({ isHidden, setIsHidden }) {
    return (
        <div className="bg-base-200 fixed top-0 z-10 col-span-2 flex w-full items-center justify-between border-b border-black px-4 py-2 text-2xl backdrop-blur-md sm:static sm:px-8">
            <SidebarButton isHidden={isHidden} setIsHidden={setIsHidden} />
            <Logo />
            <SearchFiled />
            <div className="flex gap-5">
                <CartButton />
                <ThemeButton />
            </div>
        </div>
    );
}
