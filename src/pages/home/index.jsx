import { Recipes } from "../../components/Recipes";
import Banner from "../../components/shared/Home/Banner";
import { RecipeTags } from "../../components/shared/Home/RecipeTags";
import { RecommendRecipe } from "../../components/shared/Home/RecommendRecipe";
import { useGetAllRecipes } from "../../hooks/useGetAllRecipes";

const Home = () => {
  const { recipes: recipesLists, isLoading } = useGetAllRecipes();
  console.log(recipesLists);
  return (
    <main className="h-screen  container mx-auto md:space-y-6 space-y-3 ">
      <Banner />
      <RecipeTags />
      <Recipes recipes={recipesLists} loader={isLoading} />
      <RecommendRecipe recipes={recipesLists} loader={isLoading} />
    </main>
  );
};

export default Home;
