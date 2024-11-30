import  Box from '@mui/material/Box'
import React from 'react'
import Header from '../component/Header/Header'
import { useTheme } from '@emotion/react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Level() {
    const theme = useTheme();
    const level = localStorage.getItem('level')
    const countFilm = localStorage.getItem('countFilm')
  return (
    <Box>
    <Header/>
    <div style={{ marginTop: '120px', fontSize: '30px', marginLeft: '2.4%', fontFamily: 'Montserrat', fontWeight: '600', color: theme.palette.mode === 'dark' ? '#c0c2c4' : '#EF4444'}}>{`TRÌNH ĐỘ: ${level}`}</div>
    <div style = {{ display: 'flex', fontSize: '25px', alignItems: 'center', marginLeft: '2.4%', marginTop: '1%', fontFamily: 'mONTSERRAT' }}>
    <div>{`Danh sách phim (${countFilm || ''})`}</div>
    <ArrowForwardIosIcon style={{ marginTop: '2px'}}/>
    <ArrowForwardIosIcon style={{marginLeft: '-15px', marginTop: '2px'}}/>
    </div>
    </Box>
  )
}
