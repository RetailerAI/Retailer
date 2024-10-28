import ItemCard from "./ItemCard";

const data = [
    {
        id: "0",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },

    {
        id: "1",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "2",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "3",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "5",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "6",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "7",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "4",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "8",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "9",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "10",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "11",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
    {
        id: "12",
        imageURL: "react.svg",
        name: "laptop",
        price: "12",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit tempora alias quae! Repudiandae adipisci fugiat ",
    },
];

export default function ItemList() {
    return (
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}
