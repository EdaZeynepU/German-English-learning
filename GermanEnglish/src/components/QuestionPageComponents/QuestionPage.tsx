import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Questions from "./Questions";




function QuestionPage() {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {

},);


    return (
    <Stack sx={{justifyContent:"center",padding:"20px",background:"linear-gradient(180deg,gray 0%, rgba(255,255,255,1) 100%)"}}>
        {isStarted? <Questions/>:
            <Button onClick={()=>{setIsStarted(true)}}>Başla</Button>
            
        }
    </Stack>
            
  )
}

export default QuestionPage