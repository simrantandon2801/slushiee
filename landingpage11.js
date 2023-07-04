import React from 'react'
import { styled } from '@mui/system';
import { Button,Grid, Typography} from '@mui/material';
import Image from 'mui-image'
import Header from './Header';
import Footer from './Footer';
import 'typeface-inter';
import { Link } from 'react-router-dom';
const StyledImage = styled(Image)(({ theme }) => ({
  '& .mui-image-wrapper': {
   backgroundColor:'red',

  },
}));
function Landingpage  ()  {
 
  return (
    <>
 <Header/>
     <Grid container lg={12}  sx={{marginTop:'99px'}}  >
						<Grid container lg={10}sx={{margin:'auto'}}>
              <Grid container lg={7}>
							<Grid item  lg={12}  >
							<Typography  sx={{ fontWeight: '800', fontSize: '64px', color:'#1E1E1E',  lineHeight: '77px', fontFamily:'Inter',fontStyle:'normal'}}>
              Discover<br/>
the Next Bestseller!
</Typography>
					</Grid>
							<Grid item  lg={12}  >
						
								 
										<Grid item  lg={12} >
							<Typography  sx={{ fontWeight: '400', fontSize: '20px',fontFamily:'Inter',fontStyle:'normal'}}>4 Million books are published annually but these<br/>
are only 1% of manuscripts that are submitted for publication.
	</Typography>
							</Grid>
              <Grid item lg={12}sx={{marginTop:'16px'}} >
									<Typography  sx={{ fontWeight: '400', fontSize: '20px',  fontFamily:'Inter',fontStyle:'normal'  }}>We believe there is no such thing as a bad story.</Typography>
								</Grid>
								<Grid item lg={12}sx={{marginTop:'16px'}} >
									<Typography  sx={{ fontWeight: '400', fontSize: '20px',  fontFamily:'Inter',fontStyle:'normal'  }}>Choose a story that you want to read from a pool of manuscripts<br/> and make it your Next Bestseller.</Typography>
								</Grid>
								
		
					</Grid>	
					<Grid container direction="row" lg={8} sx={{marginTop:'32px'}}>
  <Grid item lg={6}>
    <Button  sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px" , backgroundColor: '#007F85', color: '#fff',fontStyle:'normal' }}>
      Reader
    </Button>
  </Grid>	
  <Grid item lg={6}>
    <Button  sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter', fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px", backgroundColor: '#007F85', color: '#fff',fontStyle:'normal' }}>
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
				  <Grid container lg={12}>
           <Grid item lg={12} sx={{margin:'auto'}} >
				   <Typography sx={{ textAlign: 'center',color:'#1E1E1E',fontFamily:'Inter' ,fontSize: '24px', fontWeight: "500", }}>Your manuscript can</Typography>
			</Grid>
				   
			<Grid container lg={10} sx={{marginTop:'25px',margin:'auto'}}>   
				   
  <Grid container lg={4} >
 
  <Grid item lg={12}>
    <Image
      Duration={0}
      src="https://drive.google.com/uc?export=view&id=1d3DewyjuC5teT-8mK7UIGWjgGNtH3v_S"
      style={{
       
        width: '55px',
        height: '51px',
        transitionDuration: '0',
        animation: '0',
      }}
    />
    </Grid>
    <Grid item lg={12}>
    <Typography  sx={{fontFamily:'Inter' ,fontSize: '24px', fontWeight: "600",textAlign:'center' }}>
    Get 100% Publishing<br/> Assistance
    </Typography>
  
    </Grid>

     
  </Grid>
  
  <Grid container lg={4}>
  <Grid item lg={12}>
  <Image
    Duration={0}
    src="https://drive.google.com/uc?export=view&id=1teodD3ze7If_q58EZv4QImceu_ErBlGR"
    style={{
   
      width: '40px',
      height: '45px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
  </Grid>
  <Grid item lg={12}>
 <Typography  sx={{fontFamily:'Inter' ,fontSize: '24px', fontWeight: "600",textAlign:'center' }}>
 Get Published
    </Typography>
</Grid>
</Grid>
<Grid container lg={4}>
  <Grid item lg={12}>
  <Image
    Duration={0}
    src="https://drive.google.com/uc?export=view&id=1tWHZiFv7pBFfiU_kNT_JbMsmsxjXVHM4"
    style={{
   
      width: '40px',
      height: '45px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
  </Grid>
  <Grid item lg={12}>
 <Typography  sx={{fontFamily:'Inter' ,fontSize: '24px', fontWeight: "600",textAlign:'center' }}>
 Get Produced<br/>
to movies/ series
    </Typography>
</Grid>
</Grid>
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
          style={{ width: '317px', height: '439px', transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 1,top:'1040px'}}
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
  <Grid item lg={11} >
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '20px', fontWeight: "400", color: '#1E1E1E' }}>A tale of murder, revenge and politics in the dark alleys of Mumbai’s underworld. <br/>
Written by Rohan Kailasam, Wastra is published by Nu Voice Press and is distributed by Simon and Schuster.<br/> Soon to be a motion picture.</Typography>
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
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '20px', fontWeight: "400", color: '#1E1E1E' }}>Mythology, Science and Fantasy come together in a story of the battle between good and evil.<br/>
Written by Harsheath Chauhan, Kaliyuga is published by Nu Voice Press and is distributed by Simon and Schuster.</Typography>
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
          style={{ width: '317px', height: '439px', transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 1,top:'1603px'}}
        />
      </Grid>   

    </Grid>
  </Grid>
</Grid>

<Grid container lg={12} sx={{ margin: 'auto', backgroundColor: '#DAFDF5', width: '1140px', height: '369px', borderRadius: '26px', marginTop: '147px' }}>
  <Grid item lg={12}>
    <Typography sx={{ textAlign: 'center', marginTop: '40px', color: '#1E1E1E', fontFamily: 'Inter', fontSize: '24px', fontWeight: "500" }}>
      Build a community of readers and get published by the best in the industry.
    </Typography>
  </Grid>
<Grid container lg={10} sx={{margin:'auto',marginTop:'-56px'}}>
  <Grid container lg={6}  >
    <Grid item lg={4} sx={{margin:'initial',}}>
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1ATrwCu9LPFuDFQxDhrpXLkHjil6fiT35"
        style={{
          width: '64px',
          height: '64px',
          transitionDuration: '0',
          animation: '0',justifyContent:'start'
        }}
      />
      </Grid>
      <Grid item lg={9.5} sx={{margin:'auto'}}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '20px',  textAlign: 'initial' }}>
  <span style={{ color: '#1e1e1e',fontWeight: "600", }}>Readers:</span> Discover free and unlimited fascinating stories across genres. Support your favourite stories and<br/> help them get published.
</Typography>

</Grid>
  </Grid>

  <Grid container lg={6}  >
    <Grid item lg={4} sx={{margin:'initial',}}>
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1AEpZ8DNmcHJ-rXgGOVwm3RdJycwvl-qh"
        style={{
          width: '60px',
          height: '60px',
          transitionDuration: '0',
          animation: '0',justifyContent:'start'
        }}
      />
      </Grid>
      <Grid item lg={9.5} sx={{margin:'auto'}}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '20px',  textAlign: 'initial' }}>
  <span style={{ color: '#1e1e1e',fontWeight: "600", }}>Writers:</span> Take your manuscript out of<br/> the slush pile and to your readers.<br/> Build a community of readers and get published.
</Typography>

</Grid>
  </Grid>
</Grid>

</Grid>
</Grid>

<Grid container lg={12} sx={{backgroundColor:'#FAF7F7', marginTop:'140px' }}>
  <Grid container lg={12} sx={{margin:'auto 64px',marginBottom:'64px'}}>
    <Grid item lg={12}>
      <Typography sx={{ textAlign: 'center', marginTop:'64px', color:'#1E1E1E', fontFamily:'Inter', fontSize: '48px', fontWeight: "700" }}>
        How <span style={{ color: '#007F85' }}>Slushie</span> Works
      </Typography>
    </Grid>
<Grid container lg={11} sx={{margin:'auto',marginTop:'80px',}}> 
    <Grid container lg={4} sx={{margin:'auto',justifyContent: 'initial',alignItems:'initial',display:'flex'}} >
    <Typography sx={{ color:'#007585', fontFamily:'Inter', fontSize: '70px', fontWeight: "600" }}>1</Typography>
      <Grid item lg={12}>
     
        <Typography sx={{ fontFamily:'Inter', fontSize: '40px', fontWeight: "600", textAlign:'initial' }}>
        Sign Up
        </Typography>
      </Grid>
      <Grid item lg={11} sx={{ textAlign:'left' }}>
        <Typography sx={{ fontFamily:'Inter', fontSize: '20px', fontWeight: "400", textAlign:'initial' }}>
        Sign up and upload your finished manuscript. After verification, choose 3 chapters that will go live for readers.
Don’t worry your manuscript is 100% safe with us!

        </Typography>
      </Grid>
    </Grid>

    <Grid container lg={4} sx={{margin:'auto',}}>
    <Typography sx={{ color:'#007585', fontFamily:'Inter', fontSize: '70px', fontWeight: "600" }}>2</Typography>
      <Grid item lg={12} >
        
        <Typography sx={{ fontFamily:'Inter', fontSize: '40px', fontWeight: "600", textAlign:'initial' }}>
          Get Votes
        </Typography>
      </Grid>
      <Grid item lg={10}>
        <Typography sx={{ fontFamily:'Inter', fontSize: '20px', fontWeight: "400", textAlign:'initial' }}>
        Get 500 votes on your manuscript
for guaranteed publishing assistance.
Connect with your audience
and leave the rest to us!

        </Typography>
      </Grid>
    </Grid>

    <Grid container lg={4} sx={{margin:'auto'}} >

    <Typography sx={{ color:'#007585', fontFamily:'Inter', fontSize: '70px', fontWeight: "600" }}>3</Typography>
      <Grid item lg={12}>
      
        <Typography sx={{ fontFamily:'Inter', fontSize: '40px', fontWeight: "600", textAlign:'initial' }}>
          Be Published
        </Typography>
      </Grid>
      <Grid item lg={9.5} sx={{ textAlign:'left' }}>
        <Typography sx={{ fontFamily:'Inter', fontSize: '20px', fontWeight: "400", textAlign:'initial' }}>
        Bridge the gap between your manuscript and your readers’ shelves.
Let’s give your readers their next favourite read!

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
  <Grid container lg={10} sx={{margin:'auto',}} >
				  
		
      
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
  <Typography sx={{fontSize:'48px',fontWeight:'700',fontFamily:'Inter',color:'#ffffff',}}>What’s brewing?</Typography>
</Grid>

<Grid item lg={12}>
  <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',color:'#ffffff'}}>Welcome to the hotbed of contemporary fiction straight <br/>from the writer’s desk to the reader’s screens.</Typography>
</Grid>
<Grid container lg={6} sx={{margin:'auto',marginTop:'56px'}}>
<Grid item lg={6}>
    <Button sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px" ,  backgroundColor: '#fff', color: '#007f85',fontStyle:'normal' }}>
      Reader
    </Button>
  </Grid>	
  <Grid item lg={6}>
    <Button  sx={{ borderRadius: '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize: '20px', fontWeight: "500", lineHeight: "24px", width:  '188px', height: "54px" , backgroundColor: '#fff', color: '#007f85',fontStyle:'normal' }}>
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

export default Landingpage
