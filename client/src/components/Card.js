import "./index.css"
import { useNavigate } from "react-router-dom";
import prodinfo from "./Assets/unnamed.png";

function Card() {
    const navigate = useNavigate();
    return (
        <div className="card card-compact w-auto bg-gray-200 text-black shadow-xl" onClick={() => navigate("/prodinfo")}>
            <figure><img src={prodinfo} style={{ width: "400px", height: "350px", objectFit: "cover" }} id="cardimgstyle" alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className="card-title">Art name</h3>
                <p>Price</p>
                <p>Creator</p>
            </div>
        </div>
    );
}

export default Card;