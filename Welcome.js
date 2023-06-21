import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import React, { useState,useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Welcome = () => {
    const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
    useEffect(() => {// sbse phle useeffect hi call hoyega
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const decoded = jwt_decode(token);
            console.log(decoded);
            setUserData(decoded);
          } catch (error) {
            console.error(error);
          }
        } else {
          navigate('/signup');
        }
    
        // Fetch user data from the backend API
        fetchUserData();
      }, []);
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            setError('Token not found.');
            return;
          }
      
          const decoded = jwt_decode(token);
          const userId = decoded._id;
      
          const response = await fetch(`http://localhost:5000/sign/user/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data)
          setUserData(data);
        } else {
          // Handle error response
          const errorData = await response.json();
          setError(errorData.error);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch user data.');
      }
    };
    
  
    if (!userData) {
      return <div>Loading...</div>;
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
    }

   
  return (
    <div>
   <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=14GrzuLdhJEJmdoiwuB55rexlYG1bXN62)',height:'100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: '432px', height: '368px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        
      <Grid item lg={12} sx={{textAlign:'center',marginTop:'26px'}}>
        <Typography sx={{fontSize:'32px',fontFmaily:'Inter',fontWeight:'800',color:'#4CA591'}}>LOGO</Typography>
      </Grid>
      <Grid item lg={12} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:'26px',fontFmaily:'Inter',fontWeight:'600',color:'#1E1E1E'}}>Hi Author {userData.Name},</Typography>
      </Grid>
      <Grid item lg={7.8} sx={{textAlign:'center',}}>
        <Typography sx={{fontSize:'16px',fontFmaily:'Inter',fontWeight:'500',color:'#1E1E1E'}}>We are happy to have you here.<br/>
To get the best Slushie experience, we want to know a bit about you!</Typography>
      </Grid>

      <Grid item lg={9} sx={{marginTop:'20px'}}>

<Button onClick={handleSubmit}
  type="submit"
  variant="contained"
  sx={{
    mt: 0,
    mb: 0,
    background: '#007F85',
    borderRadius: '8px',
    textTransform: 'none',
    width: '319px',
    height: '48px',
    fontSize: '16px',
    fontFamily: 'Inter',
    fontWeight: '500'
  }}
>
  Next
</Button>

</Grid>

      </Grid>
    </Paper>
    </Grid>
</Grid>

    </div>
  )
}

export default Welcome
