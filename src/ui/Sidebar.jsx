import Row from "./Row";
import { BiCart, BiShoppingBag } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";

export default function Sidebar({ isHidden, setIsHidden }) {
    return (
        <>
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
        </>
    );
}
