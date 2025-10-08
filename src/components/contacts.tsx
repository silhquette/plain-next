
import { MapPin, Mail, Phone } from 'lucide-react'
import { Button } from './button'
import { Subheading } from './text'
import { AiFillTikTok, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

export function Contacts() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Contact</Subheading>
        <p className="mt-2 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Get in touch with us.
        </p>
      </hgroup>
      <div className="grid lg:grid-cols-2 pt-12 items-center">
        <div className='flex flex-col'>
          <div className="max-w-lg lg:text-left">
            <h2 className="text-xl font-semibold">We are here for you</h2>
            <p className="mt-2 text-md/6 text-gray-600">
              For more info or inquiry about our products and pricing please feel free to get in touch with us.
            </p>
            <div className='flex flex-col lg:flex-row gap-4 items-center mt-3'>
              <div className='rounded-full p-3 bg-gray-100'><MapPin color='#FF9500' size={20} /></div>
              <span>Jl. Barokah II, RT 03 RW 10, Kp Parungdengdek, Wanaherang, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16965</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 items-center mt-3'>
              <div className='rounded-full p-3 bg-gray-100'><Mail color='#FF9500' size={20} /></div>
              <span>ratubio@test.info.com</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 items-center mt-3'>
              <div className='rounded-full p-3 bg-gray-100'><Phone color='#FF9500' size={20} /></div>
              <span>081314842909</span>
            </div>
            <h2 className="text-xl font-semibold mt-5">Follow us on</h2>
            <div className='p-2 flex gap-4 justify-center lg:justify-start lg:pb-0 pb-10'>
              <a href="https://www.instagram.com/ratubioindonesia/" className='cursor-pointer'><AiFillInstagram size={28} color='#FF9500' /></a>
              <a href="https://www.tiktok.com/@ratubio.id" className='cursor-pointer'><AiFillTikTok size={28} color='#FF9500' /></a>
              <a href="https://www.linkedin.com/company/pt-ratu-bio-indonesia/" className='cursor-pointer'><AiFillLinkedin size={28} color='#FF9500' /></a>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-lg border border-zinc-400'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.708994978351!2d106.94045911139115!3d-6.431416262867675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69953d49a2eb17%3A0x7974d83d2855f518!2sPT%20Ratu%20Bio%20Indonesia!5e0!3m2!1sid!2sid!4v1756830676688!5m2!1sid!2sid" width="100%" height="400" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}