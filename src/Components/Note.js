import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import TopBar from "./TopBar"
export default function Note() {
  return (

    <>
    <TopBar/>

    <div style={{backgroundColor:'#f5f6fa',height:640}}>
<div style={{display:'flex',flexDirection:'row'}}>
<Card sx={{ maxWidth: 730,marginLeft:20,borderRadius:3,marginTop:3,height:100,cursor:'pointer'}}>
      <CardContent>
      
      
        <Typography variant="body2" color="text.secondary" >
         
        <div style={{letterSpacing:1,fontSize:18,marginLeft:8}}>
            Manage your<br/> Notifications<br/>
            <div style={{letterSpacing:1,fontSize:18,color:'#3498db'}}>
            View settings
            </div>
          </div>
      </Typography> 
      </CardContent>
</Card>



<div>
<Card sx={{ width:580,marginLeft:5,marginTop:3,borderRadius:3,height:600 ,letterSpacing:1,backgroundColor:'#dff9fb'}}>
 
 <Typography variant="body2" color="text.secondary" >
 <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >R
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship #internshala #following #post <br/>
   internship<br/>
   </div>
   </div>



   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >V
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship #internshala #following #post<br/>
   Post<br/>
   </div>
   </div>



   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >S
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship #internshala #following #post<br/>
   Linkedln<br/>
   </div>
   </div>



   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >B
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring  #internship #internshala #following #post<br/>
   Chakraborty Internshala<br/>
   </div>
   </div>




   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >M
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship <br/>
   TCS<br/>
   </div>
   </div>


   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >L
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship <br/>
   Infosys<br/>
   </div>
   </div>



   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >K
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship <br/>
   Techno<br/>
   </div>
   </div>


   <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >C
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'#2980b9',fontSize:16}}>Commented on : </b>#hiring #opportunity #folks #internship <br/>
   Technique<br/>
   </div>
   </div>

 </Typography>

     </Card>


          </div> 
          <Card sx={{ maxWidth: 680,marginLeft:5,borderRadius:3,marginTop:3,height:220,cursor:'pointer'}}>
      <CardContent>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',letterSpacing:1,fontSize:12}}>
       Accelerating India’s digital revolution via reliable<br/> data centers

        </div>
  
    <br/>    <br/>
      
        <Typography variant="body2" color="text.secondary" >
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',justifyContent:'space-evenly'}}>
         <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >M
   </Avatar>
   <Avatar
    alt='Remy Sharp' 
    sx={{ width: 56, height: 56 }}
   >S
   </Avatar>
         </div>
       <br/><br/>

       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         Let's reshape India's digital growth
</div>

        </Typography>
       
      </CardContent>
    </Card>
 </div>






</div>
</>
  );

}
