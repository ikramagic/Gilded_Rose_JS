let { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  /* 0
La qualité baisse de 1 pour les articles standards.
*/

  it("standard items decrease in quality by 1", function () {
    let gildedRose = new Shop([new Item("Standard Item", 10, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(19);
  });
});

/* 1
Une fois la date de péremption passée, la qualité baisse de 2 pour les articles standards.
*/

it("Standard items decrease in quality by 2 after the sell date has passed", function() {
  const gildedRose = new Shop([new Item("Standard Item", 0, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(8);
});


/* 2
La qualité d'un article n'est jamais négative.
*/

it("An item's quality is never negative", function() {
  const gildedRose = new Shop([new Item("Standard Item", 5, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(0);
});

/* 3
"Aged Brie" augmente en qualité au fil du temps.
*/

it("Aged Brie increases in quality the older it gets", function() {
  const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(1);
});


/* 4
La qualité d'un article n'est jamais supérieure à 50, sauf "Sulfuras".
*/


/* 5
"Sulfuras" ne perd jamais en qualité et n'a pas de date de péremption.
*/

/* 6
"Backstage passes" augmente en qualité comme "Aged Brie", mais la qualité tombe à 0 après le concert.
*/

/* 7
"Conjured" items se dégradent en qualité deux fois plus vite que les articles normaux.
*/
