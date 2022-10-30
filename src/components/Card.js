import { useNavigate } from "react-router-dom";
import prodinfo from "./Assets/unnamed.png";

function Card(props) {
    const navigate = useNavigate();
    return (
        <div className="card card-compact w-fit m-3 bg-gray-200 text-black shadow-xl" onClick={() => navigate("/prodinfo")}>
            <figure><img src={prodinfo} style={{ width: "400px", height: "350px", objectFit: "cover" }} id="cardimgstyle" alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <p>{props.price}</p>
                <p>Creator: {props.owner}</p>
            </div>
        </div>
    );
}

export default Card;