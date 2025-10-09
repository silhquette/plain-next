import SplashScreen from "@/components/splash-logo";
import { Navbar } from "@/components/navbar";
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Products } from "@/components/products";
import { AnimatedNumber } from '@/components/animated-number'
import Image from "next/image";
import { Heading, Lead, Subheading } from '@/components/text'

function Hero() {
  return (
    <div className="relative bg-white z-0">
      <Gradient className="absolute w-full max-w-7xl mx-auto h-full left-1/2 -translate-x-1/2 bottom-0 rounded-4xl lg:rounded-tl-none border border-ternary" />
      <Image src={'/banner/banner.jpg'} width={2560} height={1707} alt="image hero brand" className="relative z-10 rounded-4xl border-t border-ternary h-[540px] w-full max-w-7xl mx-auto object-cover object-top" />
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Empowering Hygiene Brands to Thrive.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Our mission is to revolutionize the hygiene industry by providing innovative, high-quality hand sanitizers and disinfectants that elevate your brand.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Behind the Brand</h2>
          <p className="mt-6 text-md/6 text-gray-600 leading-relaxed">
            PT Ratu Bio Indonesia was founded in January 2015 in Bandung, Indonesia. The company made its mark with a dedication to crafting high-quality hygiene product manufacturing solutions that cater specifically to our client&apos;s requirements. With a passionate and committed team, we have managed to successfully launch an array of hand sanitizers and disinfectants. Our growth over the years has solidified our reputation as a trusted partner in the hygiene industry.
          </p>
          <p className="mt-6 text-md/6 text-gray-600 leading-relaxed">
            Our state-of-the-art facility guarantees not only the premium quality of our products but also adherence to compliance measures. We work hand in hand with our clients, turning their visions into tangible products. Sustainability and ethical practices form the core of our business ethos, and we are unwavering in our commitment to them. Our ultimate aim is to spearhead industry trends in producing not just effective, but also responsible hygiene products.
          </p>
        </div>
        <div className="lg:pt-0 pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="-mt-4 aspect-square overflow-hidden rounded-2xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-2xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-4 aspect-square overflow-hidden rounded-2xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-2xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1 hidden">
          <Subheading>Results That Matter</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Products Launched</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={100} end={150} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Units Produced Annually</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={9000} end={10000} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Clients Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={50} decimals={1} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Global Sales</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={1} end={5} />M
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 lg:mt-24 mt-48 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col justify-between max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Thanks to Radiant, we&apos;re finding new leads that we never
                  would have found with legal methods.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-secondary from-28% to-quartenary bg-clip-text text-transparent">
                    VP of Sales, Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function About() {
  return(
    <div className="overflow-hidden">
      <SplashScreen />
      <Navbar />
      <Hero />
      <Header />
      <Testimonial />
      <Products limit={4} />
      <Footer />
    </div>
  );
}