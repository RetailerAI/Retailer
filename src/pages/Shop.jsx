import Filter from "../features/shop/Filter";
import ItemList from "../features/shop/ItemList";

export default function Shop() {
    return (
        <>
            <div className="grid grid-cols-[1fr_12rem] gap-5">
                <ItemList />
                <Filter />
            </div>
        </>
    );
}
