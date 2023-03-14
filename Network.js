import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Divider} from '@mui/material';
import { Avatar } from '@mui/material';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import TopBar from "./TopBar"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


export default function Network() {
  return (
    <>
    <TopBar/>


    <div style={{backgroundColor:'#f5f6fa',height:640}}>
<div style={{display:'flex',flexDirection:'row'}}>
<Card sx={{ maxWidth: 680,marginLeft:20,borderRadius:3,marginTop:3,height:500,cursor:'pointer'}}>
      <CardContent>
       <div style={{letterSpacing:1,fontSize:18}}>
     Manage my network
        </div>
        <br/>
    
      
        <Typography variant="body2" color="text.secondary" >
         
        <div style={{letterSpacing:1,fontSize:18}}>
          <div style={{display:'flex',flexDirection:'row'}}>
         <PeopleRoundedIcon />&nbsp;&nbsp;Connections
         </div>
         </div>
         <br/>

         <div style={{display:'flex',flexDirection:'row'}}>
         <div style={{letterSpacing:1,fontSize:18}}>
          <PermContactCalendarOutlinedIcon/>&nbsp;&nbsp;Contacts
         </div>
         </div>
       
        <br/>
      
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
       <PersonIcon/> &nbsp;&nbsp;Following & followers
        </div>
        </div>
        <br/>
      
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
       <GroupsIcon/> &nbsp;&nbsp;Groups
         </div>
        </div>
        <br/>
       

        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
        <CalendarMonthIcon/>&nbsp;&nbsp;Events
         </div>
         </div>
        
        <br/>
       
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{letterSpacing:1,fontSize:18}}>
        <PlagiarismIcon/>&nbsp;&nbsp;Pages
         </div>
          </div>
        <br/>
       

        <div style={{display:'flex',flexDirection:'row'}}>
         <div style={{letterSpacing:1,fontSize:18}}>
         <NewspaperOutlinedIcon/>&nbsp;&nbsp;Newsletter
         </div></div>
          
        <br/>
       
        <div style={{display:'flex',flexDirection:'row'}}>
         <div style={{letterSpacing:1,fontSize:18}}>
         <TagOutlinedIcon/>&nbsp;&nbsp;Hastags
         </div>
         </div>

        </Typography>
       
      </CardContent>
      
      
      <Button style={{marginLeft:8}} color="secondary">Show Less</Button>
       
    </Card>



    <Card sx={{ width:580,marginLeft:5,marginTop:3,borderRadius:3,height:350 }}>
 
 <Typography variant="body2" color="text.secondary" >
<div style={{fontSize:20,marginLeft:8,marginTop:5}}>Invitation</div>

  <div style={{ cursor:'pointer',marginTop:10,display:'flex',flexDirection:'row',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
   >
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'black'}}>Harry Singh</b><br/>
   Full stack Developer<br/>
   </div>
   <Button color="primary" style={{color:'#bdc3c7',fontStyle:'initial'}}>Ignore</Button>
   <Button variant="outlined" style={{borderRadius:25,width:130,marginRight:8}}>
       Accept
        </Button>
  </div>
 <br/>
 <Divider/>

 <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
   >
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'black'}}>Harry Singh</b><br/>
  Web Developer<br/>
   </div>
   <Button color="primary" style={{color:'#bdc3c7',fontStyle:'initial'}}>Ignore</Button>
   <Button variant="outlined" style={{borderRadius:25,width:130,marginRight:8}}>
       Accept
        </Button>
  </div>
 <br/>
 <Divider/>


 <div style={{ cursor:'pointer',marginTop:10,display:'flex',marginLeft:8}}>
  <Avatar
    alt='Remy Sharp' 
   >
   </Avatar>
   <div style={{width:470,height:50,marginLeft:8}}>
   <b style={{color:'black'}}>Harry Singh</b><br/>
   Python Developer<br/>
   </div>
   <Button color="primary" style={{color:'#bdc3c7',fontStyle:'initial'}}>Ignore</Button>
   <Button variant="outlined" style={{borderRadius:25,width:130,marginRight:8}}>
       Accept
        </Button>
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
     </div>





    
    </div>
    </>
  )}