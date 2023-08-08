import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

const Banner = () => {
  return (
    <div className="flex items-center mx-auto gap-x-6 bg-teal-700 mb-20 px-6 py-4 sm:px-3.5 sm:before:flex-1">
      <p className="text-base leading-6 text-white">
        <a href="#">
          <strong className="font-semibold text-gray-900">TripTrack- 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Enjoy up to #1000 naira discount when you book tickets 3 or more days ahead. Also lookout for more exciting offers&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default Banner