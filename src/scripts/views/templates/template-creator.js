import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
<div class="thumbnail">
    <img class="item-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <p class="item-city">Kota ${restaurant.city}</p>
</div>
<div class="item-content">
    <p class="content-rating">Rating: ${restaurant.rating}</p>
    <h3 class="content-title"><a href="#">${restaurant.name}</a></h3>
    <p class="content-description">${restaurant.description}</p>
</div>
</article>
`;

export default createRestaurantItemTemplate;
