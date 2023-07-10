import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const HospitalList =  () => {
  const [hospital, setHospital] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchHospitals = async () => {
       const options = {
         method: "GET",
         url: "https://nigeria-api.p.rapidapi.com/facility",
         params: {
           type: "hospital",
           state: "Lagos",
           city: "Lagos",
           limit: "10",
         },
         headers: {
           "X-RapidAPI-Key":
             "e0e783ae1emsh859c2153132e075p1901b4jsna9de09ac3018",
           "X-RapidAPI-Host": "nigeria-api.p.rapidapi.com",
         },
       };

       try {
        setLoading(true);
         const response = await axios.request(options);
         console.log(response.data);
         setHospital(response.data);
         setLoading(false);
       } catch (error) {
         console.error(error);
       }
    };
    fetchHospitals();
  }, []);


  return (
    <Container>
      <h1>Hospital List</h1>
    </Container>
  );
};

export default HospitalList;
