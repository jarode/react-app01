import React, { useState, useEffect }  from 'react';
import { NavLink, Outlet } from "react-router-dom";

export default function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
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
                    {users.map(user => (
                    <NavLink
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : ""
                        };
                    }}
                    to={`/users/${user.id}`}
                    key={user.id}
                    >
                    {user.name}
                    </NavLink>
                    ))}
                </nav>
            <Outlet />
            </div>
        );
    }
}



