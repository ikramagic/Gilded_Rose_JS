const { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });
});

/* 0
La qualité baisse de 1 pour les articles standards.
*/

/* 1
Une fois la date de péremption passée, la qualité baisse de 2 pour les articles standards.
*/


/* 2
La qualité d'un article n'est jamais négative.
*/


/* 3
"Aged Brie" augmente en qualité au fil du temps.
*/


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