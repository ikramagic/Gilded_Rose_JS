class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      let degradeAmount = 1;
      item.sellIn -= 1;

      if (item.name.startsWith("Conjured")) {
        degradeAmount *= 2; 
      }

      if (item.name === "Aged Brie") {
        item.quality += (item.sellIn < 0) ? 2 : 1;
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 0) {
          item.quality = 0; /
        } else if (item.sellIn < 5) {
          item.quality += 3;
        } else if (item.sellIn < 10) {
          item.quality += 2;
        } else {
          item.quality += 1;
        }
      } else {
        item.quality -= (item.sellIn < 0) ? 2 * degradeAmount : degradeAmount; 
      }

      item.quality = Math.min(Math.max(item.quality, 0), 50);
    }

    return this.items;
  }
}

module.exports = { Item, Shop };
