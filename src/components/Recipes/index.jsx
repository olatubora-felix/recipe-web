/* eslint-disable react/prop-types */
import { RecipeItem } from "./RecipeItem";
import Skeleton from "react-loading-skeleton";

export const Recipes = ({
  recipes,
  loader,
  className = "grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 p-3",
}) => {
  if (loader) {
    return (
      <section className={className}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i}>
            <Skeleton height={300} />
            <Skeleton height={20} />
            <Skeleton height={10} />
          </div>
        ))}
      </section>
    );
  }
  return (
    <section className={className}>
      {recipes?.length > 0 ? (
        recipes?.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <h1 className="text-center">No recipes found</h1>
      )}
    </section>
  );
};
