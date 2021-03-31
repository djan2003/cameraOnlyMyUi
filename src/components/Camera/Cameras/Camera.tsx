import React, {useState} from "react";
import './camera.css';
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {NavLink} from "react-router-dom";
import {Header} from "../HeaderForCamera/Header";
import {ButtonForRemoveCamera} from "../Buttons/ButtonForAdd/RemoveCamera";

function Camera() {
    const [showAllCamera, setShowAllCamera] = useState(true)
    const removeCamera = () => {
        setShowAllCamera(!showAllCamera)
    }
    return (
        <div>
            <div>
                <Header/>
                <div className={"check"}>
                    <div className={"camera1"}>
                        <iframe src="https://www.youtube.com/embed/1EiC9bvVGnk"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                    </div>
                    {showAllCamera && <div className={"camera1"}>
                        <iframe src="https://www.youtube.com/embed/jbqT0fTj088"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                    </div>}

                </div>
              {/*  <ButtonForRemoveCamera />*/}
                <FormGroup className={"btn"}>
                    <FormControlLabel
                        control={<Switch onChange={removeCamera}/>}
                        label="remove/add second camera"
                    />
                </FormGroup>
            </div>
        </div>


    );
}

export default Camera;





















