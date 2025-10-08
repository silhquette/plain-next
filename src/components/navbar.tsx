'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/brands', label: 'Brands' },
  { href: '/commitments', label: 'Commitments' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

function DesktopNav() {
  const pathname = usePathname();
  
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className={`flex items-center px-4 py-3 text-base font-medium hover:text-gray-950 ${isActive ? 'text-gray-950' : 'text-gray-500'} bg-blend-multiply data-hover:bg-black/2.5`}
          >
            {label}
          </Link>
        </PlusGridItem>
      )})}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden relative">
      <div className="absolute bg-gradient-to-b from-quartenary to-white -left-6 -right-6 top-0 bottom-0 z-0"></div>
      <div className="flex flex-col gap-6 py-4 relative z-10">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-8 sm:pt-8 px-6 relative z-10 -bottom-[1px]">
      <div className='max-w-2xl lg:max-w-7xl mx-auto'>
        <div className="relative flex justify-between">
          <div className="relative flex gap-6">
            <div className="pb-3 px-4 pt-4 bg-quartenary rounded-t-3xl border border-b-quartenary border-ternary">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </div>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}
