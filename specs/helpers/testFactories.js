import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-idb";
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithResto = async (resto) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavoriteRestaurantIdb,
        resto,
    });
};

export { createLikeButtonPresenterWithResto };