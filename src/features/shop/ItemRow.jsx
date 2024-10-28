export default function ItemRow({ item }) {
    return (
        <div className="flex h-64 w-full gap-10 rounded-lg border border-stone-400 bg-stone-50 p-3">
            <img
                src={item.imageURL}
                alt="react"
                className="h-full border border-stone-200"
            />
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold tracking-wide">
                    {item.name}
                </h1>
                <p className="text-base text-stone-500">{item.description}</p>
                <p className="mt-auto items-end text-2xl">
                    <span className="text-green-700">${item.price}</span>
                    <span className="ml-5 text-red-700 line-through">
                        ${Number.parseInt(item.price * 1.5)}
                    </span>
                </p>
            </div>
        </div>
    );
}
