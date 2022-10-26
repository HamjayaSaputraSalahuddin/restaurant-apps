import data from '../DATA.json';

const restaurantList = data => {
    const restaurantItem = document.querySelector('#restaurantList');
    restaurantItem.innerHTML = ''
    data.forEach(restaurant => {
        const {name, description, pictureId, city, rating} = restaurant;
        const restaurantElement = document.createElement('div')

        restaurantElement.innerHTML = `
            <article class="restaurant-item">
            <img class="item-thumbnail" src="${pictureId}" alt="${name}">
            <p class="item-city">Kota ${city}</p>
            <div class="item-content">
                <p class="content-rating">Rating: ${rating}</p>
                <h3 class="content-title">${name}</h3>
                <p class="content-description">${description}</p>
            </div>
            </article>
        
        `
        restaurantItem.appendChild(restaurantElement);
    });
}

restaurantList(data.restaurants);