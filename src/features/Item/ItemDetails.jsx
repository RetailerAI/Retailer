import { useParams } from "react-router-dom";

export default function ItemDetails() {
    const { itemId } = useParams();
    return <div>{itemId}</div>;
}
