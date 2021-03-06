import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";

export const Login = () => {
    return <Grid container justify="center">
        <AppBar position="static">
            <Toolbar>
                <NavLink className={"link"} to={"/"}>
                    <Button>
                        <span className={"link"}>Go Back</span>
                    </Button>
                </NavLink>
            </Toolbar>
        </AppBar>
        <Grid item xs={4}>
            <FormControl>
                <FormLabel>
                    <p>if you have some problem write:</p>
                    <p>Email: someMail@someMail.com</p>
                </FormLabel>
                <FormGroup>
                    <TextField
                        label="Email"
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                    />
                    <FormControlLabel
                        label={'Remember me'}
                        control={<Checkbox />}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                </FormGroup>
            </FormControl>
        </Grid>
    </Grid>
}

