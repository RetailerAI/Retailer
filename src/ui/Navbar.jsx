import Button from "./Button";
import CartButton from "./CartButton";
import Logo from "./Logo";
import SearchFiled from "./SearchFiled";

export default function Navbar({ isHidden, setIsHidden }) {
    return (
        < >
            <Button isHidden={isHidden} setIsHidden={setIsHidden} />
            <Logo />
            <SearchFiled />
            <CartButton />
        </>
    );
}
