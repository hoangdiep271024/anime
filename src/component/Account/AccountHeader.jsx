import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function AccountHeader(props) {
const defaultImage = '/avatar.jpg'
const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isProfile, setIsProfile] = useState(false)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const AccountClick = () => {
      setAnchorEl(null);
      navigate('/account')

    }
    const ClickProfile = ()=> {
      setAnchorEl(null);
      setIsProfile(!isProfile);
    }
    useEffect(() => {
      if (isProfile) {
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = 'auto';  
      }
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isProfile]);
  return (
    <>
    <Box sx={{display: 'flex',cursor: 'pointer', alignItems: 'center', gap: '10px'}}  id="demo-positioned-button"
    aria-controls={open ? "demo-positioned-menu" : undefined}
    aria-haspopup="true"
    aria-expanded={open ? "true" : undefined}
    onClick={handleClick}>
        <img src= {props.image || defaultImage} style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '100%'}}></img>
        <div style={{fontSize: '20px', fontWeight: '800', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{props.name}</div>
    </Box>
    <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{ marginTop: "43px" }}
        >
          <MenuItem onClick={AccountClick}>Account</MenuItem>
          <MenuItem onClick={ClickProfile}>Profile</MenuItem>
          <MenuItem onClick={handleClose}><AlertDialog/></MenuItem>
        </Menu>

        {isProfile && 
        <>
        <Box sx ={{ position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 9,
                  overflow: 'hidden'
                  }}
                  onClick={ClickProfile}>                           
          </Box>
          <Profile style={{position : 'absolute', top: '0', right: '0', zIndex: '1000'}}></Profile>
          </>}
    </>
  )}
  
 function AlertDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Box variant="outlined" onClick={handleClickOpen}>
          Log out
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Are you sure to log out !
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>YES</Button>
            <Button onClick={handleClose} autoFocus>
              NO
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }