import data from "../../data/data";
import ItemCard from "./ItemCard";

export default function ItemList() {
    return (
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}
