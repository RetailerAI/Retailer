import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CartButton() {
    return (
        <Link
            to="/cart"
            className="hidden self-center rounded-full p-2 transition-colors hover:bg-stone-300 sm:inline"
        >
            <BiCart />
        </Link>
    );
}
