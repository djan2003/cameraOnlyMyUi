import React, {useState} from "react";
import './App.css';
import {Login} from "./components/Login/Login";
import Camera from "./components/Camera/Cameras/Camera";
import {BrowserRouter, HashRouter, Redirect, Route} from "react-router-dom";

const App = () => {
    return <div className={"app"}>
        <HashRouter>
            <Route exact path={"/"} render={() => <Camera/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
         {/*   <Redirect path={'*'} to={"404"}/>*/}
        </HashRouter>

    </div>

}


export default App;





















