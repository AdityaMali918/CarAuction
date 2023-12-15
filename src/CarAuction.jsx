
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function CarAuction({ userid, username,car_id,car_name,car_bid,car_img,id}) {
  const initialTime =1000;
  const [time, setTime] = useState(initialTime);
  // const [cars, setCars] = useState([]);
  const [bidAmount, setBidAmount] = useState(car_bid);
  const [timerExpired, setTimerExpired] = useState(false);
  let val;
 
  const decrementTimer = () => {
    if (time > 0) {
      setTime((prevTime) => prevTime - 1);
    } else {
      setTimerExpired(true);
      setTime(0) ;
    }
  };

  const updateBid = (newBidAmount) => {
    if (timerExpired) {
      setTime(0) ;
      return;
    }

    // Make a POST request to update the bid in the database
    fetch("http://localhost:8081/updateBid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bidAmount: newBidAmount,
        buyerId: userid,
        car_id: car_id, 
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBidAmount(newBidAmount); 
      })
      .catch((error) => {
        console.error("Error updating bid:", error);
      });
  };

  useEffect(() => {
    const timerInterval = setInterval(decrementTimer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);



  //console.log(cars[0].bid);

  return (
    <div className="car-block">
      <Link to={`/car/${car_id}`} className="link-no-underline" >
      <img src={car_img} alt="Car" width="300" height="200" />
      <p className="timer">Time Left: {time} seconds</p>
      <p style={{color:"green"}}>Current Bid: ${bidAmount}</p>
      <p className="carInfo"><b>Car ID: {car_id}    Car Name: {car_name}</b> <br/> <b>HIGHEST BID : {id}</b> </p>
      </Link>
      <button className="place-bid-button"
        onClick={() => updateBid(bidAmount + 500)}
        disabled={timerExpired} 
      >
        Place Bid
      </button>
      
    </div>


  );
}

export default CarAuction;


