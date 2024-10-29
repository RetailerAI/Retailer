export default function Admin() {
    return (
        <>
            <div className="m-3 flex gap-3 *:border *:border-white">
                <div className="bg-primary h-20 w-20"></div>
                <div className="bg-secondary h-20 w-20"></div>
                <div className="bg-accent h-20 w-20"></div>
            </div>
            <div className="m-3 flex gap-3 *:border *:border-white">
                <div className="bg-base-100 h-20 w-20"></div>
                <div className="bg-base-200 h-20 w-20"></div>
                <div className="bg-base-300 h-20 w-20"></div>
            </div>
        </>
    );
}
