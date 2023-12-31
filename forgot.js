import React, { useState } from 'react';
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'
const Forgot = () => {
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = localStorage.setItem('email',Email);
        try {
          const { data: res } = await axios.post(`http://localhost:5000/sign/sign1`, { Email,});
          // Handle response from the backend
          console.log(res);
         
          navigate('/Onetime')
        } catch (error) {
          console.error(error);
        }
    }
    const [Email,setEmail] = useState('');
  return (
    <div>
       <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundColor:'#007F85',     height: '100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: '478px', height: '324px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={11} justifyContent="center" alignItems="center">
        <Grid item lg={12} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:'26px',fontFmaily:'Inter',fontWeight:'600'}}>Forgot Password?</Typography>
      </Grid>
      {/* <Grid item lg={12}sx={{textAlign:'center'}} >
        <Typography sx={{fontSize:'12px',fontFmaily:'Inter',fontWeight:'400' }}>Lorem ipsum amet, dipi. Ut ligula consectetur, ultrices mauris.</Typography>
      </Grid> */}
      <Grid item lg={10} sx={{marginTop:'20px'}}>
  <Typography sx={{textAlign:'left', fontSize:'16px', fontWeight:'700', fontFamily:'Inter'}}>Email</Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
  
    placeholder="Enter your email"
    value={Email}
    size="small"
    onChange={(e) => setEmail(e.target.value)}
    sx={{ mb: 2, borderRadius: '6px',backgroundColor:  '#F4F1F1', }} 
  />
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
      Submit
    </Button>
    <Grid item lg={10}  sx={{textAlign:'center',marginTop:'12px'}}>
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
  component={Link}  
      to="/Login" 
>

Back to Login
</Button>
</Grid>
      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Forgot
