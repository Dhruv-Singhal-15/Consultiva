import React, { useEffect, useState } from "react";
import "../assets/css/pagecss/Header1.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header1 = () => {
  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/sucess", {
        withCredentials: true,
      });

      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  // logoout
  const logout = () => {
    window.open("http://localhost:8000/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <h1>Hi {userdata?.displayName}</h1>
          </div>
          <div className="right">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {Object?.keys(userdata)?.length > 0 ? (
                <>
                  <li style={{ color: "black", fontWeight: "bold" }}>
                    {userdata?.displayName}
                  </li>
                  <li>{/* <NavLink to="/dashboard">Dashboard</NavLink> */}</li>
                  <li onClick={logout}>Logout</li>
                  <li>
                    <img
                      src={userdata?.image}
                      style={{ width: "50px", borderRadius: "50%" }}
                      alt=""
                    />
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header1;
