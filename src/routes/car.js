import React, { useState, useEffect}  from 'react';
import { useParams } from "react-router-dom";

export default function Car() {
    let params = useParams();
    let id = params.id
    //var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [car, setCar] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setCar(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>Loading...</p>
            </main>
            );
    }  
    
    if (car) {
        return (
            <main style={{ padding: "1rem" }}>
                <h2>{car.name}</h2>
                <p>
                    Email: {car.email}
                </p>
                <p>
                    Phone: {car.phone}
                </p>
                <p>
                    Website: {car.website}
                </p>
            </main>
        );
    }
}
