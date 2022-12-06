import RestaurantDataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
          <main id="main" tabindex="0">
            <div id="restaurant-detail" class="restaurant-detail"></div>
            <div id="likeButtonContainer"></div>
          </main>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantDataSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        city: restaurants.city,
        pictureId: restaurants.pictureId,
        rating: restaurants.rating,
      },
    });

    const Hero = document.querySelector('.hero');
    Hero.style.display = 'none';
  },
};

export default DetailPage;
