import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AccountHeader(props) {
const defaultImage = '/avatar.jpg'
const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const AccountClick = () => {
      setAnchorEl(null);
      navigate('/tai_khoan')

    }
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
          <MenuItem onClick={AccountClick}>Tài khoản</MenuItem>
          <MenuItem onClick={handleClose}>Hồ sơ</MenuItem>
          <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
        </Menu>
    </>
  )}
  
  