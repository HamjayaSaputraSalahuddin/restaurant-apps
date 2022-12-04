import RestaurantDataSource from '../../data/data-source';
import createRestaurantItemTemplate from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Nganre Place!</h1>
          <p class="hero-tagline">Cari tempat makan yang pas yuk!</p>
        </div>
      </div>
    
      <main id="main">
        <section class="content">
          <div class="explore">
            <h2  tabindex="0" class="explore-label">Explore Restaurant</h2>
            <div class="restaurants">
              <div class="restaurantList" id="restaurantList"></div>
            </div>
          </div>
        </section>
      </main>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default HomePage;
