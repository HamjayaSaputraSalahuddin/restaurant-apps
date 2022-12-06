import 'regenerator-runtime';
import FavoriteRestaurantIdb from '../data/favorite-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this.__likeButtonContainer = likeButtonContainer;
    this.__resto = resto;

    await this.__renderButton();
  },
  async __renderButton() {
    const { id } = this.__resto;

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
      await FavoriteRestaurantIdb.putResto(this.__resto);
      this.__renderButton();
    });
  },

  __renderLiked() {
    this.__likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteResto(this.__resto.id);
      this.__renderButton();
    });
  },
};

export default LikeButtonInitiator;
