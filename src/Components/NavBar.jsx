import axios from 'axios';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Pages/Context'

export default function NavBar() {
  const ctx = useContext(myContext);

  const logout = () => {
    axios.get("http://localhost:4000/logout", {
      withCredentials: true
    }).then((res) => {
      if(res.data === "success"){
        window.location.href = "/";
      }
    })
  }
  return (
    <div className="NavContainer">
      {ctx ? (
        <>
          <Link onClick={logout} to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
          {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : null}

        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <Link to="/">Home</Link>
    </div>
  )
}
