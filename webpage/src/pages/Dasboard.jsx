import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import Prediction from "./Prediction";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/sucess", {
        withCredentials: true,
      });

      console.log("response", response);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Header1 />
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h1>Dashboard</h1>
          <p> welcome back to consultiva</p>
        </div>
      </div>
      <Prediction />
      <br />

      <Footer />
    </>
  );
};

export default Dashboard;
