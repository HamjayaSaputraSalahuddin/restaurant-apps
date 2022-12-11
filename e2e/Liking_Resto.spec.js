const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Like Resto', async  ({ I }) => {
    I.see('Explore Restaurant', '.explore-label');

    I.seeElement('.content-title');
    const firstResto = locate('.content-title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton')

    I.amOnPage('/#/like');
    I.seeElement('.item-content');
    const likedRestoTitle = await I.grabTextFrom('.content-title');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unlike Resto', async  ({ I }) => {
    I.see('Explore Restaurant', '.explore-label');

    I.seeElement('.content-title');
    const firstResto = locate('.content-title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.item-content');
    const likedRestoTitle = await I.grabTextFrom('.content-title');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);

    I.click(locate('.content-title a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton')

    I.amOnPage('/#/like');
    I.dontSeeElement('.item-content');

});
