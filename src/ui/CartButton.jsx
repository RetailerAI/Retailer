import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CartButton() {
    return (
        <Link
            to="/cart"
            className="hover:bg-base-300 hidden self-center rounded-full text-3xl transition-colors sm:inline"
        >
            <BiCart />
        </Link>
    );
}
