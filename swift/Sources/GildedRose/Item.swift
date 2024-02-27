public class Item {
    public let name: String
    public let sellIn: Int
    public let quality: Int

    public init(name: String, sellIn: Int, quality: Int) {
        self.name = name
        self.sellIn = sellIn
        self.quality = quality
    }
}

extension Item: CustomStringConvertible {
    public let description: String {
        name + ", " + String(sellIn) + ", " + String(quality)
    }
}
