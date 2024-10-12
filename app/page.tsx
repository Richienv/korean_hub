import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const subscriptions = [
    {
      title: "Free Tier",
      description: "Access to 5 basic Korean notes",
      price: "Free",
      features: ["5 Korean notes (basic)", "Limited access"],
      image: "https://images.unsplash.com/photo-1546803073-23568b8c98e6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      href: "/notes"
    },
    {
      title: "Standard Plan",
      description: "Full access to Korean notes, visa information, and price comparison",
      price: "79,000 IDR/mo",
      features: ["Full Korean notes", "Visa information", "Price comparison"],
      image: "https://images.unsplash.com/photo-1617653695386-1d78957d33f8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      href: "/subscribe/standard"
    },
    {
      title: "Premium Plan",
      description: "Access to all categories and features",
      price: "129,000 IDR/mo",
      features: ["All categories", "Stay recommendations", "Living in Korea guides"],
      image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      href: "/subscribe/premium"
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Korean Hub</h1>
      <p className="text-xl mb-12">Choose the plan that best fits your needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((subscription) => (
          <Card key={subscription.title} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={subscription.image}
                alt={subscription.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{subscription.title}</CardTitle>
              <CardDescription>{subscription.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold mb-4">{subscription.price}</p>
              <ul className="list-disc list-inside">
                {subscription.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={subscription.href}>Subscribe</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}