/* eslint-disable react/prop-types */
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { HeartWhite } from "../../assets/icons/HeartWhite";
import { Rating } from "../../assets/icons/Rating";
import img1 from "../../assets/images/img1.png";

export const RecipeItem = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md p-2">
      <img
        src={recipe.image ?? img1}
        alt="img1"
        className="w-full  rounded-md bg-cover bg-center"
      />
      <h5 className="font-medium text-[#A1A1A1] my-2 text-sm px-3 py-1">
        {recipe?.difficulty ?? "Easy"}
      </h5>
      <div className="w-full flex justify-between items-center px-3 py-1">
        <h3 className=" font-bold md:text-xl text-sm text-[#252525]">
          {recipe?.name}
        </h3>
        <p className="flex items-center gap-1">
          <Rating />
          <span className="text-[#ADADAD] text-sm font-medium">4.5</span>
        </p>
      </div>
      <div className="px-3 py-1 flex justify-between items-center">
        <p className="text-secondary   font-semibold text-xl">40 min</p>
        <div className="flex items-center gap-3">
          <HeartWhite />
          <CommentIcon />
        </div>
      </div>
    </div>
  );
};
