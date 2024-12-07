import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstScreen from "./page/FirstScreen";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Introduce from "./page/Introduce";
import Level from "./page/Level";
import AccountShow from "./page/AccountShow";
import FilmDetail from "./page/FilmDetail";
import FilmWatch from "./page/FilmWatch";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<FirstScreen />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/introduce" element={<Introduce/>}/>
        <Route path="/level/:level" element= {<Level/>}/>
        <Route path="/account" element= {<AccountShow/>}/>
        <Route path="/film/:film_name" element= {<FilmDetail/>}/>
        <Route path="/film/:film_name/:episode" element= {<FilmWatch/>}/>
      </Routes>
    </Router>);

}

export default App;
