import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cardetail.css';

function CarDetail() {
    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:8081/car/${carId}`)
        .then(response => {
          if (!response.ok) {
            throw  Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setCarDetails(data);
        })
        .catch(error => {
          console.error('Error fetching car details:', error);
        });
    }, [carId]);
  
    return (
      <div className="car-details-container">
        <h2>Car Details</h2>
        {carDetails ? (
          <div className='detail'>
            <div>
            <img className="car-image" src={carDetails.image} alt={carDetails ? carDetails.name : 'Car Image'} />
            </div>
            <div className='details'>
            <p className="car-details-text">Fuel Type: {carDetails.fuel}</p>
            <p className="car-details-text">Transmission: {carDetails.transmission}</p>
            <p className="car-details-text">Cylinders: {carDetails.cylinder}</p>
            <p className="car-details-text">Body Type: {carDetails.body}</p>
            </div>
            <div>
              <p className="car-details-text">Max Power (Bhp):{carDetails.power} </p>
              <p className="car-details-text">Seating Capacity:{carDetails.capacity} </p>
              <p className="car-details-text">Boot Space (Litres): {carDetails.boot_space}</p>
              <p className="car-details-text">Ground Clearance Unladen (mm): {carDetails.clearance}</p>
            </div>
          </div>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>
    );
  }
  
  export default CarDetail;