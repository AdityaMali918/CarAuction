import ResponsiveAppBar from "./ResponsiveAppBar";
import CarAuction from "./CarAuction";
import React, { useState, useEffect } from "react";
import './sign.css';


function Home({ user }) {

  const [cars, setCars] = useState([]);

  useEffect(() => {

    const fetchData = () => {
      fetch("http://localhost:8081/card")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCars(data);
          // if (data.length > 0) {
          //   setBidAmount(data.bid);
          // }
        })
        .catch((error) => {
          console.error("Error fetching car data:", error);
        });
    };
  
    fetchData();
  
    const pollingInterval = setInterval(fetchData, 1000);
  
    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  
  return (
<>
<ResponsiveAppBar/>
    <div>
      {user ? (
        <div className="header">
          <p className="email" style={{color:"#3cb7c5"}}>Email: {user.email}</p>
          <h1 className="welcome" style={{color:"#3cb7c5"}}>Welcome, {user.name}</h1>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div className="home">
    {cars.map((car) => (
          <div key={car.car_id} className="homeinnerbox">
          <CarAuction userid={user.email} username={user.name} car_id={car.car_id} car_name={car.name} car_bid= {car.bid} id= {car.id} car_img={car.images}/> 
          </div>
        ))}
        </div>
    </>
  );
}

export default Home;

//export default Home