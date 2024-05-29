import { useParams } from 'react-router-dom';

const ExplorePage = () => {
  const { tag } = useParams();
  return (
    <div>
      <h1>Explore {tag}</h1>
    </div>
  );
};

export default ExplorePage;
