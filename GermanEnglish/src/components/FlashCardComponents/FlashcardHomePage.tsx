import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import Flashcards from './Flashcards';

function FlashcardHomePage() {

    const [category, setCategory] = useState("")
  return (
   <>

        {
            category.length==0? ( <Grid container justifyContent="center" >
                <Grid item sx={{marginTop:"40px",marginBottom:"40px",display:"flex",justifyContent:"center"}} xs={12}>
                <Typography component="div" variant='h3'>Choose your Category</Typography>
                    </Grid>
        <Box sx={{display:"flex",flexWrap:"wrap",width:"95vw",justifyContent:"center"}}>
            <Button variant='contained' className='btn-category' onClick={()=>{setCategory("colors")}}>
            Colors
        </Button>
        <Button variant='contained' className='btn-category' onClick={()=>{setCategory("drinks")}}>
            Drinks
        </Button> 
        <Button variant='contained' className='btn-category' onClick={()=>{setCategory("partsOfTheHouse")}}>
            Parts Of The House
        </Button> 
        <Button variant='contained' className='btn-category' onClick={()=>{setCategory("foods")}}>
            Foods
        </Button>
        <Button variant='contained' className='btn-category' onClick={()=>{setCategory("animals")}}>
            Animals
        </Button>
        <Button variant='contained' className='btn-category' disabled onClick={()=>{setCategory("numbers")}}>
            Numbers
        </Button>
        <Button variant='contained' className='btn-category' disabled onClick={()=>{setCategory("family")}}>
            Family
        </Button>
        <Button variant='contained' className='btn-category' disabled onClick={()=>{setCategory("countries")}}>
            Countries
        </Button>
        </Box>
        
        </Grid>):<Flashcards team={category}/>
        
        }
        
      </>
  )
}

export default FlashcardHomePage