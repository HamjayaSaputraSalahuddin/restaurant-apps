import FavoriteRestaurantIdb from '../data/favorite-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.__likeButtonContainer = likeButtonContainer;
    this.__restaurant = restaurant;

    await this.__renderButton();
  },
  async __renderButton() {
    const { id } = this.__restaurant;

    if (await this.__isRestoExist(id)) {
      this.__renderLiked();
    } else {
      this.__renderLike();
    }
  },

  async __isRestoExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getResto(id);
    return !!restaurant;
  },

  __renderLike() {
    this.__likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putResto(this.__restaurant);
      this.__renderButton();
    });
  },

  __renderLiked() {
    this.__likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteResto(this.__restaurant.id);
      this.__renderButton();
    });
  },
};

export default LikeButtonInitiator;
