import { useRouteError } from "react-router-dom";
import LinkButton from "../ui/LinkButton";

function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center capitalize">
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>

            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}

export default Error;
