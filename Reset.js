import React, { useState } from 'react';
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
const Reset = () => {
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email');
        try {
          const { data: res } = await axios.post(`http://localhost:5000/Otp/update-password`, { NewPassword,email});
          // Handle response from the backend
          console.log(res);
          navigate('/Login')
        } catch (error) {
          console.error(error);
        }
    }
    const [NewPassword, setPassword] = useState('');
    const[ConfirmPassword,setConfirmPassword]=useState('');
  return (
    <div>
      <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: '#007F85', height: '750px' }}>
 
 
 <Paper sx={{ width: '478px', height: '405px', borderRadius: '26px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
   <Grid container lg={12} justifyContent="center" alignItems="center">
     <Grid item lg={10} sx={{ textAlign: 'center' ,}}>
       <Typography sx={{ fontSize: '26px', fontFamily: 'Inter', fontWeight: '600', marginTop: '10px' }}>Reset Password</Typography>
     </Grid>
     {/* <Grid item lg={10} sx={{ textAlign: 'center' }}>
       <Typography sx={{ fontSize: '12px', fontFamily: 'Inter', fontWeight: '400' }}>Lorem ipsum amet, dipi. Ut ligula consectetur, ultrices mauris.</Typography>
     </Grid> */}
 
     <Grid item lg={10} sx={{marginTop:'20px'}}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>New Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={NewPassword}
            size="small"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
        <Grid item lg={10}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Confirm Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={ConfirmPassword}
            size="small"
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
    
     
     


<Grid item lg={10} sx={{marginTop:'10px'}}>

     <Button onClick={handleSubmit}
       type="submit"
       variant="contained"
       sx={{
         mt: 0,
         mb: 0,
         background: '#007F85',
         borderRadius: '12px',
         textTransform: 'none',
         width: '400px',
         height: '56px',
         fontSize: '20px',
         fontFamily: 'Inter',
         fontWeight: '500'
       }}
     >
   Reset Password
     </Button>
     <Grid item lg={12}  sx={{textAlign:'center',marginTop:'12px'}}>
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
      </Grid>
     
 </Paper>

</Grid>
    </div>
  )
}

export default Reset
