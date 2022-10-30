import Card from "./Card.js";
function Main() {
    return (
        <div className="main">
            <h1 className="text-5xl font-bold flex justify-center m-4">Explore, collect, and sell NFTs</h1>
            <div className="main-carousel">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full space-x-5 p-10">
                        <Card />
                    </div>
                </div>
            </div>
            <h1 className="text-4xl flex justify-center font-bold m-2">Top Sellers</h1>
            <div className="topsellers">
                <div class="flex justify-center ml-14 max-w-screen">
                    <div class="overflow-x-auto w-fit max-w-screen shadow-md sm:rounded-lg w-4/5 border border-gray-300" id="buyersList">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Sr. No
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Amount sold
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Volume
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        1
                                    </th>
                                    <td class="py-4 px-6">
                                        Name lol
                                    </td>
                                    <td class="py-4 px-6">
                                        Sum number
                                    </td>
                                    <td class="py-4 px-6">
                                        total eth collected
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        2
                                    </th>
                                    <td class="py-4 px-6">
                                        Name lol
                                    </td>
                                    <td class="py-4 px-6">
                                        Sum number
                                    </td>
                                    <td class="py-4 px-6">
                                        total eth collected
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-white hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        3
                                    </th>
                                    <td class="py-4 px-6">
                                        Name lol
                                    </td>
                                    <td class="py-4 px-6">
                                        Sum number
                                    </td>
                                    <td class="py-4 px-6">
                                        total eth collected
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl flex justify-center font-bold m-2 pt-6">Recently Uploaded</h1>
            <div className="recentupload">
                {/* ----------------------------------------------all recent uploads --------------------------------------------------------------------------------------------- */}
                <div class="flex justify-center ml-14 max-w-screen">
                    <div class="overflow-x-auto w-fit max-w-screen shadow-md sm:rounded-lg w-4/5 border border-gray-300" id="buyersList">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Sr. No
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Amount sold
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Volume
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        1
                                    </th>
                                    <td class="py-4 px-6">
                                        Name lol
                                    </td>
                                    <td class="py-4 px-6">
                                        Sum number
                                    </td>
                                    <td class="py-4 px-6">
                                        total eth collected
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        2
                                    </th>
                                    <td class="py-4 px-6">
                                        Name lol
                                    </td>
                                    <td class="py-4 px-6">
                                        Sum number
                                    </td>
                                    <td class="py-4 px-6">
                                        total eth collected
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-white hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        3
                                    </th>
                                    <td class="py-4 px-6">
                                        Name lol
                                    </td>
                                    <td class="py-4 px-6">
                                        Sum number
                                    </td>
                                    <td class="py-4 px-6">
                                        total eth collected
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Main;