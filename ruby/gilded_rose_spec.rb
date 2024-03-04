require_relative './gilded_rose.rb'

describe GildedRose do
  describe "#update_quality" do
    it "does not change the name" do
      items = [Item.new("foo", 10, 20)]
      GildedRose.new(items).update_quality()
      expect(items[0].name).to eq "foo"
    end

    it "decreases quality by 1 for standard items" do
      items = [Item.new("Standard Item", 10, 20)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 19
    end

    it "decreases quality twice as fast after the sell date has passed" do
      items = [Item.new("Standard Item", 0, 20)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 18
    end

    it "never allows negative quality" do
      items = [Item.new("Standard Item", 10, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to be >= 0
    end

    it "increases quality of 'Aged Brie' over time" do
      items = [Item.new("Aged Brie", 2, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 1
    end

    it "'Sulfuras' never decreases in quality and its sell_in date does not change" do
      items = [Item.new("Sulfuras, Hand of Ragnaros", 10, 80)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 80
      expect(items[0].sell_in).to eq 10
    end

    context "'Backstage passes' quality" do
      it "increases by 2 when there are 10 days or less" do
        items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 10, 20)]
        GildedRose.new(items).update_quality()
        expect(items[0].quality).to eq 22
      end

      it "increases by 3 when there are 5 days or less" do
        items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 5, 20)]
        GildedRose.new(items).update_quality()
        expect(items[0].quality).to eq 23
      end

      it "drops to 0 after the concert" do
        items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 0, 20)]
        GildedRose.new(items).update_quality()
        expect(items[0].quality).to eq 0
      end
    end

    it "'Conjured' items decrease in quality twice as fast as normal items" do
      items = [Item.new("Conjured Mana Cake", 10, 20)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 18
    end
  end
end
