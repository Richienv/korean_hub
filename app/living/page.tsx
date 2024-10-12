import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LivingInKorea() {
  const guides = [
    { title: "Renting an Apartment", description: "Tips on finding and renting an apartment in Korea" },
    { title: "Korean Etiquette", description: "Essential cultural etiquette to know when living in Korea" },
    { title: "Healthcare System", description: "Understanding and navigating the Korean healthcare system" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Living in Korea</h1>
      <p className="text-xl mb-8">Practical guides and tips for navigating life as an expat in Korea.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{guide.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}