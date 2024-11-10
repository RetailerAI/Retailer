import FilterBar from "../features/shop/FilterBar";
import ItemList from "../features/shop/ItemList";

export default function Shop() {
    return (
        <>
            <FilterBar />
            <div className="divider"></div>
            <ItemList />
        </>
    );
}
