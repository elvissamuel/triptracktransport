import React from 'react'
import car1 from '../assets/imgs/aboutcar1.png'
import car2 from '../assets/imgs/aboutcar2.png'
import car4 from '../assets/imgs/aboutcar4.png'

const features = [
    {
      name: 'Sleek design',
      description:
        'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
    },
    { name: 'Comfort handle', description: 'Shaped for steady pours and insulated to prevent burns.' },
    {
      name: 'One-button control',
      description:
        'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
    },
    { name: 'Long spout', description: "Designed specifically for controlled pour-overs that don't slash or sputter." },
  ]

const About = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src={car1}
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={car4}
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={car2}
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border-b border-gray-200 pb-10">
            
              <h2 className="text-teal-600 text-xl font-extrabold">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Changing the Narrative of Inter-State Transportation in Western-Nigeria</p>
            </div>

            <dl className="mt-10 space-y-10">
                <div>
                  <dt className="text-base  text-gray-900"> <p className='font-bold'> TripTrack is at the forefront of transforming the way people travel between states in Western Nigeria. With a vision to redefine convenience, safety, and efficiency in the transportation sector, we are dedicated to delivering a seamless and enjoyable travel experience for our passengers.</p>
                  <p className='my-4'>Gone are the days of tedious, uncomfortable, and unreliable inter-state journeys. At TripTrack, we have set out to change the narrative by offering modern, reliable, and technologically advanced transport solutions that cater to the needs of today's travelers.</p> </dt>
                  {/* <dd className="mt-3 text-sm text-gray-500"><p></p></dd> */}
                  <button className='bg-teal-700 text-white px-6 py-3 rounded-2xl text-base font-bold'>Read more</button>
                </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About