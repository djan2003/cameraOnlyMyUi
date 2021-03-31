import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


export const Header =()=>{
    return(
        <AppBar position="static">
            <Toolbar>
                <NavLink className={"link"} to={"/login"}>
                    <Button>
                        <span className={"link"}>Login</span>
                    </Button>
                </NavLink>
                <NavLink className={"link"} to={"/login"}>
                    <Button>
                        <span className={"link"}>Add New Camera</span>
                    </Button>
                </NavLink>
                <NavLink className={"link"} to={"/login"}>
                    <Button>
                        <span className={"link"}>request report</span>
                    </Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}