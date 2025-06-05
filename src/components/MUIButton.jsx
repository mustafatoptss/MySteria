import React from 'react'
import {Button, AppBar, Toolbar, IconButton, Typography} from '@mui/material'
import { Menu } from '@mui/icons-material'

function MUIButton() {
  return (
    <div>
        
       <AppBar position="fixed" style={{backgroundColor : "black", height: "120px"}}>
         <Toolbar>
           <IconButton edge="start" color="inherit" aria-label="menu">
             <Menu />
           </IconButton>
           <Typography variant="h6">
             
           </Typography>
         </Toolbar>
       </AppBar>

        <Button  color="default">sadasdas</Button>
    </div>
  )
}

export default MUIButton