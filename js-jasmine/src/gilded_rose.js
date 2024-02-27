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
      let degradeAmount = 1; 

      if (item.name === "Aged Brie") {
        item.quality = Math.min(item.quality + 1, 50);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 0) item.quality = 0;
        else if (item.sellIn < 6) item.quality = Math.min(item.quality + 3, 50);
        else if (item.sellIn < 11) item.quality = Math.min(item.quality + 2, 50);
        else item.quality = Math.min(item.quality + 1, 50);
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      } else {
        if (item.name.startsWith("Conjured")) {
          degradeAmount = 2;
        }
        if (item.sellIn < 0) degradeAmount *= 2;
        item.quality = Math.max(item.quality - degradeAmount, 0);
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn -= 1;
      }
    }

    return this.items;
  }
}

module.exports = { Item, Shop };
