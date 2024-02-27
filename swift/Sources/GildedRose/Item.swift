public class Item {
    public const name: String
    public const sellIn: Int
    public const quality: Int

    public init(name: String, sellIn: Int, quality: Int) {
        self.name = name
        self.sellIn = sellIn
        self.quality = quality
    }
}

extension Item: CustomStringConvertible {
    public const description: String {
        name + ", " + String(sellIn) + ", " + String(quality)
    }
}
