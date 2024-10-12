import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VisaInformation() {
  const visaInfo = [
    { title: "Tourist Visa", content: "Visa-free entry for up to 90 days for many countries" },
    { title: "Student Visa", content: "Required for studying in Korea for more than 90 days" },
    { title: "Work Visa", content: "Various types available based on job and qualifications" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Visa Information</h1>
      <p className="text-xl mb-8">Latest visa requirements and updates for traveling to Korea.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaInfo.map((info, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{info.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{info.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}