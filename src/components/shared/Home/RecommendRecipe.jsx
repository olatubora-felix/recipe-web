/* eslint-disable react/prop-types */
import { Recipes } from "../../Recipes";
export const RecommendRecipe = ({ recipes, loader }) => {
  const recipesList = recipes
    ?.sort(() => Math.random() - Math.random())
    ?.slice(0, 8);
  return (
    <section className="pb-10 p-3">
      <h2 className="font-semibold xl:text-4xl md:text-2xl text-xl text-black">
        Recommended Recipes
      </h2>
      <Recipes recipes={recipesList} loader={loader} />
    </section>
  );
};
