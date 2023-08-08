import React, { useContext, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ClockIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import bus1 from '../assets/imgs/bus1.png'
import bus2 from '../assets/imgs/bus2.png'
import Nav from './Nav'
import Footer from './Footer'
import { TicketContext } from '../TicketContext'
import Modal1 from './Modal1'
import Seats from './Seats'
import ModifyModal from './ModifyModal'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Terminals', href: '#' },
    { name: 'Get Tickets', href: '#' },
    { name: 'About Us', href: '#' },
  ]

const TicketDetails = () => {
    const {selectedLocation, seatModal, setSeatModal, displayModifyModal, setDisplayModifyModal, selectedDate, selectedDestination, adult, children, tripType, displayModal, setDisplaymodal} = useContext(TicketContext)

  return (
    <div className={`${seatModal || displayModal ? 'fixed w-full' : 'relative'}`}>
        {seatModal && <div className='absolute right-0 left-0 top-16 mx-auto z-50'>
                <Seats />
            </div>}

        {displayModifyModal && <div className='absolute left-0 top-20 shadow-lg max-w-3xl mx-auto right-0  z-40'>
                <ModifyModal />
            </div>}
        
        <div className={`${seatModal || displayModifyModal ? 'pointer-events-none blur-sm' : ''}`}>
            <div className={`w-full h-24 lg:h-14 bg-teal-700 text-white mt-6 text-sm px-4 lg:px-24 pt-3`}>
            
                <div className='grid grid-cols-2 gap-y-4 lg:grid-cols-12 font-bold max-w-6xl mx-auto'>
                    <p className='lg:col-span-2'>{selectedLocation} - {selectedDestination}</p>
                    <p className='lg:col-span-3'>{selectedDate?.toDateString()}</p>
                    <div className='flex lg:col-span-5  gap-2 lg:justify-center'>
                        <span className='capitalize'>{tripType} </span>
                        <span> {adult} Adult(s) </span>
                        <span> {children} Children(s) </span>
                    </div>
                    <div className='lg:col-span-2 text-center'><button className='border px-6 py-1 text-sm rounded shadow' onClick={()=>setDisplayModifyModal(true)}>Modify</button></div>
                </div>
            </div>
            <div className='w-full h-10 border shadow mb-6'>
            </div>
            <div className=' mx-auto max-w-5xl text-gray-900'>
                
                <h2 className='pl-4 md:pl-0 font-bold'>Departure Options</h2>
                <div className='w-full grid lg:grid-cols-12 gap-2 border py-3 px-4 text-base my-6 shadow'>
                    <div className='col-span-3'>
                        <img src={bus2} alt="" />
                        <p className='text-lg text-teal-700 font-bold'>Regular - 16-seater</p>
                    </div>
                    <div className='text-base flex gap-2 col-span-3'>
                        <p>{selectedLocation} - {selectedDestination}</p>
                        <p>{selectedDate?.toDateString()} </p>
                    </div>
                    <div className=' col-span-2 flex gap-2 lg:justify-center'>
                        <div className='w-6 h-6'>
                            <ClockIcon />
                        </div>
                        <p>6:30am</p>
                    </div>
                    <div className='col-span-2'>
                        <p>11 seat(s) available</p>
                    </div>
                    <div className='col-span-2'>
                        <p>Adult</p>
                        <p>#13000</p>
                        <button className='border py-1 px-4 rounded shadow text-sm my-2' onClick={()=>setSeatModal(true)}>View <span className='hidden md:inline'>Seats</span></button>
                    </div>
                </div>
                <div className='w-full grid lg:grid-cols-12 gap-2 border py-3 px-4 text-base my-6 shadow'>
                    <div className='col-span-3'>
                        <img src={bus1} alt="" />
                        <p className='text-lg text-teal-700 font-bold'>Business Class - 10-seater</p>
                    </div>
                    <div className='text-base flex gap-2 col-span-3'>
                        <p>{selectedLocation} - {selectedDestination}</p>
                        <p>{selectedDate?.toDateString()}</p>
                    </div>
                    <div className=' col-span-2 flex gap-2 lg:justify-center'>
                        <div className='w-6 h-6'>
                            <ClockIcon />
                        </div>
                        <p>6:00am</p>
                    </div>
                    <div className='col-span-2'>
                        <p>8 seat(s) available</p>
                    </div>
                    <div className='col-span-2'>
                        <p>Adult</p>
                        <p>#17000</p>
                        <button className='border py-1 px-4 rounded shadow text-sm my-2' onClick={()=>setSeatModal(true)}>View <span className='hidden md:inline'>Seats</span></button>
                    </div>
                </div>
            
            </div>
            <div className='mt-32'>
                <Footer />
            </div>
        </div>

    </div>
  )
}

export default TicketDetails