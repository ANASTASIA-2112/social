import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Ptofile";
import News from "./components/Profile/MyPosts/Posts/News";
import Music from "./components/Music/Audio";
import Setting from "./components/Settings/Setting";
import Navbar from "./components/Navbar/Navbar";




export const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>

            <nav className='nav'>
                <Navbar/>
            </nav>

            <div className='app-wrapper-content'>

                <Route path= '/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/post' component={News}/>
                <Route path='/audio' component={Music}/>
                <Route path='/settings' component={Setting}/>
            </div>
        </div>
            </BrowserRouter>
    );
}

export default App;