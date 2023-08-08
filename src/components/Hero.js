import React, { useContext, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import bus1 from '../assets/imgs/bus1.png'
import bus2 from '../assets/imgs/bus2.png'
import bus3 from '../assets/imgs/bus3.png'
import bus4 from '../assets/imgs/bus4.png'
import van from '../assets/imgs/truck1.png'
import Modal1 from './Modal1'
import Nav from './Nav'
import { TicketContext } from '../TicketContext'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Terminals', href: '#' },
  { name: 'Get Tickets', href: '#' },
  { name: 'About Us', href: '#' },
]


const Hero = () => {
const {displayModal, setDisplaymodal} = useContext(TicketContext)


  return (
    <div className="relative overflow-hidden ">
       {/* <Nav /> */}
      <main>
        <div className={`bg-gray-900 pt-10 sm:pt-16 lg:pb-24 lg:pt-8`}>
          {displayModal && <div className='absolute left-0 top-0 right-0  z-40'>
              <Modal1 />
          </div>}
          
          <div className={`mx-auto max-w-7xl lg:px-8 relative ${displayModal && 'blur-sm pointer-events-none'}`}>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
                    <a
                      href="#"
                      className="flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-teal-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">Register as a Driver</span>
                      <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">A Better Way to</span>
                    <span className="block text-teal-500">Travel Fast & Easy</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                   
                  Celebrate Seamless Journeys: Your Trusted Partner for Effortless Transportation. Book with Us to Explore a World of Connected Destinations and Unmatched Convenience
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex justify-center lg:justify-start">
                        <div className="mt-3 sm:ml-3 sm:mt-0">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-teal-600 px-6 py-3 font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                            onClick={(e)=>{e.preventDefault(); setDisplaymodal(true); }}
                          >
                            Get Tickets
                          </button>
                        </div>
                        <div className="mt-3 sm:ml-3 sm:mt-0">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-slate-200 px-6 py-3 font-medium text-teal-600 shadow hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Contact Us
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className=" mt-12 lg:mt-32 xl:mt-0 lg:relative lg:m-0">
                {/* <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                  Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                    alt=""
                  />
                </div> */}
                <img src={bus2} alt="" />
                <img src={bus4} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}

export default Hero