import { Password } from '@mui/icons-material';
import { Typography, Grid, Paper,  Button } from '@mui/material';
import { TextField, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {  FormControlLabel, Checkbox } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Entries = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(`http://localhost:5000/Login/slush`, { Name,Email,Password,confirmPassword,DOB});
      // Handle response from the backend
      console.log(res);
      navigate('/Login')
    } catch (error) {
      console.error(error);
    }
   

  
  
  };
    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'october' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
        // ... add remaining months
      ];
      
      const days = Array.from({ length: 31 }, (_, index) => index + 1).map((day) => {
        const paddedDay = day.toString().padStart(2, '0');
        return { value: paddedDay, label: paddedDay };
      });
      
      const years = Array.from({ length: 100 }, (_, index) => 2023 - index).map((year) => {
        return { value: year.toString(), label: year.toString() };
      });
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [DOB, setBirthdate] = useState({
      day: '',
      month: '',
      year: ''
    });
    const [confirmPassword, setconfirmPassword] = useState('');
    const handleBirthdateChange = (name) => (event) => {
      setBirthdate((prevBirthdate) => ({
        ...prevBirthdate,
        [name]: event.target.value
      }));
    };
  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: '#007F85', height: '100vh' }}>
 
 
    <Paper sx={{ width: '478px', height: '90vh', borderRadius: '26px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        <Grid item lg={10} sx={{ textAlign: 'center' ,}}>
          <Typography sx={{ fontSize: '26px', fontFamily: 'Inter', fontWeight: '600', marginTop: '10px' }}>Almost there!</Typography>
        </Grid>
        <Grid item lg={10} sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: '12px', fontFamily: 'Inter', fontWeight: '400' }}>Lorem ipsum amet, dipi. Ut ligula consectetur, ultrices mauris.</Typography>
        </Grid>
        <Grid item lg={10} sx={{ marginTop: '20px' }}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Name</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter your name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
        <Grid item lg={10} >
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Email</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
        <Grid item lg={10} >
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>New Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
        <Grid item lg={10} >
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Confirm Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
        
        <Grid item lg={10} >
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Birthday</Typography>
       
        <Grid container lg={12} spacing={2}>
      <Grid item xs={4}>
        <TextField
          select
          label="Month"
          variant="outlined"
          margin="normal"
          value={DOB.month}
        onChange={handleBirthdateChange('month')}
          fullWidth
          SelectProps={{ IconComponent: ArrowDropDownIcon }}
        >
          {months.map((month) => (
            <MenuItem key={month.value} value={month.value}>
              {month.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          select
          label="Day"
          variant="outlined"
          margin="normal"
          fullWidth
          value={DOB.day}
        onChange={handleBirthdateChange('day')}
          SelectProps={{ IconComponent: ArrowDropDownIcon }}
        >
          {days.map((day) => (
            <MenuItem key={day.value} value={day.value}>
              {day.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          select
          label="Year"
          variant="outlined"
          margin="normal"
          fullWidth
          value={DOB.year}
          onChange={handleBirthdateChange('year')}
          SelectProps={{ IconComponent: ArrowDropDownIcon }}
        >
          {years.map((year) => (
            <MenuItem key={year.value} value={year.value}>
              {year.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
    </Grid>
    <Grid item lg={10}>
  <FormControlLabel
    control={<Checkbox />}
    label={
      <span >
        By clicking this box, you agree to our
        <span style={{ color: '#007F85' }}> Terms of Service</span>
        {' '}
        and  <span style={{ color: '#007F85' }}> Privacy Policy.</span>
        {' '}
      </span>
    }
  />
</Grid>

<Grid item lg={10} sx={{marginTop:'20px'}}>

        <Button onClick={handleSubmit}
          type="submit"
          variant="contained"
          sx={{
            mt: 0,
            mb: 0,
            background: '#007F85',
            borderRadius: '12px',
            textTransform: 'none',
            width: '366px',
            height: '56px',
            fontSize: '20px',
            fontFamily: 'Inter',
            fontWeight: '500'
          }}
        >
          Submit
        </Button>
     
        </Grid>
         </Grid>
        
    </Paper>
   
</Grid>

    </div>
  );
};

export default Entries;
