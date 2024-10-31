import LinkButton from "../ui/LinkButton";

export default function PageNotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center capitalize">
            <h1>URL Error ❌</h1>
            <h1>path does not exist</h1>
            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}
