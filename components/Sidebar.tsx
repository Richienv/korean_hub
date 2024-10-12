"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const categories = [
  { name: 'Korean Notes', href: '/notes', subcategories: ['Vocabulary', 'Grammar', 'Sentences'] },
  { name: 'Visa Information', href: '/visa', subcategories: ['Tourist Visa', 'Student Visa', 'Work Visa'] },
  { name: 'Price Comparison', href: '/prices', subcategories: ['Food', 'Transportation', 'Utilities'] },
  { name: 'Stay Recommendations', href: '/stay', subcategories: ['Hotels', 'Guesthouses', 'Apartments'] },
  { name: 'Living in Korea', href: '/living', subcategories: ['Renting', 'Healthcare', 'Culture'] },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-background border-r">
      <nav className="p-4">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={category.href}
                className={cn(
                  "block p-2 rounded-lg hover:bg-accent",
                  pathname.startsWith(category.href) && "bg-accent"
                )}
              >
                {category.name}
              </Link>
              {pathname.startsWith(category.href) && (
                <ul className="ml-4 mt-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory}>
                      <Link
                        href={`${category.href}#${subcategory.toLowerCase().replace(' ', '-')}`}
                        className="block p-1 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar