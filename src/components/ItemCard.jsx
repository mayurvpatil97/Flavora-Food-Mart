import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../redux/CartSlice";
import toast from "react-hot-toast";

function ItemCard({ id, name, qty, price, img }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <AiFillDelete
          onClick={() => {
            dispatch(removeFromCart({ id, name, qty, price, img }));
            toast.error(`${name} Removed from Cart!!! `, { icon: "👋" });
          }}
          className="absolute right-7 text-gray-600 cursor-pointer"
        />
        <img src={img} alt="" className="w-[50px] h-[50px]" />

        <div className="leading-5">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between ">
            <span className="text-green-500 font-bold">₹.{price}</span>
            <div className="flex justify-center items-center gap-2 absolute right-7 ">
              <FaMinusCircle
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600  hover:text-white hover:bg-green-500 hover:border-none rounded
            md
            p-1
            text-xl
            transition-all
            ease-linear
            cursor-pointer"
              />
              <span>{qty}</span>
              <FaPlusCircle
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600  hover:text-white hover:bg-green-500 hover:border-none rounded-md
            p-1
            text-xl
            transition-all
            ease-linear
            cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
