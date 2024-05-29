import Banner from '../../components/shared/Home/Banner';
import { RecipeTags } from '../../components/shared/Home/RecipeTags';

const Home = () => {
  return (
    <main className="h-screen  container mx-auto md:space-y-6 space-y-3">
      <Banner />
      <RecipeTags />
    </main>
  );
};

export default Home;
