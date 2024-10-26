import Row from "./Row";
import { BiCart, BiShoppingBag } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";

export default function Sidebar({ isHidden, setIsHidden }) {
    return (
        <ul
            className={`${isHidden ? "" : "translate-x-52"} fixed -left-52 top-[54px] z-10 flex h-dvh flex-col gap-2 border-r border-stone-400 bg-stone-200 px-2 py-2 text-xl transition-transform sm:static sm:translate-x-0 sm:text-base lg:text-xl`}
        >
            <Row to="/cart" setIsHidden={setIsHidden} type="secondary">
                <BiCart />
                <span>Cart</span>
            </Row>
            <Row to="/shop" setIsHidden={setIsHidden}>
                <BiShoppingBag />
                <span>Shop</span>
            </Row>
            <Row to="/admin" setIsHidden={setIsHidden}>
                <RiAdminFill />
                <span>Admin</span>
            </Row>
        </ul>
    );
}
