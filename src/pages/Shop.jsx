import FilterBar from "../features/shop/FilterBar";
import ItemList from "../features/shop/ItemList";

export default function Shop() {
    return (
        <>
            <div className="flex flex-col gap-3">
                <FilterBar />
                <ItemList />
            </div>
        </>
    );
}
