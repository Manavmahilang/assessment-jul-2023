'use client'
import { useState } from 'react'
import SearchBar from './SearchBar'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Landing() {

  return (
    <div className="relative bg-white">
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/5273011/pexels-photo-5273011.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.95, // Adjust the opacity to your preference
      }}
    ></div>
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className='text-black'>Ayurheals,</span> India&apos;s bootstrapped online ayurvedic pharmacy
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              With over 100 years of experience in dispensing quality medicines. We provide authentic and branded Ayurvedic, Herbal, Siddha, Unani Medicines.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <SearchBar />
              <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Categories
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
