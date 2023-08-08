import React, { useContext, useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { inputs, updateDate } from '../features/buyTicket';
import { TicketContext } from '../TicketContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const Modal1 = () => {

    const dispatch = useDispatch()
    const ticketInput = useSelector((state)=>state.buyTicket.value)

    const locations = [
        {
            name:'Select Departure',
            possibleDestination:'Empty',
            value: 'empty'
        },
        {
            name:'Osun(Ife)',
            possibleDestination:'Lagos, Oyo, Ogun',
            value: 'Osun'
        },
        {
            name: 'Ogun(Abeokuta)',
            possibleDestination: 'Lagos, Oyo',
            value: 'Ogun'
        },
        {
            name: 'Lagos(Ojota)',
            possibleDestination: 'Ogun, Oyo, Ondo, Osun, Ekiti',
            value: 'Lagos'
        },
        {
            name: 'Lagos(Ajah)',
            possibleDestination: 'Ogun, Oyo, Ondo, Osun, Ekiti',
            value: 'Lagos'
        },
        {
            name: 'Lagos(Mile 2)',
            possibleDestination: 'Ogun, Oyo, Ondo, Osun, Ekiti',
            value: 'Lagos'
        },
        {
            name:'Ondo(Akure)',
            possibleDestination:'Lagos, Osun, Oyo, Ogun',
            value: 'Ondo'
        },
        {
            name:'Oyo(Ibadan)',
            possibleDestination:'Lagos, Osun, Ogun, Ondo',
            value: 'Oyo'
        },
        {
            name:'Ekiti(Ado)',
            possibleDestination:'Lagos, Ondo, Oyo, Ogun',
            value: 'Ekiti'
        }
    ]
    const adultNumber = ['Adult', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const childrenNumber = ['Children (2-10)', 1, 2, 3, 4, 5];
    const {selectedDate, selectedLocation, setSelectedDate, setSelectedLocation, selectedDestination, setSelectedDestination, adult, setAdult, children, setChildren, displayModal, setDisplaymodal, tripType, setTripType} = useContext(TicketContext)
    const [buyTickets, setBuyTickets] = useState(true)
    const [privateCar, setPrivateCar] = useState(false)
    const [prompt1, setPrompt1] = useState(false)
    const [prompt2, setPrompt2] = useState(false)
    const [checkTicket, setCheckTicket] = useState(false)

    useEffect(()=>{
        setTripType(inputRef.current?.value)
    }, [])

    const inputRef = useRef();
    
    const destinationList = [{
        name:'Select Destination',
        possibleDestination:'Empty',
        value: 'empty'
    }, ...locations.filter((location, index) => location.possibleDestination.includes(selectedLocation))];
    // console.log( 'destination', destinationList);

    const handleBuyTicket = ()=>{
        setBuyTickets(true);
        setPrivateCar(false);
        setCheckTicket(false)
    }
    const handlePrivateCar = ()=>{
        setBuyTickets(false);
        setPrivateCar(true);
        setCheckTicket(false)
    }
    const handleCheckTicket = ()=>{
        setBuyTickets(false);
        setPrivateCar(false);
        setCheckTicket(true)
    }

    const handleInputs = (val, e)=>{
        dispatch(inputs({val : e.target.value}))
    }

  return (
    <div className='text-gray-600 px-4 md:px-10 py-10 rounded-lg max-w-3xl mx-auto bg-white relative'>
        <div className="w-5 h-5 absolute right-4 top-2 cursor-pointer border border-teal-600" onClick={()=>setDisplaymodal(false)}>
            <XMarkIcon color='teal' />
        </div>
        <div className='grid md:grid-cols-3 gap-4 mb-6'>
            <button className={`px-8 py-2 border border-teal-600 text-base rounded ${buyTickets ? 'bg-teal-700 text-slate-100':'text-teal-600'}`} onClick={()=>handleBuyTicket()}>BUY TICKETS</button>
            <button className={`px-8 py-2 border border-teal-600 text-base rounded ${privateCar ? 'bg-teal-700 text-slate-100':'text-teal-600'}` } onClick={()=>handlePrivateCar()}>PRIVATE</button>
            <button className={`px-8 py-2 border border-teal-600 text-base rounded ${checkTicket ? 'bg-teal-700 text-slate-100':'text-teal-600'}`} onClick={()=>handleCheckTicket()}>CHECK TICKET</button>
        </div>
        {buyTickets &&
        <div>
            <div className='flex gap-6 mb-2'>
                <div className=''>
                    <input ref={inputRef} checked={tripType==='oneway'} className='' type="radio" name="trip" id='oneway' value='oneway' onChange={e=>setTripType(e.target.value)} />
                    <label className='ml-2' htmlFor="oneway">One Way</label>
                </div>
                <div>
                    <input checked={tripType==='return'}  type="radio" name="trip" value="return" id='return' onChange={e=>setTripType(e.target.value)} />
                    <label className='ml-2' htmlFor="return">Return Trip</label>
                </div>
            </div>
            { tripType==='oneway' ?
            <div>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mb-2'>
                    <div className='border relative px-0 '>
                        <select className='h-full w-52 py-0 text-base font-medium border-none cursor-pointer' name="" value={selectedLocation} onInput={(e)=>setSelectedLocation(e.target.value)} id="">
                           {locations.map((location, index) =>{
                            return <option value={location.value} key={index}>{location.name}</option>
                           })}
                        </select>
                    </div>
                    <div>
                        <div className='border relative px-0 '>
                            <select className='h-full w-52 py-2 text-base font-medium border-none cursor-pointer'  name="" id="" value={selectedDestination} onInput={(e)=>setSelectedDestination(e.target.value)} >
                                {destinationList.map((destination, index)=>{
                                    return <option value={destination.value} key={index}>{destination.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='text-gray-900 border text-base font-medium py-0 px-0 rounded flex items-center col-span-2'>
                        <DatePicker className='outline-none border-none text-gray-600' value={selectedDate == null ? 'Departure Date' : selectedDate} selected={selectedDate} onChange={data=>setSelectedDate(data)} />
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-1 text-base font-medium'>
                    <div className='border relative px-3 col-span-2'>
                        <select className='h-full w-full outline-none border-none cursor-pointer' name="" id="" value={adult} onInput={(e)=>setAdult(e.target.value)}>
                            {adultNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <div className='border relative px-3 col-span-2'>
                        <select className='w-full outline-none h-full border-none cursor-pointer' name="" id="" value={children} onInput={(e)=>setChildren(e.target.value)}>
                            {childrenNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <Link to='/ticketdetails'>
                        <button onClick={()=>setDisplaymodal(false)} className='bg-teal-600 text-slate-100 px-10 py-2 rounded text-base font-medium col-span-1'>Search</button>
                    </Link>
                </div>
            </div> : 
            <div> 
                <div className='flex gap-4 mb-2'>
                    <div className='border relative px-0 '>
                        <select className='h-full w-full py-2 outline-none text-base font-medium border-none cursor-pointer' name="" value={ticketInput.departure} onInput={(e)=>dispatch(inputs({departure:e.target.value}))} id="">
                        {locations.map((location, index) =>{
                            return <option value={location.value} key={index}>{location.name}</option>
                        })}
                        </select>
                    </div>
                    <div>
                        <div className='border relative px-0 '>
                            <select className='h-full w-full py-2 outline-none text-base font-medium border-none cursor-pointer' name="" id="" value={ticketInput.destination} onInput={(e)=>dispatch(inputs({destination:e.target.value}))}>
                                {destinationList.map((destination, index)=>{
                                    return <option value={destination.value} key={index}>{destination.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
            
                </div>

                <div className='flex gap-4 mb-2'>
                    <div className='text-gray-900 border text-base font-medium py-0 px-0 rounded flex items-center'>
                        <DatePicker className='outline-none text-gray-600 border-none cursor-pointer' value={ticketInput.departureDate == null ? 'Departure Date' : null} selected={selectedDate} onChange={date=>(setSelectedDate(date))} />
                    </div>
                    <div className='text-gray-900 border text-base font-medium py-0 px-0 rounded flex items-center'>
                        <DatePicker className='outline-none text-gray-600 border-none cursor-pointer' value={selectedDate == null ? 'Arrival Date' : null} selected={selectedDate} onChange={data=>setSelectedDate(data)} />
                    </div>
                </div>

                <div className='flex gap-4 text-base font-medium'>
                    <div className='border relative px-0 '>
                        <select className='h-full w-full outline-none border-none cursor-pointer' value={ticketInput.adult} onChange={(e)=>dispatch(inputs({adult: e.target.value}))}>
                            {adultNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <div className='border relative px-0 '>
                        <select className='w-full outline-none h-full border-none cursor-pointer'>
                            {childrenNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <Link to='/ticketdetails'><button className='bg-teal-600 text-slate-100 px-10 py-2 rounded text-base font-medium'>Search</button></Link>
                </div>
            </div> }
        </div>
    
        }

       {privateCar && <div>
            <div className='grid md:grid-cols-3 gap-2 my-4'>
                <div>
                    <input className='bg-slate-100 outline-none w-full h-12 pl-4 rounded text-base border-none cursor-pointer' onFocus={()=>setPrompt1(true)} onBlur={()=>setPrompt1(false)} type="text" placeholder='Pick up location' name="" />
                    {prompt1 && <p className='text-base text-slate-400'>Where are you departing from?</p>}
                </div>

                <div>
                    <input className='bg-slate-100 outline-none w-full h-12 pl-4 rounded text-base border-none cursor-pointer' onFocus={()=>setPrompt2(true)} onBlur={()=>setPrompt2(false)} type="text" placeholder='Drop-off location' name="" />
                    {prompt2 && <p className='text-base text-slate-400'>Where are you going to?</p>}
                </div>
                <div className='text-gray-900 border text-base font-medium py-1 px-0 h-12 rounded flex items-center'>
                    <DatePicker className='outline-none border-none' value={selectedDate == null ? 'Departure Date' : null} selected={selectedDate} onChange={data=>setSelectedDate(data)} />
                </div>
            </div>
            <button className='bg-teal-600 text-slate-100 px-10 py-2 rounded text-base w-48 font-medium'>Continue</button>
            
        </div>}

        {checkTicket && <div className='flex gap-1 my-4'>
            <div>
                <input className='bg-slate-100 outline-none w-72 h-12 pl-4 rounded text-base border-none cursor-pointer' type="text" placeholder='Enter your booking code' name="" />
            </div>
            <button className='bg-teal-600 text-slate-100 px-10 py-2 rounded text-base w-48 font-medium'>Continue</button>
            
        </div>}

        <div>
            <section>

            </section>
        </div>
    </div>
  )
}

export default Modal1