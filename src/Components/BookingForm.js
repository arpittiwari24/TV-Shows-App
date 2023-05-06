import React from 'react';

const BookingForm = ({ showName }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    // Store user details in local/session storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    // Reset the form
    event.target.reset();
    // Handle booking logic, e.g., display success message, redirect, etc.
    alert('Booking Successful!');
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label>Movie:</label>
          <input type="text" value={showName} readOnly />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
