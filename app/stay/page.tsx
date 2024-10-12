import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StayRecommendations() {
  const recommendations = [
    { title: "Myeongdong LOTTE Hotel", description: "Luxury hotel in the heart of Seoul's shopping district" },
    { title: "Hongdae Guesthouse", description: "Budget-friendly accommodation in the vibrant Hongdae area" },
    { title: "Busan Haeundae Beach Resort", description: "Beachfront resort in Busan with stunning ocean views" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Stay Recommendations</h1>
      <p className="text-xl mb-8">Curated list of accommodations and travel tips for your stay in Korea.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((recommendation, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{recommendation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{recommendation.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}