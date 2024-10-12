import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PriceComparison() {
  const prices = [
    { category: "Food", items: [
      { name: "Rice (1kg)", price: "₩3,000" },
      { name: "Milk (1L)", price: "₩2,500" },
      { name: "Bread (500g)", price: "₩3,200" },
    ]},
    { category: "Transportation", items: [
      { name: "Single subway ride", price: "₩1,350" },
      { name: "Monthly transportation pass", price: "₩55,000" },
      { name: "Taxi start (normal tariff)", price: "₩3,800" },
    ]},
    { category: "Utilities", items: [
      { name: "Electricity, heating, cooling, water, garbage (85m2 apartment)", price: "₩150,000" },
      { name: "Internet (60 Mbps or more, unlimited data)", price: "₩30,000" },
      { name: "Mobile phone plan (with data)", price: "₩40,000" },
    ]},
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Price Comparison</h1>
      <p className="text-xl mb-8">Cost of living in Korea: A comprehensive guide to everyday expenses.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prices.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}