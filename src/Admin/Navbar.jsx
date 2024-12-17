import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AirplayIcon from '@mui/icons-material/Airplay';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
export default function Navbar() {
    const navigate = useNavigate()
    const theme = useTheme()
    const [FilmClick, setFilmClick] = useState(false)
    const [UserClick, setUserClick] = useState(false)
    const ClickFilm =() =>{
        setFilmClick(!FilmClick)
    }
    const ClickUser = () => {
        setUserClick(!UserClick)
    }
    const [dashboardClick, setDashboardClick] = useState(true)
    const ClickDashboard = () => {
      setItemIndex(-1)
      setUserIndex(-1)
        setDashboardClick(true)
        navigate('/admin/dashboard')
    }
    const [itemIndex, setItemIndex] = useState(null)
    const [userIndex, setUserIndex] = useState(null)
    const films = [
      { label: 'OverView', url: '/admin/filmOverview', icon: <LayersIcon></LayersIcon> },
        { label: 'Add film', url: '/admin/filmAdd', icon: <VideoCallIcon></VideoCallIcon>},
        { label: 'Film Episode', url: '/admin/filmEpisode', icon: <AirplayIcon></AirplayIcon> },
    ]
    const users = [
      { label: 'OverView', url: '/admin/userOverview', icon: <LayersIcon></LayersIcon> },
      { label: 'Add user', url: '/admin/userAdd', icon: <GroupAddIcon></GroupAddIcon>},

    ]
    const clickitem = (a, index) => {
      navigate(`${a}`)
      setItemIndex(index)
      setUserIndex(-1)
      setDashboardClick(false)
    }
    const clickuserIndex = (a, index) => {
      navigate(`${a}`)
      setUserIndex(index)
      setItemIndex(-1)
      setDashboardClick(false)
    }
  return (
    <Box sx = {{position: 'fixed', top: '60px', borderRight: `1px solid ${theme.palette.mode === 'light' ? '#585d66' : '#84868a'}`, width: '22vw', height: '100vh'}}>
     <Box onClick={ClickDashboard} sx ={{display: 'flex', marginTop: '20px', height: '40px', gap: '20px', paddingLeft: '20px', fontSize: '18px', alignItems: 'center', cursor: 'pointer',backgroundColor:
        dashboardClick
          ? theme.palette.mode === 'light'
            ? '#e6e5e3'
            : '#525354' 
          : 'transparent'}}>
        <DashboardIcon style={{fontSize: '30px'}}></DashboardIcon>
        <div>Dashboard</div>
     </Box>
     <Box onClick ={ClickFilm} className = 'tag' sx ={{display: 'flex', marginTop: '10px', height: '40px', gap: '20px', paddingLeft: '20px', fontSize: '18px', alignItems: 'center', position: 'relative' }}>
        <MissedVideoCallIcon style={{fontSize: '30px'}}></MissedVideoCallIcon>
     <div>Films</div>
     {!FilmClick && <ExpandMoreIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandMoreIcon>}
     {FilmClick && <ExpandLessIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandLessIcon>}
     </Box>
     {FilmClick && <Box>
      {films.map((item, index) => (
        <Box key = {index} onClick = {() => clickitem(item.url, index)} sx={{height: '30px', paddingLeft: '40px', display: 'flex', gap: '15px', cursor: 'pointer',  backgroundColor:
        index === itemIndex
          ? theme.palette.mode === 'light'
            ? '#e6e5e3'
            : '#525354' 
          : 'transparent', alignItems: 'center'}}>
          {item.icon}
          {item.label}</Box>
      )
      )}
      </Box>}

     <Box onClick ={ClickUser} className = 'tag' sx ={{display: 'flex', marginTop: '10px', height: '40px', gap: '20px', paddingLeft: '20px', fontSize: '18px', alignItems: 'center', position: 'relative'}}>
        <SupervisedUserCircleIcon style={{fontSize: '30px'}}></SupervisedUserCircleIcon>
     <div>Users</div>
     {UserClick && <ExpandLessIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandLessIcon>}
     {!UserClick &&<ExpandMoreIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandMoreIcon>}
    
     </Box>
     {UserClick && <Box>
      {users.map((item, index) => (
        <Box key = {index} onClick = {() => clickuserIndex(item.url, index)} sx={{height: '30px', paddingLeft: '40px', display: 'flex', gap: '15px', cursor: 'pointer',   backgroundColor:
        index === userIndex
          ? theme.palette.mode === 'light'
            ? '#e6e5e3' 
            : '#525354' 
          : 'transparent', alignItems: 'center'}}>
          {item.icon}
          {item.label}</Box>
      )
      )}
      </Box>}
      <Box  className='logout' sx ={{ display: 'flex', paddingLeft: '20px', height: '40px', marginTop: '20px', alignItems: 'center'}}>

        <div><AlertDialog></AlertDialog></div>
        </Box>
    </Box>
  )
}

function AlertDialog({click}) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosee = () => {
    setOpen(false);
    click();
  };
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.reload()
  }

  return (
    <React.Fragment>
      <Box variant="outlined" onClick={handleClickOpen} sx ={{display: 'flex', gap: '20px', paddingLeft: '5px', width: '22vw'}}>
      <LogoutIcon></LogoutIcon>
        Log out
      </Box>
      <Dialog
        open={open}
        onClose={handleClosee}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to log out !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Please confirm
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout}>YES</Button>
          <Button onClick={handleClosee} autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}