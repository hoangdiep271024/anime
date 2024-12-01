import React from "react";
import Box from "@mui/material/Box";
import "./Header.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ChangeMode from "../ChangeMode";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Type from "./Type";
import Danhmuc from "./Danhmuc";
import Level from "./Level";
import Login from "../Account/Login";
import { useNavigate } from "react-router-dom";
import AccountHeader from "../Account/AccountHeader";

export default function Header() {
  const theme = useTheme();
  const [searchClick, setSearchClick] = useState(false);
  const ClickSearch = () => {
    setSearchClick(!searchClick);
  };
  const [Typehover, setTypehover] = useState(false);
  const [Danhmuchover, setDanhmuchover] = useState(false);
  const [Levelhover, setLevelhover] = useState(false);
  const [isLogin, setIsLogin ] = useState(false)
  const [userInfor, setUserInfor] = useState([]);
  useEffect(() => {
    fetch('https://animetangobackend.onrender.com/api/userInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        if(responseData.success){
          setIsLogin(true)
          setUserInfor(responseData.userInfo[0])
        }
        else{
          setIsLogin(false)
        }
        
      })
      .catch(error => console.error('Error:', error));
  }, []);




  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: theme.palette.mode === "dark" ? "#3e3d40" : "#FAFAFA",
        height: "100px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
        zIndex: '10',
        position: "fixed",
        top: '0',
        left: '0',
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 10px rgba(255, 255, 255, 0.6)"
            : "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Link
        className="web__name"
        style={{ cursor: "pointer", textDecoration: "none" }}
        href="/home"
      >
        <img className="logo" src="/logo.png"></img>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "800",
            background: "linear-gradient(90deg, #02c2f7, #400af2)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            width: "180px",
            cursor: "pointer",
          }}
          className="logo__text"
        >
          Animetango
        </Typography>
      </Link>
      <div
        style={{
          display: "flex",
          width: "35%",
          height: "100%",
          gap: "32px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          onMouseEnter={() => setDanhmuchover(true)}
          onMouseLeave={() => setDanhmuchover(false)}
          sx={{ position: "relative", display: "inline-block" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="navbar__child"
          >
            Danh mục
            <KeyboardArrowDownIcon className="rotate-icon" />
          </Link>
          {Danhmuchover && <Danhmuc />}
        </Box>

        <Box
          onMouseEnter={() => setTypehover(true)}
          onMouseLeave={() => setTypehover(false)}
          sx={{ position: "relative", display: "inline-block" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="navbar__child"
          >
            Thể loại
            <KeyboardArrowDownIcon className="rotate-icon" />
          </Link>
          {Typehover && <Type />}
        </Box>
        <Box
          onMouseEnter={() => setLevelhover(true)}
          onMouseLeave={() => setLevelhover(false)}
          sx={{ position: "relative", display: "inline-block" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="navbar__child"
          >
            Trình độ <KeyboardArrowDownIcon className="rotate-icon" />
          </Link>
          {Levelhover && <Level />}
        </Box>

        <Link
          style={{
            textDecoration: "none",
            color: theme.palette.mode === "light" ? "black" : "white",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          href='/gioi_thieu'
          className="navbar__child"
        >
          Giới thiệu
        </Link>
      </div>

      <div
        className="search"
        style={{
          width: "22%",
          marginLeft: "5%",
          display: "flex",
          justifyContent: "end",
          transform: searchClick ? "scale(0.9)" : "scale(1)",
        }}
      >
        {!searchClick && (
          <Box
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              border: `1px solid ${
                theme.palette.mode === "light" ? "black" : "white"
              }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.5s ease",
            }}
            onClick={ClickSearch}
          >
            <SearchIcon />
          </Box>
        )}
        {searchClick && (
          <Box
            sx={{
              width: "100%",
              height: "40px",
              position: "relative",
              transition: "0.5s ease",
              transform: searchClick ? "scale(1)" : "scale(0.9)",
            }}
          >
            <SearchIcon
              style={{
                position: "absolute",
                top: "7px",
                left: "5px",
                color: "black",
              }}
            />
            <input
              type="text"
              placeholder="Tìm kiếm....."
              style={{
                width: "100%",
                outline: "none",
                height: "40px",
                borderRadius: "10px",
                border: "none",
                paddingLeft: "35px",
                fontSize: "17px",
              }}
            ></input>
            <CloseIcon
              style={{
                position: "absolute",
                top: "7px",
                right: "10px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={ClickSearch}
            />
          </Box>
        )}
      </div>
      <Box sx={{ marginRight: "16px", marginLeft: "20px" }}>
        {!isLogin && <PositionedMenu />}
        {isLogin && <AccountHeader name= 'hoang diep'></AccountHeader>}
      </Box>
      <ChangeMode />
    </Box>
  );
}
function PositionedMenu() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [loginClick, setLoginClick] = useState(false)
  const ClickLogin = () => {
    setAnchorEl(null);
    setLoginClick(!loginClick)
  }
  const ClickSignup = () => {
    setAnchorEl(null);
    navigate('/signup')
  }

  return (
    <div>
      <Box
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: "18px", cursor: "pointer" }}
      >
        Tài khoản?
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
        style={{ marginTop: "30px" }}
      >
        <MenuItem onClick={ClickSignup}>Đăng ký</MenuItem>
        <MenuItem onClick={ClickLogin}>Đăng nhập</MenuItem>
      </Menu>
      {loginClick && <>
              <Box
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 11,
                }}
                onClick={ClickLogin} />{" "}
              <Box sx={{position: 'absolute', zIndex: '20', top: '30vh', left: '35vw'}}><Login CloseIconn={ClickLogin}></Login></Box>  
              
            </>}
    </div>
  );
}
