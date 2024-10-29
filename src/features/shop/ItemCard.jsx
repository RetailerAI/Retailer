import StarRating from "../../ui/StarRating";

export default function ItemRow({ item }) {
    return (
        <div className="hover:bg-base-200 flex h-40 w-full gap-4 rounded-lg border border-black p-2 transition-colors sm:h-96 sm:flex-col sm:gap-3">
            <img
                src={item.imageURL}
                alt="react"
                className="border-base-200 w-full rounded-lg border sm:h-1/2"
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
                    <span className="text-success">${item.price}</span>
                    <span className="text-error ml-5 line-through">
                        ${Number.parseInt(item.price * 1.5)}
                    </span>
                </p>
            </div>
        </div>
    );
}
