import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from '../Components/BookingForm';
import "./ShowScreen.css"

const ShowScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main'>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
      {bookingFormVisible && (
        <BookingForm showName={show.name} />
      )}
    </div>
  );
};

export default ShowScreen;
