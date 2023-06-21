import React from 'react'
import { Grid,Typography ,SvgIcon} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
   <>
   <Grid container lg={12}>
    <Grid container lg={10} sx={{margin:'auto',marginTop:'72px',marginBottom:'71px'}}>
        <Grid container lg={2}>

        <Grid item lg={12}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}}  >
<Typography sx={{fontFamily: 'Inter',
fontstyle: 'normal',
fontWeight: 800,
fontSize: 32,
lineHeight: '39px',
color: "#4CA591"}}>LOGO</Typography>
</Grid>
</Grid>
<Grid container lg={4}sx={{margin:'auto'}}>
<Grid item lg={3}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
    <Typography>
    Terms
    </Typography>
</Grid>
<Grid item lg={3}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
    <Typography>
    Privacy
    </Typography>
</Grid>
<Grid item lg={3} sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
    <Typography>
    Accessibility
    </Typography>
</Grid>
<Grid item lg={3}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
    <Typography>
   Help
    </Typography>
</Grid>
</Grid>   
<Grid container lg={2}>
    <Grid item lg={12}>

<Grid container spacing={2}>
      <Grid item>
        <SvgIcon component={InstagramIcon} sx={{ fontSize: 40, color: '#E4405F' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={FacebookIcon} sx={{ fontSize: 40, color: '#1877F2' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={LinkedInIcon} sx={{ fontSize: 40, color: '#0A66C2' }} />
      </Grid>
    </Grid>
    </Grid>
</Grid>
    </Grid>
   </Grid>
   </>
  )
}

export default Footer
