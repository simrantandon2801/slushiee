import React from 'react'

import { Button,Grid, Typography} from '@mui/material';
import Image from 'mui-image'
import Header from './Header';
import Footer from './Footer';
function Landingpage1  ()  {
 
  return (
    <>
 <Header/>
     <Grid container lg={12}  sx={{marginTop:'99px'}}  >
						<Grid container lg={10}sx={{margin:'auto'}}>
              <Grid container lg={7}>
							<Grid item  lg={12}  >
							<Typography  sx={{ fontWeight: '800', fontSize: '64px', color:'#1E1E1E',  lineHeight: '77px', fontFamily:'Inter',fontStyle:'normal'}}>
              Choose the BEST!
</Typography>
					</Grid>
							<Grid item  lg={12}  >
						
								 
										<Grid item  lg={12} >
							<Typography  sx={{ fontWeight: '400', fontSize: '20px',fontFamily:'Inter',fontStyle:'normal'}}>4 Million Individual books are published annually<br/> leaving behind 99% of the submissions unnoticed.<br/> We believe there is no such thing as a bad story.	</Typography>
							</Grid>
								<Grid item lg={12}sx={{marginTop:'16px'}} >
									<Typography  sx={{ fontWeight: '400', fontSize: '20px',  fontFamily:'Inter',fontStyle:'normal'  }}>Choose a story that you want to read from <br/> a pool of Manuscripts and make it your<br/> next Bestseller.</Typography>
								</Grid>
								
		
					</Grid>	
					<Grid container direction="row" lg={8} sx={{marginTop:'32px'}}>
  <Grid item lg={6}>
    <Button variant='contained' sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px" , backgroundColor: '#007F85', color: '#fff',fontStyle:'normal' }}>
      Reader
    </Button>
  </Grid>	
  <Grid item lg={6}>
    <Button variant='contained' sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter', fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px", backgroundColor: '#007F85', color: '#fff',fontStyle:'normal' }}>
      Creator
    </Button>
  </Grid>
</Grid>
</Grid>
<Grid Container lg={5}   >
							<Grid item  lg={12} sx={{marginTop:'-100px'}} >	
								
								
             
      {/* <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=12Krz59BrmVX6APRgDE5YzM6vck2zHWwS"
        style={{ width: '456px', height: '456px', transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 0 }}
      /> */}
                
        <Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1SRmuW7gON4TJWJdQA_SXM3pyDueqm5Ug"
          style={{ width: '456px', height: '456px', marginTop:'64px' ,transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 1,top:'75px'}}
        />
      
   
									
									
</Grid>			
						
				</Grid>
			
        <Grid container lg={12}  sx={{margin:'auto', backgroundColor:'#DAFDF5' ,width:'1140px',height:'256px', borderRadius:'26px',marginTop:'147px'}}>
				   <Grid item lg={12} >
				   <Typography sx={{ textAlign: 'center',marginTop:'40px',color:'#1E1E1E',fontFamily:'Inter' ,fontSize: '24px', fontWeight: "500", }}>See your manuscript...</Typography>
			</Grid>
				   
				   
				   
  <Grid item lg={6} >
  <Grid item lg={12}>
  
    <Image
      Duration={0}
      src="https://drive.google.com/uc?export=view&id=1pKPWTSoPWSoxdv58wEbwkT9zdL4BDcdo"
      style={{
       
        width: '55px',
        height: '51px',
        transitionDuration: '0',
        animation: '0',
      }}
    />
    <Typography  sx={{fontFamily:'Inter' ,fontSize: '24px', fontWeight: "600",textAlign:'center' }}>
    Get published
    </Typography>
  
</Grid>

     
  </Grid>
  
  <Grid item lg={6}>
  <Grid item lg={9}>
  <Image
    Duration={0}
    src="https://drive.google.com/uc?export=view&id=1kOVNk29UpgkvOgNrpOW_81udfzPmv9Kz"
    style={{
   
      width: '40px',
      height: '45px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
 <Typography  sx={{fontFamily:'Inter' ,fontSize: '24px', fontWeight: "600",textAlign:'center' }}>
 Get produced to movies/ series
    </Typography>
</Grid>
</Grid>
</Grid>


<Grid container lg={12}>
  <Grid container lg={12}>
    <Grid container lg={6}>
<Grid item lg={12}>
<Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1EmJ6pv2tSP2sVGyGNjRPZlDVma2F0w6L"
        style={{ width: '561px', height: '397px', transitionDuration: '0', animation: '0',  zIndex: 0,marginTop:'42px' }}
      />

</Grid>    
<Grid item lg={12}>
        <Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1zTSjiI9_hRnr1uudQnUJmooRtNZxRabO"
          style={{ width: '317px', height: '439px', transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 1,top:'958px'}}
        />
      </Grid>   

    </Grid>
    <Grid container lg={6} >
  <Grid item lg={10}>
    <Typography sx={{textAlign:"initial", marginTop: '100px', fontFamily: 'Inter', fontSize: '26px', fontWeight: "600", color: '#4CA591' }}>Slushie Bestsellers</Typography>
  </Grid>
  <Grid item lg={10}>
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '48px', fontWeight: "700", color: '#1E1E1E' }}>Wastra</Typography>
  </Grid>
  <Grid item lg={11.5} >
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '20px', fontWeight: "400", color: '#1E1E1E' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</Typography>
  </Grid>
  <Grid item lg={12} >
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '16px', fontWeight: "400", color: '#766A6A' ,marginTop:'12px'}}>Published by:</Typography>
  </Grid>
  <Grid item lg={1.5} sx={{marginTop:'8px'}} >
  <Image
    Duration={0}
    src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
    style={{
   
      width: '63px',
      height: '77px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
  </Grid>
</Grid>

  </Grid>
</Grid>
<Grid container lg={12}>
  <Grid container lg={12} sx={{marginTop:'75px'}}>
  <Grid container lg={6} >
  <Grid item lg={10}>
    <Typography sx={{textAlign:"initial", marginTop: '100px', fontFamily: 'Inter', fontSize: '26px', fontWeight: "600", color: '#4CA591' }}>Slushie Bestsellers</Typography>
  </Grid>
  <Grid item lg={10}>
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '48px', fontWeight: "700", color: '#1E1E1E' }}>Kaliyuga</Typography>
  </Grid>
  <Grid item lg={11.5} >
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '20px', fontWeight: "400", color: '#1E1E1E' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</Typography>
  </Grid>
  <Grid item lg={12} >
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '16px', fontWeight: "400", color: '#766A6A' ,marginTop:'12px'}}>Published by:</Typography>
  </Grid>
  <Grid item lg={1.5} sx={{marginTop:'8px'}} >
  <Image
    Duration={0}
    src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
    style={{
   
      width: '63px',
      height: '77px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
  </Grid>
</Grid>
<Grid container lg={6} >
<Grid item lg={12}>
<Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1EmJ6pv2tSP2sVGyGNjRPZlDVma2F0w6L"
        style={{ width: '561px', height: '397px', transitionDuration: '0', animation: '0',  zIndex: 0,marginTop:'42px' }}
      />

</Grid>    
<Grid item lg={12}>
        <Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1049I25plDfcO2fZOPABkTLFGI3IdUXTb"
          style={{ width: '317px', height: '439px', transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 1,top:'1493px'}}
        />
      </Grid>   

    </Grid>
  </Grid>
</Grid>
</Grid>

<Grid container lg={12} sx={{backgroundColor:'#FAF7F7', marginTop:'140px' }}>
  <Grid container lg={10} sx={{margin:'auto 64px',marginBottom:'64px'}}>
    <Grid item lg={12}>
      <Typography sx={{ textAlign: 'center', marginTop:'64px', color:'#1E1E1E', fontFamily:'Inter', fontSize: '48px', fontWeight: "700" }}>
        How <span style={{ color: '#007F85' }}>Slushie</span> Works
      </Typography>
    </Grid>
<Grid container lg={10} sx={{margin:'auto',marginTop:'80px'}}> 
    <Grid container lg={4} >
    <Typography sx={{ color:'#007585', fontFamily:'Inter', fontSize: '40px', fontWeight: "600" }}>1</Typography>
      <Grid item lg={12}>
     
        <Typography sx={{ fontFamily:'Inter', fontSize: '40px', fontWeight: "600", textAlign:'initial' }}>
          Upload
        </Typography>
      </Grid>
      <Grid item lg={10} sx={{ textAlign:'left' }}>
        <Typography sx={{ fontFamily:'Inter', fontSize: '20px', fontWeight: "400", textAlign:'initial' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
        </Typography>
      </Grid>
    </Grid>

    <Grid container lg={4} >
    <Typography sx={{ color:'#007585', fontFamily:'Inter', fontSize: '40px', fontWeight: "600" }}>2</Typography>
      <Grid item lg={12}>
        
        <Typography sx={{ fontFamily:'Inter', fontSize: '40px', fontWeight: "600", textAlign:'initial' }}>
          Get Votes
        </Typography>
      </Grid>
      <Grid item lg={10}>
        <Typography sx={{ fontFamily:'Inter', fontSize: '20px', fontWeight: "400", textAlign:'initial' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
        </Typography>
      </Grid>
    </Grid>

    <Grid container lg={4} >

    <Typography sx={{ color:'#007585', fontFamily:'Inter', fontSize: '40px', fontWeight: "600" }}>3</Typography>
      <Grid item lg={12}>
      
        <Typography sx={{ fontFamily:'Inter', fontSize: '40px', fontWeight: "600", textAlign:'initial' }}>
          Get Published
        </Typography>
      </Grid>
      <Grid item lg={10} sx={{ textAlign:'left' }}>
        <Typography sx={{ fontFamily:'Inter', fontSize: '20px', fontWeight: "400", textAlign:'initial' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
        </Typography>
      </Grid>
    </Grid>
    </Grid>
  </Grid>
</Grid>

<Grid container lg={12} sx={{marginTop:'116px',marginBottom:'116px'}}>
  
  <Grid item lg={12}>
  <Typography sx={{ textAlign: 'center',marginTop:'48px',color:'#1E1E1E',fontFamily:'Inter' ,fontSize: '48px', fontWeight: "700", }}>Publishing Partners</Typography>
  </Grid>
  <Grid container lg={10} sx={{margin:'auto'}} >
				  
		
      
				  <Grid item lg={1.7} sx={{marginTop:'63px'}} >
          <Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
          style={{ width: '72px', height: '90px', transitionDuration: '0', animation: '0', }}
        />
          </Grid>
          <Grid item lg={1.7}  sx={{marginTop:'63px'}}>
          <Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1rQQSZVoW6QRlotSY5CQgHt-r-GNEkKEX"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}} >
<Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1CTsjPJg3DnjfU8RaTxlmkM1aA_ZSA0vL"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7}  sx={{marginTop:'63px'}}>
<Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1sdd7TzUHvpQA_vWdHk16DdSOYlyHnmzU"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}} >
<Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1vxG9uPSOxvOLuOsSfu2TuCRlTGkDszeR"
          style={{ width: '79px', height: '77px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}}>
<Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1baDiiZu06dZ5JgiH5vcduuA1WQDOLuZ2"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}}>
<Image
          Duration={0}
          src="https://drive.google.com/uc?export=view&id=1baDiiZu06dZ5JgiH5vcduuA1WQDOLuZ2"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>

</Grid>

</Grid>
<Grid container lg={12} sx={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=1gnNK8rfb0I0pm6OtLid_Sj_jBFGefXXe)'}}>
  <Grid container lg={8} sx={{margin:'auto',marginTop:'86px',marginBottom:'86px',textAlign:'center'}}>
<Grid item lg={12}>
  <Typography sx={{fontSize:'48px',fontWeight:'700',fontFamily:'Inter',color:'#ffffff',}}>Move Towards your Next Bestseller</Typography>
</Grid>

<Grid item lg={12}>
  <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',color:'#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hen.</Typography>
</Grid>
<Grid container lg={6} sx={{margin:'auto',marginTop:'56px'}}>
<Grid item lg={6}>
    <Button variant='contained' sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px" ,  backgroundColor: '#fff', color: '#007f85',fontStyle:'normal' }}>
      Reader
    </Button>
  </Grid>	
  <Grid item lg={6}>
    <Button variant='contained' sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px" , backgroundColor: '#fff', color: '#007f85',fontStyle:'normal' }}>
    Creator
    </Button>
  </Grid>
  </Grid>	
  </Grid>
</Grid>
			
			</Grid>
      <Footer/>
      </>
  )
}

export default Landingpage1
