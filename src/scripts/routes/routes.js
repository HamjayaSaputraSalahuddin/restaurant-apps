import DetailPage from '../views/pages/detail';
import HomePage from '../views/pages/home';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': DetailPage,
};

export default routes;
