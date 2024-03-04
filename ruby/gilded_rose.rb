class Item
  attr_accessor :name, :sell_in, :quality

  def initialize(name, sell_in, quality)
    @name = name
    @sell_in = sell_in
    @quality = quality
  end

  def to_s
    "#{@name}, #{@sell_in}, #{@quality}"
  end
end

class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality()
    @items.each do |item|
      if item.name == "Sulfuras, Hand of Ragnaros"
        next
      end

      if item.name == "Aged Brie"
        update_aged_brie(item)
      elsif item.name == "Backstage passes to a TAFKAL80ETC concert"
        update_backstage_pass(item)
      elsif item.name.start_with?("Conjured")
        update_conjured_item(item)
      else
        update_standard_item(item)
      end

      item.sell_in -= 1 unless item.name == "Sulfuras, Hand of Ragnaros"

      item.quality = [item.quality, 0].max
      item.quality = [item.quality, 50].min
    end
  end

  private

  def update_standard_item(item)
    degrade_amount = item.sell_in <= 0 ? 2 : 1
    item.quality -= degrade_amount
  end

  def update_aged_brie(item)
    increase_amount = item.sell_in <= 0 ? 2 : 1
    item.quality += increase_amount
  end

  def update_backstage_pass(item)
    puts "Before update: sell_in=#{item.sell_in}, quality=#{item.quality}"
    if item.sell_in < 0
      item.quality = 0
    elsif item.sell_in < 6
      item.quality += 3
    elsif item.sell_in < 11
      item.quality += 2
    else
      item.quality += 1
    end
    puts "After update: sell_in=#{item.sell_in}, quality=#{item.quality}"
  end  

  def update_conjured_item(item)
    degrade_amount = item.sell_in <= 0 ? 4 : 2
    item.quality -= degrade_amount
  end
end
