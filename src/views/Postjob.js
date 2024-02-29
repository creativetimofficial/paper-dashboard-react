import React, { useState } from 'react';
import { Button, TextareaAutosize, TextField, Grid, Typography, MenuItem, Select, InputLabel, FormControl  } from '@mui/material';
import Badge from '@mui/material/Badge';

import axios from 'axios';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyDescription: '',
    jobDescription:'',
    jobRole:'',
    jobType:'',
    qualification:[],
    eligibleDepartments:'',
    lastDate:'',
    markTenth:'',
    markTwelfth:'',
    maxCurrentArrears:'',
    historyOfArrears:'',
    CGPA_Required: '',
    batch:'',
    CTC: '',
    serviceAgreement: '',
    trainingPeriodandStipend: '',
    workLocation: '',
    evalationProcess: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData);
      console.log('Post API Response:', response.data);
      // Show success message or perform additional actions on successful save
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className='content'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <TextField
            label="Company Name"
            fullWidth
            variant="outlined"
            size="larger"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Grid>
        
       
        <Grid item xs={12} md={2}>
          <TextField
            label="CTC"
            fullWidth
            variant="outlined"
            size="large"
            name="CTC"
            value={formData.CTC}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label=""
            fullWidth
           rows={2}
            
          variant="outlined"
          size="large"
          type="date" // Set the type to "date" for a date field
          name="workLocation"
          value={formData.workLocation}
          onChange={handleChange}
          />
          </Grid>
          <Grid item xs={11} md={2}>
          <TextField
            label="Pass out batch"
            fullWidth
            
            
            variant="outlined"
            size="large"
            type="number"
            InputProps={{ step: 0.01 }}
            name="Pass_out_batch"
            value={formData.batch}
            onChange={handleChange}
          />
          </Grid>

         <Grid item xs={11} md={2}>
        <TextField
        select
        label="Job Type"
        fullWidth
        variant="outlined"
        size="large"
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
       
      >
        <MenuItem value="Internship">Internship</MenuItem>
        <MenuItem value="FullTime">Full Time</MenuItem>
        <MenuItem value="InternshipFullTime">Internship + Full Time</MenuItem>
      </TextField>

        </Grid>

        <Grid item xs={12} md={3}>
            <TextField
        select
        label="Qualification"
        fullWidth
        variant="outlined"
        size="large"
        name="qualification"
        value={formData.qualification}
        onChange={handleChange}
        SelectProps={{ multiple: true, renderValue: (selected) => selected.join(', ') }}
      >
        <MenuItem value="BTech">BTech</MenuItem>
        <MenuItem value="Mtech">Mtech</MenuItem>
        <MenuItem value="BCA">BCA</MenuItem>
        <MenuItem value="MCA">MCA</MenuItem>
      </TextField>

        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="CTC"
            fullWidth
            variant="outlined"
            size="large"
            name="CTC"
            value={formData.CTC}
            onChange={handleChange}
          />
          </Grid>

        <Grid item xs={11}>
          <TextField
            label="Company Description"
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            size="large"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={11}>
          <TextField
            label="Job Description"
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            size="large"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={11} md={1.5}>
          <TextField
            label="CGPA Required"
            fullWidth
            
            
            variant="outlined"
            size="large"
            type="number"
            InputProps={{ step: 0.01 }}
            name="CGPA_Required"
            value={formData.CGPA_Required}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3.5}>
          <TextField
            label="Service Agreement"
            fullWidth
            variant="outlined"
            size="large"
            multiline
            rows={2}
            name="serviceAgreement"
            value={formData.serviceAgreement}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  md={1.5}>
        <TextField
            label="10th mark"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="markTenth"
            value={formData.markTenth}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="12th mark"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="markTwelfth"
            value={formData.markTwelfth}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  md={1.5}>
        <TextField
            label="Max current arrears"
            fullWidth
            
            variant="outlined"
            size="large"
            type="number"
            name="maxCurrentArrears"
            value={formData.maxCurrentArrears}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Max history arrears"
            fullWidth
           
            variant="outlined"
            size="large"
            type="number"
            name="historyOfArrears"
            value={formData.historyOfArrears}
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={11}>
        <TextField
            label="Evaluation process"
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            size="large"
            name="evalationProcess"
            value={formData.evalationProcess}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}  md={6}>
        <TextField
            label="Training and Stipend"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="trainingPeriodandStipend"
            value={formData.trainingPeriodandStipend}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Work Location"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            size="large"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
          />
          </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyForm;
