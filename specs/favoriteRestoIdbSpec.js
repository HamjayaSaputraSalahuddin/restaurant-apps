import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllResto()).forEach(async (resto) => {
            await FavoriteRestaurantIdb.deleteResto(resto.id);
        });

        itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
    });
});