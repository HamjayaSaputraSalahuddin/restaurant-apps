import RestaurantDataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
          <main id="main">
            <div id="restaurant-detail" class="restaurant-detail"></div>
          </main>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantDataSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    const Hero = document.querySelector('.hero');
    Hero.style.display = 'none';
  },
};

export default DetailPage;
