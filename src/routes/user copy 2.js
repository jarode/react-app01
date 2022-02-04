import React, { useState, useEffect}  from 'react';
import { useParams } from "react-router-dom";

export default function User() {
    let params = useParams();
    let id = params.id
    //var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setUser(data);
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

    
    if (user) {
        return (
            <main style={{ padding: "1rem" }}>
                <h2>{user.name}</h2>
                <p>
                    Email: {user.email}
                </p>
                <p>
                    Phone: {user.phone}
                </p>
                <p>
                    Website: {user.website}
                </p>
            </main>
        );
    }
}
