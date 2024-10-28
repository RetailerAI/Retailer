import StarRating from "../../ui/StarRating";

export default function ItemRow({ item }) {
    return (
        <div className="flex h-40 w-full gap-10 rounded-lg border border-stone-400 bg-stone-50 p-3 sm:h-96 sm:flex-col sm:gap-3">
            <img
                src={item.imageURL}
                alt="react"
                className="h-full rounded-lg border border-stone-200"
            />
            <div className="flex flex-col">
                <h1 className="text-1xl font-bold tracking-wide sm:text-2xl">
                    {item.name}
                </h1>
                <p className="line-clamp-3 text-sm text-stone-500 sm:text-base">
                    {item.description}
                </p>
                <StarRating size={20} />
                <p className="mt-auto items-end text-lg sm:text-xl">
                    <span className="text-green-700">${item.price}</span>
                    <span className="ml-5 text-red-700 line-through">
                        ${Number.parseInt(item.price * 1.5)}
                    </span>
                </p>
            </div>
        </div>
    );
}
