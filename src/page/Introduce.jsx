import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import Box  from '@mui/material/Box'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import StarsIcon from '@mui/icons-material/Stars';
import { useTheme } from '@emotion/react';

export default function Introduce() {
  const theme =useTheme();
  return (
    <Box>
    <Header/>
    <Box sx= {{position: 'relative', marginTop: '100px', width: '100vw', height: '85vh'}}>
        <img src='/animefull.png' style={{width: '100vw', height: '85vh', zIndex: '2', position: 'absolute'}}></img>
        <div style={{position: 'absolute', backgroundColor: 'rgb(212, 106, 19, 0.5)', zIndex: '5', width: '100%', height: '100%'}}></div>
        <div style={{width: '100%', position: 'absolute', zIndex: '7', color: '#fff', top: '30%'}}>
        <p style={{textAlign: 'center', fontWeight: '800', fontSize: '40px'}}>ANIMETANGO</p>
        <p style={{textAlign: 'center', fontSize: '40px'}}>HỌC TIẾNG NHẬT QUA PHIM</p>
        </div>
    </Box>
    <Box sx={{width: '100vw',display: 'flex', justifyContent: 'center'}}>
    <Box sx={{width: '70vw', height: 'auto', minHeight: '300px', backgroundColor: '#f5f5f5', borderRadius: '10px', position: 'absolute', zIndex: '8', marginTop: '-7%', paddingY: '20px', paddingLeft:'10px', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5);'}}>
     <p style={{textAlign: 'center', fontSize: '30px', color: 'black'}}><strong>NHỮNG THÀNH TỰU ĐÁNG TỰ HÀO</strong></p>
     <Box sx ={{display: 'flex', width: '100%', gap: '10%', textWrap: 'wrap'}}>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', width: '20vw'}}>
          <SupervisedUserCircleIcon style={{fontSize: '80px', color: '#EF4444'}}/>
          <div style={{padding: '0'}}>
            <div style={{fontSize: '30px', color: '#ef4444',  marginBottom: '0px'}}><strong>50 triệu</strong></div>
            <div style={{fontSize: '18px', fontFamily: 'revert', color: 'black'}}>Lượt tiếp cận trên mạng xã hội tiktok, facebook</div>
          </div>
        </div>

        <div style={{display: 'flex', gap: '10px', alignItems: 'center', width: '20vw'}}>
          <PersonAddAlt1Icon style={{fontSize: '80px', color: '#EF4444'}}/>
          <div style={{padding: '0'}}>
            <div style={{fontSize: '30px', color: '#ef4444',  marginBottom: '0px'}}><strong>80000+</strong></div>
            <div style={{fontSize: '18px', fontFamily: 'revert', color: 'black'}}>Lượt đăng kí sử dụng trên website Animetango</div>
          </div>
        </div>

        <div style={{display: 'flex', gap: '10px', alignItems: 'center', width: '20vw'}}>
          <AccountCircleIcon style={{fontSize: '80px', color: '#EF4444'}}/>
          <div style={{padding: '0'}}>
            <div style={{fontSize: '30px', color: '#ef4444',  marginBottom: '0px'}}><strong>3000+</strong></div>
            <div style={{fontSize: '18px', fontFamily: 'revert', color: 'black'}}>Hội viên đang sử dụng thường xuyên</div>
          </div>
        </div>
      
     </Box>
     <Box sx= {{display: 'flex', justifyContent:'space-around', marginTop: '40px'}}>
     <div style={{display: 'flex', gap: '10px', alignItems: 'center', width: '20vw'}}>
          <PeopleIcon style={{fontSize: '80px', color: '#EF4444'}}/>
          <div style={{padding: '0'}}>
            <div style={{fontSize: '30px', color: '#ef4444',  marginBottom: '0px'}}><strong>1800+</strong></div>
            <div style={{fontSize: '18px', fontFamily: 'revert', color: 'black'}}>Lượt tham gia luyện tiếng Nhật qua phim</div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center', width: '20vw'}}>
          <StarsIcon style={{fontSize: '80px', color: '#EF4444'}}/>
          <div style={{padding: '0'}}>
            <div style={{fontSize: '30px', color: '#ef4444',  marginBottom: '0px'}}><strong>4.8/5</strong></div>
            <div style={{fontSize: '18px', fontFamily: 'revert', color: 'black'}}>Lượt đánh giá phản hồi hài lòng</div>
          </div>
        </div>
     </Box>
    </Box>
    </Box>

    <Box>
      <div style={{display: 'flex', gap: '20px', marginTop: '400px', width: '100vw', justifyContent: 'center', gap: '50px'}}>
        <img src='/image.jpeg' style={{width: '400px', height: 'auto', objectFit: 'cover'}}></img>
        <div style={{width: '30vw'}}>
          <div style={{fontSize: '30px'}}><strong>GIỚI THIỆU ANIMETANGO</strong></div>
          <div style={{width: '140px', height: '7px', backgroundColor: 'red', borderRadius: '5px'}}></div>
          <div style={{color: theme.palette.mode === 'dark' ? '#b0b2b5' : '#7d7e80', marginTop: '15px', fontSize: '17px'}}> Ngày thành lập: 13/4/2021</div>
          <br></br>
          <div>Animetango là sản phẩm sáng tạo đột phá do chính người Việt Nam sáng lập và phát triển với mong muốn đem lại giải pháp học tập tiếng nhật hiệu quả và nhẹ nhàng hơn.</div>
          <br></br>
          <div>Thông qua phim anime, bài hát và tin tức...giúp người học vừa thư giãn giải trí vừa nâng cao được năng lực tiếng nhật của bản thân để tự tin hơn mỗi ngày.</div>
        </div>
      </div>
    </Box>

    <Box sx= {{width: '100vw', height: 'auto', minHeight: '35vh', backgroundColor: '#F3F4F6', marginTop :'15vh', paddingBottom: '65px'}}>
      <br></br>
         <div style={{textAlign: 'center', fontSize: '30px', fontWeight: '700', fontFamily: 'monospace'}}>TẦM NHÌN & SỨ MỆNH</div>
         <div style={{textAlign: 'center'}}>" Trở thành đơn vị tin cậy và hàng đầu Việt Nam cung cấp giải pháp công nghệ giáo dục "</div>
         <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10vw', marginTop: '20px'}}>
          <div style={{width: '32vw', height: 'auto', minHeight: '25vh', borderRadius: '5px', overflow: 'hidden', backgroundColor: 'white'}}>
            <div style={{height: '20%', backgroundColor:'#EF4444', textAlign: 'center', alignContent: 'center', color: 'white', fontSize: '20px'}} >TẦM NHÌN</div>
            <div style={{marginTop: '10px', marginLeft: '10px', fontSize: '18px'}}>2025: Trở thành đơn vị hàng đầu ứng dụng công nghệ để cung cấp giải pháp học Tiếng Nhật hiệu quả và thú vị</div>
            <br></br>
            <div style ={{marginLeft: '10px', fontSize: '18px'}}>2030: Trở thành đơn vị số 1 cung cấp hệ sinh thái giải pháp học tiếng Nhật dễ dàng, hiệu quả, bền vững</div>
          </div>

          <div style={{width: '32vw', height: 'auto', minHeight: '25vh', borderRadius: '5px', overflow: 'hidden', backgroundColor: 'white'}}>
            <div style={{height: '20%', backgroundColor:'#EF4444', textAlign: 'center', alignContent: 'center', color: 'white', fontSize: '20px'}}>SỨ MỆNH</div>
            <br></br>
            <br></br>
            <div style ={{marginLeft: '10px', fontSize: '18px'}}>Giúp người Việt tự tin nghe nói và giao tiếp Tiếng Nhật hơn mỗi ngày</div>
           
          </div>
         </Box>
    </Box>
    {/* <Footer/> */}
    </Box>
  )
}
