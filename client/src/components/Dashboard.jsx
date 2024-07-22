import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:5001/auth/verify')
      .then(res => {
        if (res.data.status) {
        } else {
          navigate('/')
          alert("You need to login first")
        }
      })
  }, [])

  const handleLogout = () => {
    axios.get('http://localhost:5001/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/login')
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div>Dashboard</div>
      <button onClick={handleLogout}>Logout</button>
    </>

  )
}

export default Dashboard 