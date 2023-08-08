import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, DocumentIcon, PencilSquareIcon, TrashIcon, TicketIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Ticket Details',
    description:
      'Fill in requirement information such as name, email, phone number, destination, vehicle-class, travel date and time, number of people traveling and so on.',
    icon: TicketIcon,
  },
  {
    name: 'Payment Details',
    description:
      'Payment details involves your card details and payment is safely processed through either of our payment gateway which includes; Paystack and Flutterwave.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Confirmation',
    description:
      'After payment is made, confirmation is sent to the email address you filled in while registering together with the details of the transaction.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Tender at Terminal',
    description:
      'Evidence of payment can either be downloaded from your email and printed out to be tendered at our nearest terminal. A screenshot of the confirmation on your mobile phone is also accepted at our terminals',
    icon: DocumentIcon,
  },
]

const Steps = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className='mr-8'>
              <h2 className="text-4xl mb-4 font-bold tracking-tight text-white sm:text-5xl">
                <span>Seemless Procedures to Ensure</span> <span className='text-teal-700'>Seemless Travels</span>
              </h2>
            <p className='text-white'>You do not need to go through the hassles of getting tickets in bus stations, get tickets online, with fixed departure date and time, seats and even the type of vehicle.</p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-xl font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-slate-200">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Steps