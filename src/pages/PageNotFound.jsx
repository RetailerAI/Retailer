import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <Link
            to="/"
            className="flex h-screen w-full items-center justify-center capitalize"
        >
            Page Not Found Click to return to home
        </Link>
    );
}
