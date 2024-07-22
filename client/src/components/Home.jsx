import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import axios from 'axios' 

const Home = () => {
  // const navigate = useNavigate()
  // axios.defaults.withCredentiuals=true;
  // const handleLogout=()=>{
  //   axios.get('http://localhost:5001/auth/logout')
  //   .then(res =>{
  //     if(res.data.status){
  //       navigate('/login')
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  return (
   <>
    <div>Home</div>
     <button><Link to="/dashboard">Dashboard</Link></button>
     {/* <button onClick={handleLogout}>Logout</button> */}
     <br></br>
     <button><Link to="/login">Login</Link></button>
     </>
  )
}

export default Home