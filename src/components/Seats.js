import React, { useEffect, useState } from 'react'
import { UserIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import {XCircleMarkIcon} from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { TicketContext } from '../TicketContext'
import { Link } from 'react-router-dom'

const Seats = () => {
    
    const [bookedSeats, setBookedSeats] = useState(['2', '5', '6', '8', '10'])
    const [takenSeat, setTakenSeat] = useState()
    const {selectedSeats, setSelectedSeats, seatModal, setSeatModal} = useContext(TicketContext)

    useEffect(()=>{
        console.log(selectedSeats)
    }, [selectedSeats])

    const handleBookedSeats = (val)=>{
        bookedSeats.include(val)
    }

    const addSeats = (e)=>{
        if(e.target.checked){
            setSelectedSeats((prevSeats)=>[...prevSeats, e.target.value])
            // console.log(selectedSeats)

        } else{
            setSelectedSeats((prevSeats) => {
               const updatedSeats = prevSeats.filter((seat)=>seat!==e.target.value)
               return updatedSeats.length > 0 ? updatedSeats : [];
            })
            // console.log(selectedSeats)

        }
    }

  return (
    <div>
        <div className='shadow rounded-xl bg-slate-100 text-black max-w-lg my-4 py-5 mx-auto px-10 relative'>
            <div className=' w-8 h-8 absolute right-6 cursor-pointer' onClick={()=>setSeatModal(false)}>
                <XCircleIcon color='teal' />
            </div>
            <h2 className='my-3 text-xl font-bold'>Select seat(s)</h2>
            <div className='flex gap-5'>
                <div className='flex gap-1 items-center'>
                    <div className="w-6 h-6"><UserIcon color='red' /> </div>
                    <span className='text-base'>Selected seat</span>
                </div>

                <div className='flex gap-1 items-center'>
                    <div className="w-6 h-6"><UserIcon color='teal' /> </div>
                    <span className='text-base'>Available seat</span>
                </div>

                <div className='flex gap-1 items-center'>
                    <div className="w-6 h-6"><UserIcon color='blue' /> </div>
                    <span className='text-base'>Booked seat</span>
                </div>
                
            </div>
            <div className='grid grid-cols-12 gap-y-6 my-6'>
                <div className='w-9 h-9 col-span-8'><UserCircleIcon /></div>
                
                <label htmlFor="seat1" className={`w-8 h-8 col-span-4 relative cursor-pointer ${bookedSeats.includes('1') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" value='1' className='hidden' onChange={(e)=>addSeats(e)} id="seat1" />
                    <UserIcon color={bookedSeats.includes('1') ? 'blue' : selectedSeats.includes('1') ? 'red' : 'teal'}/><span className='absolute top-0 right-0 text-[12px]'>1</span>
                </label>

                <label htmlFor='seat2' className={`w-8 h-8 col-span-2 relative cursor-pointer ${bookedSeats.includes('2') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' name="" value='2' onChange={(e)=>addSeats(e)} id="seat2" />
                    <UserIcon color={bookedSeats.includes('2') ? 'blue' : selectedSeats.includes('2') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>2</span>
                </label>

                <label htmlFor='seat3' className={`w-8 h-8 col-span-10 relative cursor-pointer ${bookedSeats.includes('3') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='3' onChange={(e)=>addSeats(e)} id="seat3" />
                    <UserIcon color={bookedSeats.includes('3') ? 'blue' : selectedSeats.includes('3') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>3</span>
                </label>

                <label htmlFor='seat4' className={`w-8 h-8 col-span-2 relative cursor-pointer ${bookedSeats.includes('4') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='4' onChange={(e)=>addSeats(e)} id="seat4" />
                    <UserIcon color={bookedSeats.includes('4') ? 'blue' : selectedSeats.includes('4') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>4</span>
                </label>

                <label htmlFor='seat5' className={`w-8 h-8 col-span-6 relative cursor-pointer ${bookedSeats.includes('5') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='5' onChange={(e)=>addSeats(e)} id="seat5" />
                    <UserIcon color={bookedSeats.includes('5') ? 'blue' : selectedSeats.includes('5') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>5</span>
                </label>

                <label htmlFor='seat6' className={`w-8 h-8 col-span-4 relative cursor-pointer ${bookedSeats.includes('6') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='6' onChange={(e)=>addSeats(e)} id="seat6" />
                    <UserIcon color={bookedSeats.includes('6') ? 'blue' : selectedSeats.includes('6') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>6</span>
                </label>

                <label htmlFor='seat7' className={`w-8 h-8 col-span-2 relative cursor-pointer ${bookedSeats.includes('7') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='7' onChange={(e)=>addSeats(e)} id="seat7" />
                    <UserIcon color={bookedSeats.includes('7') ? 'blue' : selectedSeats.includes('7') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>7</span>
                </label>

                <label htmlFor='seat8' className={`w-8 h-8 col-span-6 relative cursor-pointer ${bookedSeats.includes('8') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='8' onChange={(e)=>addSeats(e)} id="seat8" />
                    <UserIcon color={bookedSeats.includes('8') ? 'blue' : selectedSeats.includes('8') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>8</span>
                </label>

                <label htmlFor='seat9' className={`w-8 h-8 col-span-4 relative cursor-pointer ${bookedSeats.includes('9') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='9' onChange={(e)=>addSeats(e)} id="seat9" />
                    <UserIcon color={bookedSeats.includes('9') ? 'blue' : selectedSeats.includes('9') ? 'red' : 'teal'} /><span className='absolute top-0 right-0 text-[12px]'>9</span>
                </label>

                <label htmlFor='seat10' className={`w-8 h-8 col-span-2 relative cursor-pointer ${bookedSeats.includes('10') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='10' onChange={(e)=>addSeats(e)} id="seat10" />
                    <UserIcon color={bookedSeats.includes('10') ? 'blue' : selectedSeats.includes('10') ? 'red' : 'teal'} /><span className='absolute top-0 -right-2 text-[12px]'>10</span>
                </label>

                <label htmlFor='seat11' className={`w-8 h-8 col-span-6 relative cursor-pointer ${bookedSeats.includes('11') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='11' onChange={(e)=>addSeats(e)} id="seat11" />
                    <UserIcon color={bookedSeats.includes('11') ? 'blue' : selectedSeats.includes('11') ? 'red' : 'teal'} /><span className='absolute top-0 -right-2 text-[12px]'>11</span>
                </label>

                <label htmlFor='seat12' className={`w-8 h-8 col-span-4 relative cursor-pointer ${bookedSeats.includes('12') ?'pointer-events-none': ''}`}>
                    <input type="checkbox" className='hidden' value='12' onChange={(e)=>addSeats(e)} id="seat12" />
                    <UserIcon color={bookedSeats.includes('12') ? 'blue' : selectedSeats.includes('12') ? 'red' : 'teal'} /><span className='absolute top-0 -right-2 text-[12px]'>12</span>
                </label>

            </div>
            {selectedSeats.length > 0 && <p className='text-base'>You have selected: {selectedSeats.length} seat(s)</p>}
            <Link to='/ticketpayment'>
                <button className={`text-white px-4 py-2 rounded-lg w-full my-4 cursor-pointer ${selectedSeats.length <= 0 ? 'bg-slate-400' : 'bg-teal-700'}`}>Continue</button>
            </Link>
        </div>
    </div>
  )
}

export default Seats