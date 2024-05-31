import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function FoodCard({ handleToast, id, name, price, desc, img, rating }) {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[230px] bg-white p-5 flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between mb-2">
        <h3> {name}</h3>
        <span className="text-green-500">₹.{price}</span>
      </div>
      <p className=" text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span
          className="flex justify-center items-center
        "
        >
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, qty: 1, img }));
            handleToast(name);
          }}
          className="p-1 mx-2 text-white bg-green-600 hover:bg-green-400 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
