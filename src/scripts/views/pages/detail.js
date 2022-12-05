import RestaurantDataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
            <div id="restaurant-detail" class="restaurant-detail"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantDataSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);
  },
};

export default DetailPage;
