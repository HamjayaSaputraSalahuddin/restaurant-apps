/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail-container">
        <div class="restaurant-detail-thumbnail">
            <h2 class="restaurant-detail-name">${restaurant.name}</h2>
            <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-detail-thumbnail">
        </div>
        <div class="restaurant-detail-info">
            <h2 class="information-title">Information</h2>
            <p class="restaurant-detail-city">Kota ${restaurant.city}</p>
            <p class="restaurant-detail-rating">Rating: ${restaurant.rating}</p>
            <p class="restaurant-detail-desc">${restaurant.description}</p>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <div class="thumbnail">
            <img class="item-thumbnail" loading="lazy" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
            <p class="item-city">Kota ${restaurant.city}</p>
        </div>
        <div class="item-content">
            <p class="content-rating">Rating: ${restaurant.rating}</p>
            <h3 class="content-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p class="content-description">${restaurant.description}</p>
        </div>
    </article>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
