import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-idb";
import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";

const createLikeButtonPresenterWithResto = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavoriteRestaurantIdb,
        resto,
    });
};

export { createLikeButtonPresenterWithResto };