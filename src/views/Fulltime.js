import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/jobdetails.css'; // Import the CSS file for styling
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const handleSubmit = () => {
    
    console.log('Button clicked!');
   
  };


const Fulltime = () => {
  const [jobDetails, setJobDetails] = useState({
    companyName: 'FocusR',
    companyDescription: 'qwjdnqjkwbdjq',
    jobDescription: 'wnefjbefjkw',
    jobRole: '',
    jobType: 'Intern',
    qualification: [],
    eligibleDepartments: '',
    lastDate: '20/12/2023',
    markTenth: '',
    markTwelfth: '',
    maxCurrentArrears: '',
    historyOfArrears: '',
    CGPA_Required: '',
    batch: '',
    CTC: '5000000',
    serviceAgreement: '',
    trainingPeriodandStipend: '',
    workLocation: 'Chennai, Banglore, Kochi',
    evalationProcess: '',
  });

  const steps = ['Applied','Online Test', 'Technical Interview','HR'];
  const [isapplied, setisapplied] = useState(true)


  useEffect(() => {
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        setJobDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
      });
  }, []);


  const handleSubmit = () => {
    // Your submission logic goes here

    // Set isapplied to true after submission
    setisapplied(false);
  };


  return (
    <div className='content'>
    <div className="job-details-container" >
      <h1 style={{margin:"20px"}}>{jobDetails.companyName}</h1>
      <div className='screencon'>
      
        
      <div className="details-item">
         <LocationOnIcon/> {jobDetails.workLocation}
      </div>
      <div className="details-item">
      <CurrencyRupeeIcon/> {jobDetails.CTC}
     
      </div>
     
      <div className="details-item">
      <EventAvailableIcon/> Apply by  {jobDetails.lastDate}
      </div>

      <div className="details-item">
       <WorkOutlineIcon/> {jobDetails.jobType}
      </div>
     
      
      </div>
      <div className='job'>
      
        <h2 style={{margin:"20px", fontSize:"25px"}}>Job description</h2>
        <div style={{margin:"27px", fontSize:"20px"}}>
            hello
        </div>
      </div>
      <div className='job'>
      
        <h2 style={{margin:"20px", fontSize:"25px"}}>Company description</h2>
        <div style={{margin:"27px", fontSize:"20px"}}>
            hello
        </div>
      
     
      </div>
      
      {isapplied ? (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Button className="button" onClick={handleSubmit}>
      Apply Now
    </Button>
  </div>
) : (
  <div className='stepper'>
    <Stepper activeStep={2} alternativeLabel style={{color: 'red' }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </div>
)}

      
      </div>
      </div>
      
    
    
   
  );
};

export default Fulltime;
