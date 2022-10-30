import Card from "./Card.js";
function Main() {
    return (
        <div className="main">
            <div className="main-carousel">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full space-x-5 p-4">
                        <Card />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main;