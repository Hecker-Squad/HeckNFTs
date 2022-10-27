import { useState } from "react";
import { ethers } from "ethers";

const UserAcc = () => {
  const [address, setAddress] = useState("No address");
  const [collected, setCollected] = useState(true);
  const [created, setCreated] = useState(false);

  const getAddr = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const addr = await provider._getAddress(account);
    setAddress(ethers.utils.getAddress(addr));
  };

  return (
    <div className="flex justify-center h-full">
      <div className="w-full bg-base-300">
        <div className=" m-4">
          <div class="avatar">
            <div class="w-28 rounded-full border-4 border-[#243c5a]">
              <img alt="avatar" src="https://github.com/Skyhero-admin.png" />
            </div>
          </div>
          <h2 className="text-2xl ml-3">Unnamed</h2>
          <p className="text-3xs ml-3">{address}</p>
        </div>

        <button
          className="btn bg-neutral-focus m-3"
          onClick={() => {
            getAddr();
          }}
        >
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
            alt = "ethlogo"
            width={"15"}
            className="mr-2"
          />
          Get Address
        </button>
        <div className="tabs">
          <p
            className={
              collected ? "tab tab-bordered tab-active" : "tab tab-bordered"
            }
            onClick={() => {
              setCollected(true);
              setCreated(false);
            }}
          >
            Collected
          </p>
          <p
            className={
              created ? "tab tab-bordered tab-active" : "tab tab-bordered"
            }
            onClick={() => {
              setCreated(true);
              setCollected(false);
            }}
          >
            Created
          </p>
        </div>
        <section className="min-h-[60vh]">

        </section>
      </div>
    </div>
  );
};

export default UserAcc;
