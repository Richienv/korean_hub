import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KoreanNotes() {
  const notes = [
    { title: "Basic Greetings", content: "안녕하세요 (annyeonghaseyo) - Hello" },
    { title: "Numbers", content: "하나 (hana) - One, 둘 (dul) - Two, 셋 (set) - Three" },
    { title: "Common Phrases", content: "감사합니다 (gamsahamnida) - Thank you" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Korean Notes</h1>
      <p className="text-xl mb-8">Exclusive language learning resources to help you master Korean.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{note.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}