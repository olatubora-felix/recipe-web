import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './home';
import ExplorePage from './explore';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/explore/:tag',
        element: <ExplorePage />,
      },
    ],
  },
]);
