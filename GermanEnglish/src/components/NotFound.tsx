import React from 'react'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { Typography } from '@mui/material';

function NotFound() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
        <EmojiFlagsIcon fontSize='large'/>
        <Typography component="div" variant='h2'>
          Not Found
        </Typography> 
        <EmojiFlagsIcon fontSize='large'/>
    </div>
  )
}

export default NotFound