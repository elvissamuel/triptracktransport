import React, { useContext } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { TicketContext } from '../TicketContext';

const products = [
    {
      id: 1,
      name: 'Ojota-Lagos to Ile-Ife-Osun',
      color: 'From #4500',
      href: '#',
      imageSrc: 'https://www.osundefender.com/wp-content/uploads/2018/03/IMG-20180319-WA0049.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    },
    {
        id: 2,
        name: 'Ajah-Lagos to Abeokuta-Ogun',
        color: 'From #2500',
        href: '#',
        imageSrc: 'https://independent.ng/wp-content/uploads/Abeokuta-Road.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      },

      {
        id: 3,
        name: 'Ojota-Lagos to Akure-Ondo',
        color: 'From #5500',
        href: '#',
        imageSrc: 'https://www.naijaloaded.com.ng/wp-content/uploads/2017/09/BtzpWRvIAAAuf1g.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      },

      {
        id: 4,
        name: 'Berger-Lagos to Ibadan-Oyo',
        color: 'From #3000',
        href: '#',
        imageSrc: 'https://pbs.twimg.com/media/E4qzsJcXoAISmtO.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      },
    // More products...
  ]

const Locations = () => {
  const {selectedDate, selectedLocation, setSelectedDate, setSelectedLocation, selectedDestination, setSelectedDestination} = useContext(TicketContext)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Top Available Routes</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative shadow cursor-pointer">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center hover:scale-150"
                    />
                    </div>
                    <div className="relative mt-4 p-3">
                    <h3 className="text-base font-bold text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-lg font-bold text-gray-500">{product.color}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {/* <p className="relative text-lg font-semibold text-white">{product.price}</p> */}
                    </div>

                    <div className="mt-6 absolute bottom-[35%] right-[10%]">
                        <div className='h-12 w-12 bg-teal-600 rounded-[50%] z-30 p-2 items-center text-center'><ChevronRightIcon className='font-extrabold text-sm' /></div>

                    </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Locations