import MagazineDetail from '@pages/magazine/MagazineDetail';
import MagazineList from '@pages/magazine/MagazineList';
import MarketDetail from '@pages/market/MarketDetail';
import MarketList from '@pages/market/MarketList';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MarketList />,
  },
]);

export default router;
