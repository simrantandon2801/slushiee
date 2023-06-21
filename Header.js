import React from 'react'
import { Grid, Typography } from '@mui/material'
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material'
import Image from 'mui-image'
const Header = () => {
    const handleSearch = (event) => {
        const searchText = event.target.value;
        // Perform your search logic here
        console.log('Search text:', searchText);
      };
    
  return (
    <Grid container lg={12}>
        <Grid container lg={10} sx={{margin:'auto',marginTop:'25px'}}>
<Grid container lg={8}>
<Grid item lg={2}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}}  >
<Typography sx={{fontFamily: 'Inter',
fontstyle: 'normal',
fontWeight: 800,
fontSize: 32,
lineHeight: '39px',
color: "#4CA591"}}>LOGO</Typography>
</Grid>
<Grid item lg={1.5}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Genres</Typography>
</Grid>
<Grid item lg={1.5} sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Lorem</Typography>
</Grid>
<Grid item lg={7}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<TextField
        placeholder="Search..."
        onChange={handleSearch}
        variant="outlined"
        sx={{
          width: '500px',
          background: '#DAFDF6',
          borderRadius: '25px',
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      </Grid>
</Grid>
<Grid container lg={4}>
    <Grid item lg={12}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
    <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Login</Typography>
    </Grid>
    
</Grid>
        </Grid>
    </Grid>
  )
}

export default Header
