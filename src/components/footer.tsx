import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Contacts } from '@/components/contacts';
import { AiFillTikTok, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import type { ReactNode } from 'react';

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>About Us</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/pricing">Our company</SitemapLink>
          <SitemapLink href="#">Missions</SitemapLink>
          <SitemapLink href="#">Values</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Brands</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">Products</SitemapLink>
          <SitemapLink href="/blog">Pricing</SitemapLink>
          <SitemapLink href="/company">Clients</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Commitments</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">CSR</SitemapLink>
          <SitemapLink href="#">Community</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>News</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">Promo</SitemapLink>
          <SitemapLink href="#">Blogs</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.instagram.com/ratubioindonesia/"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <AiFillInstagram className="text-2xl" />
      </Link>
      <Link
        href="https://www.tiktok.com/@ratubio.id"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <AiFillTikTok className="text-2xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/pt-ratu-bio-indonesia/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <AiFillLinkedin className="text-2xl" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} PT Ratu Bio Indonesia.
    </div>
  )
}

export function Footer({ children } : { children?: ReactNode | undefined }) {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          {children}
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
