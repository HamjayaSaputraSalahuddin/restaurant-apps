import FavoriteRestaurantIdb from "../src/scripts/data/favorite-idb";
import * as TestFactories from './helpers/testFactories';

describe('Unlike A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
    
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putResto({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteResto(1);
    });

    it('should display unlike widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this resto"]'))
         .toBeTruthy();
    });

    it('should not display like widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this resto"]'))
         .toBeFalsy();
    });

    it('should be able to remove liked resto from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        document.querySelector('[aria-label="unlike this resto"]')
         .dispatchEvent(new Event('click'));

         expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
    })
    
    it('should not throw error if the unliked resto is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        document.querySelector('[aria-label="unlike this resto"]')
         .dispatchEvent(new Event('click'));
        
        expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
    });
});