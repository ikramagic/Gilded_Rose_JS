let { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {

    /* 0
February's fool
  */

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });
  
  /* 1
La qualité baisse de 1 pour les articles standards.
*/

  it("standard items decrease in quality by 1", function () {
    let gildedRose = new Shop([new Item("Standard Item", 10, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(19);
  });
});

/* 2
Une fois la date de péremption passée, la qualité baisse de 2 pour les articles standards.
*/

it("Standard items decrease in quality by 2 after the sell date has passed", function() {
  const gildedRose = new Shop([new Item("Standard Item", 0, 10)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(8);
});


/* 3
La qualité d'un article n'est jamais négative.
*/

it("An item's quality is never negative", function() {
  const gildedRose = new Shop([new Item("Standard Item", 5, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(0);
});

/* 4
"Aged Brie" augmente en qualité au fil du temps.
*/

it("Aged Brie increases in quality the older it gets", function() {
  const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(1);
});


/* 5
La qualité d'un article n'est jamais supérieure à 50, sauf "Sulfuras".
*/

it("An item's quality is never more than 50, except Sulfuras", function() {
  const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(50);
});


/* 6
"Sulfuras" ne perd jamais en qualité et n'a pas de date de péremption.
*/

it("Sulfuras never decreases in quality and does not have a sell-by date", function() {
  const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", null, 80)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(80);
});


/* 7
"Backstage passes" augmente en qualité comme "Aged Brie", mais la qualité tombe à 0 après le concert.
*/

it("Backstage passes increase in quality like Aged Brie but drop to 0 after the concert", function() {
  const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(0);
});


/* 8
"Conjured" items se dégradent en qualité deux fois plus vite que les articles normaux.
*/

it("Conjured items degrade in quality twice as fast as normal items", function() {
  const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
  const items = gildedRose.updateQuality();
  expect(items[0].quality).toEqual(4); 
});