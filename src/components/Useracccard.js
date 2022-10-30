import { useNavigate } from "react-router-dom";
import prodinfo from "./Assets/unnamed.png";

function UserCard(props) {
    const navigate = useNavigate();
    return (
        <div className="card card-compact w-fit m-3 bg-gray-200 text-black shadow-xl" onClick={() => navigate("/prodinfo")}>
            <figure><img src={prodinfo} style={{ width: "250px", height: "200px", objectFit: "cover" }} id="cardimgstyle" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-base">{props.name}</h2>
                <p>{props.price}</p>
                <p>Creator: {props.owner}</p>
            </div>
        </div>
    );
}

export default UserCard;