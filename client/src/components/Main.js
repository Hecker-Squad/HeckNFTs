import carousel1 from "./Assets/carousel-1.jpg";
import prodinfo from "./Assets/unnamed.png";
import { useNavigate } from "react-router-dom";
function Main() {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="main-carousel">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full space-x-5 p-4">
                        <div className="card card-compact w-auto bg-gray-200 text-black shadow-xl" onClick={() => navigate("/prodinfo")}>
                            <figure><img src={prodinfo} style={{ width: "400px", height: "350px", objectFit: "cover" }} id="cardimgstyle" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Art name</h3>
                                <p>Price</p>
                                <p>Creator</p>
                            </div>
                        </div>
                        <div className="card card-compact w-auto bg-gray-200 text-black shadow-xl">
                            <figure><img src={carousel1} style={{ width: "400px", height: "350px", objectFit: "cover" }} id="cardimgstyle" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Art name</h3>
                                <p>Price</p>
                                <p>Creator</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;