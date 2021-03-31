import React, {useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const ButtonForRemoveCamera = ()=>{
    const [showAllCamera, setShowAllCamera] = useState(true)
    const removeCamera = () => {
        setShowAllCamera(!showAllCamera)
    }

    return(
        <FormGroup className={"btn"}>
            <FormControlLabel
                control={<Switch onChange={removeCamera}/>}
                label="remove/add second camera"
            />
        </FormGroup>
    )
}