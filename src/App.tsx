import React from 'react';
import './App.css';
import Header from "./site/Нeader";
import Body from "./site/Body";
import Footer from "./site/Footer";
import NewComponent from "./map/Map";



function App() {
    return (
        <div>
            <Header title={'NEW HEADER'}  />
            <Body titleForBody = {'NEW BODY'} />
            <Footer titleForFooter = {'NEW FOOTER'} />
            <NewComponent students={"new component" } />

        </div>
    )

}


export default App;



