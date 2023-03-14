import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Avatar } from '@mui/material';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CommentIcon from '@mui/icons-material/Comment';
import AppsIcon from '@mui/icons-material/Apps';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ecf0f1',
  '&:hover': {
    backgroundColor: '#ecf0f1',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Name</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Skills</MenuItem>
      <MenuItem onClick={handleMenuClose}>Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Manage</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
   
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="#000">
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Message</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="#fff"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="#fff"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    
    <Box sx={{ flexGrow: 1 }}>
     
      <AppBar position="static" color='inherit'>
      
        <Toolbar>
        <div style={{marginLeft:90}}>
          <Avatar variant="rounded"
           alt='Remy Sharp' src='/linkedln.png'
          >
            <MenuIcon />
          </Avatar>
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        

         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex',marginRight:40 } }}>
          
            <IconButton size="large" aria-label="show 4 new mails" >
          
              <Badge badgeContent={1} color="error">
               <a href="/Dashboard" target='_self' ><HomeRoundedIcon fontSize="large"/></a> 
              </Badge>
              </IconButton>
          
          
            <IconButton
              size="large"
            
              color="#000"
            >
              <Badge  color="error">
              <a href="/Network" target='_self' >  <PeopleRoundedIcon fontSize="large"/></a>
              </Badge>
            </IconButton>


            <IconButton
              size="large"
            
              color="#000"
            >
              <Badge  color="error">
              <a href="/Jobs" target='_self' > <BusinessCenterRoundedIcon fontSize="large"/></a>
              </Badge>
            </IconButton>


            <IconButton
              size="large"
            
              color="#000"
            >
              <Badge  color="error">
              <a href="/Dashboard" target='_self' >   <CommentIcon fontSize="large"/></a>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
            
              color="#000"
            >
              <Badge  badgeContent={14} color="error">
              <a href="/Note" target='_self' > <NotificationsIcon fontSize="large"/></a>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#fff"
            >
              <AccountCircle fontSize="large"/>
            </IconButton>
           
            <IconButton
              size="large"
            
              color="#000"
            >
              <Badge  color="error">
                <AppsIcon fontSize="large"/>
              </Badge>
            </IconButton>
         
            <IconButton
              
            >
              <span style={{fontSize:15,color:'#d35400'}}>
                Try premium for <br/>free
              </span>
            </IconButton>
          </Box>
         
        </Toolbar>
     
      </AppBar>
     
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}