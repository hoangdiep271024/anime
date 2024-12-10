import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import FilmInfo from '../Film/FilmInfo'
import FilmRelate from '../Film/FilmRelate'
export default function FilmDetail() {
  return (
    <>
    <Header></Header>
    <FilmInfo/>
    
    <FilmRelate/>
    <Footer></Footer>
    </>
  )
}
