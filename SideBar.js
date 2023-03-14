import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from '@mui/material';
import { PhotoOutlined } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
export default function SideBar() {
  return (

    <div style={{backgroundColor:'#f5f6fa'}}>
  
   

          <div style={{display:'flex',flexDirection:'row'}}>
 <Card sx={{ maxWidth: 240,marginLeft:20,borderRadius:3,marginTop:3,height:330 }}>
  <div style={{backgroundColor:'#ecf0f1'}}>
  <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}></div>
 <CardMedia
        sx ={{ height: 40}}
     
      />
      
      </div>   

      <CardContent>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>
        Your Name
        </div>
        <br/>
      <Divider /><br/>
      
        <Typography variant="body2" color="text.secondary" >
         <div style={{fontSize:14,fontWeight:'bold', cursor:'pointer'}}>
         Who's viewed your profile <span style={{color:'#3498db'}}>&nbsp;&nbsp;&nbsp;25</span><br/>
         Impressions of your post  <span style={{color:'#3498db'}}>&nbsp;&nbsp;&nbsp; 25</span>
         </div><br/>
         <Divider /><br/>
         <span style={{fontSize:13, cursor:'pointer'}}>Access exclusive tools & insights</span><br/>
         Try Premuim for free<br/><br/>
         <Divider/><br/>
         <span style={{display:'flex',flexDirection:'row'}}><BookmarkIcon fontSize='small'/>&nbsp; My Items</span>
        </Typography>
       
      </CardContent>
    </Card>


<div>
    <Card sx={{ width:550,marginLeft:5,marginTop:3,borderRadius:3,height:120 }}>
 
        <Typography variant="body2" color="text.secondary" >
         <div style={{ cursor:'pointer',marginTop:10,display:'flex',flexDirection:'row',marginLeft:8}}>
         <Avatar
           alt='Remy Sharp' 
          >
          </Avatar>
          <div style={{borderRadius:25,backgroundColor:'#f5f6fa',width:470,height:50,marginLeft:8}}>
          <Button color="secondary"><span style={{marginTop:7,color:'black',marginLeft:3}}>Start a post</span></Button><br/>
          </div>
         </div>
        <br/>
        <div style={{ cursor:'pointer',display:'flex',flexDirection:'row',marginLeft:8,justifyContent:'space-evenly'}}>
        <PhotoOutlined color="primary" /> Photo
        <YouTubeIcon color="success"/>Video
       <CalendarMonthOutlinedIcon/>Event
       <ArticleOutlinedIcon/>Write article
        </div>
        </Typography>
      
            </Card>
           
<div style={{display:'flex',flexDirection:'row'}}>
            <hr class="flex-grow-1 mr2 mvA feed-index-sort-border" style={{width:450}}/>
            Sort by
  </div> 
  
  <div>




    <div style={{display:'flex',flexDirection:'column'}}>
  <Card sx={{ width:550,marginLeft:5,marginTop:3,borderRadius:3,height:'auto' }}>
 <Typography variant="body2" color="text.secondary" >
  <div style={{ cursor:'pointer',marginTop:10,display:'flex',flexDirection:'row',marginLeft:8}}>
  <Avatar 
    alt='Remy Sharp' src='/chakraborty.png'
   >
   </Avatar>
   <div style={{marginLeft:8,color:'#000',fontWeight:'bold',fontSize:'20',fontFamily:'inherit',letterSpacing:1}}>
   Chakraborty And Lahkar Innovations Private Limited
   <br/>
   
   </div>
  </div>

  <div style={{marginLeft:50,letterSpacing:1}}>

  This is a for-profit company that has the expertise and provides products and services 
  in fields related to all the branches of computer and technology, including but not limited to
  </div><br/>

<div style={{color:'#000',marginLeft:50}}>
1. Computer software and solutions development <br/>2.Hardware and software management
3. Development of AI technology and solutions<br/>4. Managing and developing websites
5. Brain-computer interface development and deployment
We also develop websites for business and profit to society.
          </div>
         
 <br/>

 </Typography>





     </Card>



     </div>
</div>


 </div>






 <Card sx={{ maxWidth: 680,marginLeft:5,borderRadius:3,marginTop:3,height:400,cursor:'pointer'}}>
      <CardContent>
       <div style={{fontWeight:'bold',letterSpacing:1}}>
      Linkedln News
        </div>
        <br/>
    
      
        <Typography variant="body2" color="text.secondary" >
         <div style={{fontSize:14,fontWeight:'bold',color:'black',letterSpacing:1}}>
         Closing the gender gap at India Inc<br/>
         </div>
         14h ago 4,366 readers<br/>
         <br/>  


         <div style={{fontSize:14,fontWeight:'bold',color:'black',letterSpacing:1}}>
         Mintifi raises $110 million 
         </div>
         14h ago 4,366 readers
        <br/>
        <br/>


        <div style={{fontSize:14,fontWeight:'bold',color:'black',letterSpacing:1}}>
        Finance sector on talent hunt
         </div>
         14h ago 4,366 readers
        <br/>
        <br/>


        <div style={{fontSize:14,fontWeight:'bold',color:'black',letterSpacing:1}}>
       This week's top newsletter
         </div>
         14h ago 5,110 readers
        <br/>
        <br/>


        <div style={{fontSize:14,fontWeight:'bold',color:'black',letterSpacing:1}}>
         Mintifi raises $110 million 
         </div>
         4d ago 2,646 readers
        <br/>
        <br/>

        <div style={{fontSize:14,fontWeight:'bold',color:'black',letterSpacing:1}}>
        Startups brace for SVB impact
         </div>
         2h ago 942 readers
       
       

        </Typography>
       
      </CardContent>
    </Card>

   

 </div>






<div style={{display:'flex',flexDirection:'row'}}>

<div style={{height:10}}>
 <Card sx={{marginLeft:20,marginTop:5,borderRadius:3}}>
 
 <Typography variant="body2" color="text.secondary" >
  <div style={{ cursor:'pointer',marginTop:10,marginLeft:8}}>
  <span style={{color:'#3498db'}}> Groups </span><br/>
  <div style={{display:'flex',flexDirection:'row'}}><span style={{color:'#3498db'}}> Events </span> <AddIcon style={{marginLeft:150}}/></div>
  <span style={{color:'#3498db'}}> Followed Hastags </span><br/>


  </div><br/>
  <Divider /><br/>
  <span style={{fontSize:15, cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>Discover more</span><br/>
 
 </Typography>


</Card> 
</div>



<div style={{height:100}}>
<Card sx={{ width:550,marginLeft:5,marginTop:3,borderRadius:3,height:'auto' }}>
 <Typography variant="body2" color="text.secondary" >
  <div style={{ cursor:'pointer',marginTop:10,display:'flex',flexDirection:'row',marginLeft:8}}>
  <Avatar 
    alt='Remy Sharp' src='/chakraborty.png'
   >
   </Avatar>
   <div style={{marginLeft:8,color:'#000',fontWeight:'bold',fontSize:'20',fontFamily:'inherit',letterSpacing:1}}>
   Chakraborty And Lahkar Innovations Private Limited
   <br/>
   
   </div>
  </div>

  <div style={{marginLeft:50,letterSpacing:1}}>

  This is a for-profit company that has the expertise and provides products and services 
  in fields related to all the branches of computer and technology, including but not limited to
  </div><br/>

<div style={{color:'#000',marginLeft:50}}>
What do we give?
<br/>
1. Certification from IIT Bhubaneswar<br/>
2. Recommendation letter from our end<br/>

Structure of the internship:
<br/>
1. The duration can be increased depending on whether they are willing to work further or not<br/>
2. Completely remote<br/>
3. There is no fixed 9 to 5 schedule during the day, but one has to complete the given tasks within the given timeline<br/><br/>
<b>Skill(s) required : </b>
CSS
HTML
JavaScript
ReactJS

          </div>
         
 <br/>

 </Typography>

     </Card>
     </div>


 

<Card sx={{ maxWidth: 340,marginLeft:5,borderRadius:3,marginTop:3,height:400 ,cursor:'pointer'}}>
    <img src="/hiring.png" height='400'  />
    </Card>



</div>



</div>
  );

}
