import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero min-h-screen bg-accent-content">
        <div className="hero-content flex-col lg:flex-row">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center ">
              <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Discover, Collect &
                  <br className="hidden lg:inline-block" />
                  Sell NFT Digital Art
                </h1>
                <p className="mb-8 leading-relaxed">
                  Discover the most expensive NFT sales,top NFT collections, and
                  NFT <br /> marketplace rankings A complete overview of the NFT
                  world.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 border rounded-full text-lg" onClick={() => navigate("/explore")}>
                    Get started
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 border rounded-full text-lg" onClick={() => navigate("/create")}>
                    Create Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Landing;
