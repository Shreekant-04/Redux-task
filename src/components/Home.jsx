import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

const nikeShoes = [
  {
    name: "Nike Air Max 270",
    price: 1500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c576f8e7-5926-4d68-88b1-0ce6d18e7a2d/air-max-270-older-shoes-tnlrnr.png",
  },
  {
    name: "Nike Air Zoom Pegasus 38",
    price: 1299,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0994bf2c-e174-4aaf-8ea6-b553e8a54c19/pegasus-41-road-running-shoes-RZm89S.png",
  },
  {
    name: "Nike React Infinity Run Flyknit",
    price: 1600,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/infinityrn-4-road-running-shoes-sBdw7D.png",
  },
  {
    name: "Nike Air Force 1 '07",
    price: 9000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    name: "Nike Dunk Low Retro",
    price: 1050,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b8083f2f-0933-4c11-9438-5497d751ce62/dunk-low-retro-shoe-66RGqF.png",
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    price: 1000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/232c0ae8-99c8-497f-9a1e-af9f0fc8ef3c/blazer-mid-77-vintage-shoes-dNWPTj.png",
  },
  {
    name: "Nike Air VaporMax Plus",
    price: 2100,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0fd2a5b0-20d2-4cb4-a619-acbff16ae34f/air-vapormax-2023-flyknit-shoes-xjVzw5.png",
  },
  {
    name: "Nike SB Dunk Low",
    price: 1100,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06df8580-6876-4697-b47c-96b50f2b8fd9/dunk-low-retro-shoes-bCzchX.png",
  },
  {
    name: "Nike Air Max 90",
    price: 1200,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7002f46-4811-404e-aee3-69eb247bcd84/air-max-90-shoes-98F148.png",
  },
  {
    name: "Nike Air Huarache",
    price: 1350,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6acba276-7ce6-4942-bfcd-9bb17458e424/air-huarache-runner-shoes-6gNJ0g.png",
  },
  {
    name: "Nike Air Max 97",
    price: 1700,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/104765fc-9feb-463f-ad7b-5c301a64e27d/air-max-97-shoes-B1mzl9.png",
  },
  {
    name: "Nike LeBron XXI",
    price: 2000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a243361-5804-41fe-913e-7b6c9523f806/lebron-xxi-dragon-pearl-ep-basketball-shoes-4tVgfH.png",
  },
  {
    name: "Nike Metcon 6",
    price: 1300,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13565310-7f6d-4a56-87f6-b046786f2e16/free-metcon-5-workout-shoes-HfHgmZ.png",
  },
  {
    name: "Nike Invincible 3",
    price: 2750,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10dfb6ca-9206-4ea8-93b5-7a4fc9094cb0/invincible-3-road-running-shoes-KZFTMC.png",
  },
];

const Home = () => {
  return (
    <div className="shoe-list col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {nikeShoes.map((shoe) => (
        <Shoes shoe={shoe} key={shoe.name} />
      ))}
    </div>
  );
};

export default Home;

function Shoes({ shoe }) {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addToCart(shoe));
  };

  return (
    <div className="shoes bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800 p-4">{shoe.name}</h2>
      <img
        className="w-full h-64 object-cover"
        src={shoe.image}
        alt={shoe.name}
      />
      <div className="p-4">
        <p className="price text-gray-600">
          <span className="text-lg font-medium">₹</span> {shoe.price}.00/-
        </p>
        <button
          className="add-btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:scale-95 transition"
          onClick={handleAddCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
