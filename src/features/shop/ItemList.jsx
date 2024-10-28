import ItemRow from "./ItemRow";

const data = [
    {
        id: "0",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat reiciendis odio atque repellat animi laudantium illum iste laboriosam consequatur, ullam, quisquam illo corrupti.",
    },

    {
        id: "0",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat reiciendis odio atque repellat animi laudantium illum iste laboriosam consequatur, ullam, quisquam illo corrupti.",
    },
    {
        id: "0",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat reiciendis odio atque repellat animi laudantium illum iste laboriosam consequatur, ullam, quisquam illo corrupti.",
    },
    {
        id: "0",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat reiciendis odio atque repellat animi laudantium illum iste laboriosam consequatur, ullam, quisquam illo corrupti.",
    },
    {
        id: "0",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat reiciendis odio atque repellat animi laudantium illum iste laboriosam consequatur, ullam, quisquam illo corrupti.",
    },
];

export default function ItemList() {
    return (
        <div className="flex flex-col gap-3 overflow-y-auto p-2">
            {data.map((item) => (
                <ItemRow key={item.id} item={item} />
            ))}
        </div>
    );
}
