import React, { useContext, useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { inputs, updateDate } from '../features/buyTicket';
import { TicketContext } from '../TicketContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

    

const ModifyModal = () => {
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
    const {selectedDate, selectedLocation, setSelectedDate, setSelectedLocation, displayModifyModal, setDisplayModifyModal, selectedDestination, setSelectedDestination, adult, setAdult, children, setChildren, displayModal, setDisplaymodal, tripType, setTripType} = useContext(TicketContext)
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
    <div className='text-gray-600 px-4 py-8 rounded-lg max-w-4xl mx-auto bg-white relative shadow shadow-teal-700'>
        <div className='relative'>
            <div className='w-6 h-6 absolute right-2 -top-5 cursor-pointer' onClick={()=>setDisplayModifyModal(false)}>
                <XMarkIcon color='teal' />
            </div>
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
                <div className='flex gap-4 mb-2'>
                    <div className='border relative px-0 '>
                        <select className='h-full w-52 py-0 outline-none text-base font-medium border-none cursor-pointer' name="" value={selectedLocation} onInput={(e)=>setSelectedLocation(e.target.value)} id="">
                           {locations.map((location, index) =>{
                            return <option value={location.value} key={index}>{location.name}</option>
                           })}
                        </select>
                    </div>
                    <div>
                        <div className='border relative px-0 '>
                            <select className='h-full w-52 py-2 outline-none text-base font-medium border-none cursor-pointer' name="" id="" value={selectedDestination} onInput={(e)=>setSelectedDestination(e.target.value)} >
                                {destinationList.map((destination, index)=>{
                                    return <option value={destination.value} key={index}>{destination.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='text-gray-900 border text-base font-medium py-0 px-0 rounded flex items-center'>
                        <DatePicker className='outline-none text-gray-600' value={selectedDate == null ? 'Departure Date' : selectedDate} selected={selectedDate} onChange={data=>setSelectedDate(data)} />
                    </div>
                </div>
                <div className='flex gap-4 text-base font-medium'>
                    <div className='border relative px-0 '>
                        <select className='h-full w-40 outline-none border-none cursor-pointer' name="" id="" value={adult} onInput={(e)=>setAdult(e.target.value)}>
                            {adultNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <div className='border relative px-0 '>
                        <select className='w-40 outline-none h-full border-none cursor-pointer' name="" id="" value={children} onInput={(e)=>setChildren(e.target.value)}>
                            {childrenNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                        <button className='bg-teal-600 text-slate-100 px-10 py-2 rounded text-base font-medium' onClick={()=>setDisplayModifyModal(false)}>Submit</button>
                </div>
            </div> : 
            <div> 
                <div className='flex gap-4 mb-2'>
                    <div className='border relative px-0 '>
                        <select className='h-full w-52 py-0 outline-none text-base font-medium border-none cursor-pointer' name="" value={ticketInput.departure} onInput={(e)=>dispatch(inputs({departure:e.target.value}))} id="">
                        {locations.map((location, index) =>{
                            return <option value={location.value} key={index}>{location.name}</option>
                        })}
                        </select>
                    </div>
                    <div>
                        <div className='border relative px-0 '>
                            <select className='h-full w-52 py-2 outline-none text-base font-medium border-none cursor-pointer' name="" id="" value={ticketInput.destination} onInput={(e)=>dispatch(inputs({destination:e.target.value}))}>
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
                    <div className='border relative px-3 '>
                        <select className='h-full w-40 outline-none border-none cursor-pointer' name="" id="" value={ticketInput.adult} onChange={(e)=>dispatch(inputs({adult: e.target.value}))}>
                            {adultNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <div className='border relative px-3 '>
                        <select className='w-40 outline-none h-full border-none cursor-pointer' name="" id="">
                            {childrenNumber.map((num, index)=> {
                            return <option key={index}>{num}</option>})}
                        </select>
                    </div>
                    <Link to='/ticketdetails'><button className='bg-teal-600 text-slate-100 px-10 py-2 rounded text-base font-medium'>Search</button></Link>
                </div>
            </div> }
        </div>
    </div>
  )
}

export default ModifyModal