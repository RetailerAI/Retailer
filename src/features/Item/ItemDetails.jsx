import { useParams } from "react-router-dom";
import data from "../../data/data";

export default function ItemDetails() {
    const { itemId } = useParams();
    const { imageURL } = data[itemId];

    return (
        <div>
            <img src={imageURL} alt="123" />
        </div>
    );
}
