import React, { useContext, useState } from 'react'
import bus from '../assets/imgs/bus1.png'
import { TicketContext } from '../TicketContext'
import PaymentModal from './PaymentModal'


const Payment = () => {
    const products = [
        {
          id: 1,
          name: 'High Wall Tote',
          href: '#',
          price: '$210.00',
          color: 'White and black',
          size: '15L',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
          imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
        },
        // More products...
      ]

      const [paymentModal, setPaymentModal] = useState(false)

      const {selectedLocation, selectedDate, selectedDestination, adult, children, tripType, selectedSeats} = useContext(TicketContext)

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      {/* <div className="fixed left-0 top-0 hidden h-full w-1/2 bg-red lg:block" aria-hidden="true" /> */}
      {/* <div className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-900 lg:block" aria-hidden="true" /> */}
      {paymentModal && 
        <div>
            <PaymentModal />
        </div>}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-8 lg:grid-cols-2 lg:px-8 lg:pt-8 border shadow">
        <h1 className="sr-only">Trip Summary</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-white border text-sm shadow py-4 h-[500px] text-teal-700 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-md lg:bg-transparent lg:px-8 lg:pb-14 lg:pt-6"
        >
            <div className='pb-5 mb-4 border-b'>
                <h2 className='text-lg font-bold text-center'>Trip Summary</h2>
            </div>

            <div>
                <ul className='flex flex-col gap-2'>
                    <li className='text-xl font-bold'>
                        {selectedLocation} - {selectedDestination}
                    </li>
                    <li>
                        {selectedDate?.toDateString()}
                    </li>
                    <li>6:00am</li>
                    <li>Regular</li>
                    <li>{tripType}</li>
                    <li>{selectedSeats.map((seat)=>{
                        return <span className='mr-2 text-sm'>seat-{seat},</span>
                    })}</li>
                </ul>
            </div>

            <div>
                <h2 className='text-center text-lg border-b border-t mt-6 py-4 mb-4 font-bold'>Fare</h2>
                <ul className='flex flex-col gap-2'>
                    <li>Departure: 13000</li>
                    <li>{selectedSeats.length} x Person(s)</li>
                    <li>Discount: 0.00</li>
                    <li>Total: 26000</li>
                </ul>
            </div>

        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 text-gray-900 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <form>
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <div>
                <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                  Contact information
                </h3>

                <div className="mt-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      id="phone-number"
                      name="phone-number"
                      autoComplete="phone-number"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Next of Kin Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="next-of-kin"
                      name="next-of-kin"
                      autoComplete="next-of-kin"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Next of Kin Phone No
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      id="next-of-kin-no"
                      name="next-of-kin-no"
                      autoComplete="next-of-kin-no"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                    />
                  </div>
                </div>

              </div>

              <div className="mt-10">
                <h3 id="payment-heading" className="text-lg font-medium text-gray-900">
                  Payment details
                </h3>

                <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                  <div className="col-span-3 sm:col-span-4">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-3">
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>


              <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-gray-50"
                  onClick={(e)=>{e.preventDefault(); setPaymentModal(true)}}
                >
                  Pay now
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Payment