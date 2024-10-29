import Row from "./Row";
import { BiCart, BiShoppingBag } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";

export default function Sidebar({ isHidden, setIsHidden }) {
    return (
        <ul
            className={`${isHidden ? "" : "translate-x-52"} bg-base-200 fixed -left-52 top-[57px] z-10 flex h-full w-52 flex-col gap-2 border-r border-black px-2 py-2 text-xl transition-transform sm:static sm:translate-x-0`}
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
