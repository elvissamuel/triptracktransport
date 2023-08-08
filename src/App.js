import Locations from "./components/Locations";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Banner from "./components/Banner";
import About from "./components/About";
import Footer from "./components/Footer";
import Modal1 from "./components/Modal1";
import { TicketContext } from "./TicketContext";
import { useState } from "react";
import TicketDetails from "./components/TicketDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Seats from "./components/Seats";
import Payment from "./components/Payment";
import PaymentModal from "./components/PaymentModal";



function App() {
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDestination, setSelectedDestination] = useState();
  const [adult, setAdult] = useState()
  const [children, setChildren] = useState()
  const [displayModal, setDisplaymodal] = useState(false)
  const [tripType, setTripType] = useState()
  const [selectedSeats, setSelectedSeats] = useState([])
  const [seatModal, setSeatModal] = useState(false)
  const [displayModifyModal, setDisplayModifyModal] = useState(false)




  

  const contextValues = {selectedLocation, setSelectedLocation, selectedSeats, displayModifyModal, setDisplayModifyModal, setSelectedSeats, selectedDate, setSelectedDate, selectedDestination, setSelectedDestination, adult, setAdult, children, setChildren, displayModal, setDisplaymodal, tripType, setTripType, seatModal, setSeatModal}
  return (
    <TicketContext.Provider value={contextValues} >
      <Router>
        <div className={`font-lato ${displayModal ? 'fixed w-full':''}`}>
          <Nav />
          {/* <Payment /> */}
          {/* <Seats /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/ticketdetails" element={<TicketDetails />} />
            <Route path="/ticketpayment" element={<Payment />} />
          </Routes>
          {/* <TicketDetails /> */}
          
        </div>

      </Router>
      
    </TicketContext.Provider>
    
  );
}

export default App;
