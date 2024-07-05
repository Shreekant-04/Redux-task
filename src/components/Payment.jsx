import { NavLink } from "react-router-dom";
import { CartItems, TotalAmt } from "./Cart";

const PaymentPage = () => {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-2 overflow-scroll h-screen	">
        <CartItems />
      </div>
      <div className=" flex flex-col  payment-options bg-white shadow-md rounded-lg p-4">
        <TotalAmt className="flex flex-row" />
        <NavLink
          to="/cart"
          className=" mt-4 w-auto self-center bg-blue-500 text-white py-2 px-4 rounded-3xl	 hover:bg-blue-600 hover:scale-105 transition "
        >
          Back to Cart
        </NavLink>

        <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="1234 5678 9123 4567"
            />
          </div>
          <div>
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="123"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={(e) => e.preventDefault()}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
