import "./index.css";
import prodimage from "./Assets/unnamed.png";

function Prodinfo() {
    return (
        <div className="proj-wrapper">
            <div className="hero min-h-screen bg-accent-content">
                <div className="hero-content flex-col lg:flex-row">
                    <div
                        className="card card-compact w-96 bg-accent-content shadow-2xl border border-gray-300 lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                        id="prod-pic"
                        style={{ height: "50%", width: "50%" }}>
                        <div className="card-body">
                            <i className="fab fa-ethereum" style={{ color: "rgb(104, 104, 104)" }} />
                        </div>
                        <figure>
                            <img src={prodimage} alt="nftheh" />
                        </figure>
                    </div>
                    <div className="flex flex-col md:w-fit justify-self-auto sm:w-screen">
                        <h1 className="text-4xl font-bold w-fit" id="title-text">
                            Bored Ape #453
                        </h1>
                        <a role="button" className="btn btn-primary btn-sm w-fit" id="seller-link" href="seller.html">
                            {/* Account info will be seller info but without edit account options */}
                            Bored Apes NFT Club
                        </a>
                        <div className="stats bg-primary-content text-bg-neutral-content shadow-md border border-gray-300 w-fit" id="prodStats">
                            <div className="stat">
                                <div className="stat-title text-gray-600">Current Price</div>
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
                                <div className="flex button-wrapper w-fit flex space-around justify-center md:flex-row flex-col">
                                    <div className="button-1 p-5 md:p-2">
                                        <button
                                            className="btn btn-wide btn-primary"
                                            style={{ color: "white" }}
                                        >
                                            <i className="fas fa-wallet"></i>
                                            {/* blank character here */}
                                            ‍‍ Buy now
                                        </button>
                                    </div>
                                    <div className="button-2 p-5 md:p-2">
                                        <button className="btn btn-outline btn-wide btn-primary">
                                            <i className="fas fa-tag "></i>
                                            {/* blank character here */}
                                            ‍‍ Make an offer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="listOfBuyers max-w-screen">
                            <div class="overflow-x-auto w-fit max-w-screen shadow-md sm:rounded-lg w-4/5 border border-gray-300" id="buyersList">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                Name
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Date of Buying
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Contract Number
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Issue Number
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                Username1
                                            </th>
                                            <td class="py-4 px-6">
                                                dd/mm/yyyy
                                            </td>
                                            <td class="py-4 px-6">
                                                Contract number generated randomly
                                            </td>
                                            <td class="py-4 px-6">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                Username2
                                            </th>
                                            <td class="py-4 px-6">
                                                dd/mm/yyyy
                                            </td>
                                            <td class="py-4 px-6">
                                                Contract number generated randomly
                                            </td>
                                            <td class="py-4 px-6">
                                                $1999
                                            </td>

                                        </tr>
                                        <tr class="bg-white dark:bg-white hover:bg-gray-50 dark:hover:bg-gray-300">
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                Username3
                                            </th>
                                            <td class="py-4 px-6">
                                                dd/mm/yyyy
                                            </td>
                                            <td class="py-4 px-6">
                                                Contract number generated randomly
                                            </td>
                                            <td class="py-4 px-6">
                                                $99
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="description-box">
                            <div className="collapse">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                    {/* Click me to show/hide content */}
                                </div>
                                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                    {/* <p>hello</p> */}
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