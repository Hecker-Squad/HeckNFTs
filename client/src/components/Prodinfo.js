import "./index.css";
import prodimage from "./Assets/unnamed.png";

function Prodinfo() {
    return (
        <div className="proj-wrapper">
            <div className="hero min-h-screen bg-accent-content">
                <div className="hero-content flex-col lg:flex-row">
                    <div
                        className="card card-compact w-96 bg-accent-content shadow-2xl border border-gray-300"
                        id="prod-pic"
                        style={{ height: "450px", width: "500px" }}>
                        <div className="card-body">
                            <i className="fab fa-ethereum" style={{ color: "rgb(104, 104, 104)" }} />
                        </div>
                        <figure>
                            <img src={prodimage} alt="nftheh" />
                        </figure>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold" id="title-text">
                            Bored Ape #453
                        </h1>
                        <a role="button" className="btn btn-info btn-sm" id="seller-link" href="seller.html">
                            {/* Account info will be seller info but without edit account options */}
                            Bored Apes NFT Club
                        </a>
                        <div className="stats bg-primary-content text-bg-neutral-content shadow-md border border-gray-300">
                            <div className="stat">
                                <div className="stat-title">Current Price</div>
                                <div className="stat-value text-bg-neutral-focus" id="price-logo">
                                    <img
                                        src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                                        alt="eth logo"
                                        style={{ height: "50%" }}
                                        id="eth-logo"
                                        className="inline-block w-8 h-8 stroke-current"
                                    />
                                    <span id="eth-price">0.03</span>
                                </div>
                                <div className="button-wrapper flex justify-center">
                                    <div className="button-1">
                                        <div className="stat-actions">
                                            <button
                                                className="btn btn-wide gap-2 btn-primary"
                                                style={{ color: "white" }}
                                            >
                                                <i className="fas fa-wallet"></i>
                                                Buy now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="button-2">
                                        <button className="btn btn-outline btn-wide btn-primary gap-2">
                                            <i className="fas fa-tag "></i>Make an offer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prodinfo;