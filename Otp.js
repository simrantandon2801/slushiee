import React, { useState } from 'react';
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Otp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(`http://localhost:5000/Otp/Otp1`, { Otp});
      // Handle response from the backend
      console.log(res);
      navigate('/Entries')
    } catch (error) {
      console.error(error);
    }
   

   setOtp('');
  
  };
    const [Otp,setOtp] = useState('');

  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundColor:'#007F85',     height: '100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: '478px', height: '336px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={11} justifyContent="center" alignItems="center">
        <Grid item lg={5} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:'26px',fontFmaily:'Inter',fontWeight:'600'}}>Almost there !</Typography>
      </Grid>
      <Grid item lg={12}sx={{textAlign:'center'}} >
        <Typography sx={{fontSize:'12px',fontFmaily:'Inter',fontWeight:'400' }}>Lorem ipsum amet, dipi. Ut ligula consectetur, ultrices mauris.</Typography>
      </Grid>
      <Grid item lg={10} sx={{marginTop:'20px'}}>
  <Typography sx={{textAlign:'left', fontSize:'16px', fontWeight:'700', fontFamily:'Inter'}}>One Time Password</Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
  
    placeholder="Enter OTP"
    value={Otp}
    onChange={(e) => setOtp(e.target.value)}
    sx={{ mb: 2, borderRadius: '6px',backgroundColor:  '#F4F1F1' }} 
  />
</Grid>
<Grid container lg={10} >
<Grid item lg={6} >
<Button

  sx={{
    mt: 0,
    mb: 2,
  
    borderRadius: '12px',
    textTransform: 'none',

    fontSize: '12px',
    fontFamily:'Inter',
    fontWeight:'400',color:'#007F85'
  }}
>
Didn’t receive the OTP?
</Button>
</Grid>
<Grid item lg={6} sx={{display:'flex',justifyContent:'end'}} >
<Button

  sx={{
    mt: 0,
    mb: 2,
  
    borderRadius: '12px',
    textTransform: 'none',

    fontSize: '12px',
    fontFamily:'Inter',
    fontWeight:'400',color:'#007F85'
  }}
>
Resend OTP
</Button>
</Grid>
</Grid>
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
        fontFamily:'Inter',
        fontWeight:'500'
        
      }}
    >
  Verify
    </Button>

      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Otp
