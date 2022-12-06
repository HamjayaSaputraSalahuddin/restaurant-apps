import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const LikePage = {
  async render() {
    return `  
          <section class="content">
            <div class="explore">
              <h2  tabindex="0" class="explore-label">Favorite Restaurant</h2>
              <div class="restaurants">
                <div class="restaurantList" id="restaurantList"></div>
              </div>
            </div>
          </section>
          `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default LikePage;
