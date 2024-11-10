import { Link } from "react-router-dom";
import StarRating from "../../ui/StarRating";

export default function ItemRow({ item }) {
    return (
        <Link
            to={`/shop/${item.slug}`}
            className="flex w-full gap-4 rounded-lg border border-black p-2 transition-colors hover:bg-base-200 sm:h-[22rem] sm:flex-col sm:gap-3"
        >
            <img
                src={item.imageURL}
                alt="react"
                className="w-full rounded-lg sm:h-1/2"
            />
            <div className="flex flex-col">
                <h1 className="text-1xl font-bold tracking-wide sm:text-2xl">
                    {item.name}
                </h1>
                <p className="line-clamp-2 text-sm text-stone-500 sm:line-clamp-3 sm:text-base">
                    {item.description}
                </p>
                <StarRating disable={true} />
                <p className="mt-auto items-end text-lg sm:text-xl">
                    <span className="text-success">${item.price}</span>
                    <span className="ml-5 text-error line-through">
                        ${Number.parseInt(item.price * 1.5)}
                    </span>
                </p>
            </div>
        </Link>
    );
}
