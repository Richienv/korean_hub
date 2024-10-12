"use client"

import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-xl">Korean Hub</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header