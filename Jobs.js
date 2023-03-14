import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Avatar } from '@mui/material';
import { NewspaperOutlined, NewspaperRounded, PhotoOutlined, SettingsRounded } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NotificationAdd } from '@mui/icons-material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TopBar from "./TopBar"
export default function Jobs() {
  return (

    <>
    <TopBar/>

    <div style={{backgroundColor:'#f5f6fa'}}>
<div style={{display:'flex',flexDirection:'row'}}>
<Card sx={{ maxWidth: 680,marginLeft:20,borderRadius:3,marginTop:3,height:380,cursor:'pointer'}}>
      <CardContent>
      
      
        <Typography variant="body2" color="text.secondary" >
         
        <div style={{letterSpacing:1,fontSize:18}}>
          <div style={{display:'flex',flexDirection:'row'}}>
         <BookmarkIcon />&nbsp;&nbsp;My jobs
         </div>
         </div>
         <br/>

         <div style={{display:'flex',flexDirection:'row'}}>
         <div style={{letterSpacing:1,fontSize:18}}>
          <NotificationAdd/>&nbsp;&nbsp;Job alert
         </div>
         </div>
       
        <br/>
      
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
       <ArticleOutlinedIcon/> &nbsp;&nbsp;Skill Asssessments
        </div>
        </div>
        <br/>
      
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
       <NewspaperRounded/> &nbsp;&nbsp;Interview prep
         </div>
        </div>
        <br/>
       

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
        <NewspaperOutlined/>&nbsp;&nbsp;Resume Builder
         </div>
         </div>
        
        <br/>
       
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
        <YouTubeIcon/>&nbsp;&nbsp;Job seeker guidance
         </div>
          </div>
<br/>

          <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
        <SettingsRoundedIcon/>&nbsp;&nbsp;Application settings
         </div>
          </div>


        <br/>
      </Typography> 
      </CardContent>
</Card>



<div>
<Card sx={{ width:580,marginLeft:5,marginTop:3,borderRadius:3,height:280 ,letterSpacing:1,height:250}}>
 
 <Typography variant="body2" color="text.secondary" >
<div style={{fontSize:20,marginLeft:8,marginTop:5}}>Recent job searches
<Button style={{borderRadius:25,width:130,marginLeft:240,color:'#7f8c8d'}}>
      Clear
        </Button></div>


  <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
 
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'black'}}>Chakrborty Internshala</b><br/>
   India<br/>
   </div>
   
  </div>
 <br/>
 <Divider/>




 <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'black'}}>internship</b><br/>
   Bhopal
  <br/>
   </div>
  </div>
 <br/>
 <Divider/>


 <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
 <Button  size="medium">
       Show More
        </Button>
        </div>
 </Typography>

     </Card>

           





  <div>
    <div style={{display:'flex',flexDirection:'column'}}>
  <Card sx={{ width:550,marginLeft:5,marginTop:3,borderRadius:3,height:'auto' }}>
 <Typography variant="body2" color="text.secondary" >
  <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  
   <div style={{marginLeft:8,color:'#000',fontWeight:'bold',fontSize:'20',fontFamily:'inherit',letterSpacing:2}}>
  Recommended for you
 <br/>


   </div>
  

  </div>
  <div style={{ cursor:'pointer',marginLeft:15}}>

  Based on your profile and search history
  </div>
  <br/>
  <br/>

  <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
   >
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Web Developer</b><br/>
   Vadodra Gujarat<br/>
   </div>
   </div>


 </Typography>





     </Card>



     </div>
</div>


 </div>






 <Card sx={{ maxWidth: 680,marginLeft:5,borderRadius:3,marginTop:3,height:170,cursor:'pointer'}}>
      <CardContent>
       <div style={{fontWeight:'bold',letterSpacing:1}}>
     Job seeker guidance

        </div>
       
        Recommended based on your activity
    <br/>    <br/>
      
        <Typography variant="body2" color="text.secondary" >
         <div style={{fontSize:14,fontWeight:'bold',letterSpacing:1}}>
         Explore our curated guide of expert-led <br/>courses, such as how to improve your <br/>resume and grow your network, 
         to help you<br/> land your next opportunity.<br/>
         </div>
       



        </Typography>
       
      </CardContent>
    </Card>
 </div>






</div>
</>
  );

}
