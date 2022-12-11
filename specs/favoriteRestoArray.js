import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

let favoriteRestaurants = [];

const FavoriteRestoArray = {
    getResto(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurants.find((resto) => resto.id == id);
    },

    getAllResto() {
        return favoriteRestaurants;
    },

    putResto(resto) {
        if (!resto.hasOwnProperty('id')) {
            return;
        }

        if (this.getResto(resto.id)) {
            return;
        }

        favoriteRestaurants.push(resto);
    },

    deleteResto(id) {
        favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
    },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestaurants = []);

    itActsAsFavoriteRestoModel(FavoriteRestoArray);
});