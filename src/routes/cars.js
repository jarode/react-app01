import React, { useState, useEffect }  from 'react';
import { NavLink, Outlet } from "react-router-dom";

/*fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  */

export default function Cars() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("https://sandbox.services.mobile.de/search-api/search?exteriorColor=BLACK&modificationTime.min=2021-05-04T18:13:51.0Z&page.number=1&page.size=20", {
        method: 'GET',
        //mode: 'no-cors',
        //proxy: "https://locahost:3000",
        Host: "https://locahost:3000",
        Origin: "https://locahost:3000",
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'pl',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic '+btoa('search-generic:search-generic')
            
            //'Authorization': 'Basic c2VhcmNoLWdlbmVyaWM6c2VhcmNoLWdlbmVyaWM='
          },
        
        
        
        
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCars(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div style={{ display: "flex" }}>
                <nav
                    style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                    }}
                >
                    {cars.map(car => (
                    <NavLink
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : ""
                        };
                    }}
                    to={`/cars/${car.id}`}
                    key={car.id}
                    >
                    {car.name}
                    </NavLink>
                    ))}
                </nav>
            <Outlet />
            </div>
        );
    }
}



