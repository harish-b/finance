import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

    function AppHeader({headerInput,handleTFChange, submitBtnClick}) {
        return (  
            <Toolbar style={{ marginRight:10,  justifyContent:"space-between" }}>
                <TextField
                    id="standard-name"
                    label="Find order for.."
                    // className={classes.textField}
                    value={headerInput}
                    onChange={handleTFChange}
                    margin="normal"
                />
                <button onClick={()=>submitBtnClick()} className='btn-order'>NEW ORDER</button> 
            </Toolbar>
        );
}
 
export default AppHeader;