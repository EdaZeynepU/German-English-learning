// import React, { useState } from 'react'
// import {Stack, Card, Button, Paper,Typography} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Unstable_Grid2';

// interface QuestionProps {
//   answer: String;
//   question: String;
//   fullAnswers: String[];
// }



// const Question: React.FC<QuestionProps> = ({ answer,question,fullAnswers })=>{

//   const [coloro, setColor] = useState("success")

//   function answerCheck(arg0: String): React.MouseEventHandler<HTMLButtonElement>| any {
//     if (arg0==fullAnswers[3]) {
//       setColor("success");
//     }else{
//       setColor("error");
//     }
//   }

//   return (
        
//                 <Grid xs={5} md={3}>
//                   <Paper elevation={2} sx={{width:"250px",textAlign:"center",backgroundColor:"success"}} >
//                     <Typography component="div" variant='h6'>
//                       What is {question} ?
//                     </Typography>

//                     {/* {
//                     Math.floor(Math.random()*4)
//                     for (let index = 0; index < 3; index++) {
//                       {<Button>{answer}</Button>}
//                     }
//                     } */}
//                     <Button onClick={()=>{fullAnswers[0]==answer? console.log("hey"):console.log("no")}}>{fullAnswers[0]}</Button>
//                     <Button onClick={answerCheck("1")}>{fullAnswers[1]}</Button>
//                     <Button onClick={answerCheck("2")}>{fullAnswers[2]}</Button>
//                   </Paper>
//                 </Grid>
              
//   )
// }

// export default Question

import React, { useState } from 'react';
import { Stack, Card, Button, Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';

interface QuestionProps {
  answer: String;
  question: String;
  fullAnswers: String[];
}

const Question: React.FC<QuestionProps> = ({ answer, question, fullAnswers }) => {
  const [color, setColor] = useState('');

  function answerCheck(selectedAnswer: String): void {
    if (selectedAnswer === answer) {
      setColor('rgb(54, 225, 54)');
    } else {
      setColor('error');
    }
    
  }

  return (
    <Grid xs={5} md={3} >
      <Paper elevation={2} sx={{ width: '250px',padding:"20px", textAlign: 'center'}}>
        <Typography component="div" variant="h6" sx={{color:color,padding:"0px"}}>
          What is {question}?
        </Typography>

        <Button variant={color == 'rgb(54, 225, 54)' && fullAnswers[0]==answer ? 'contained' : 'outlined'} onClick={() => answerCheck(fullAnswers[0])}>{fullAnswers[0]}</Button>
        <Button variant={color == 'rgb(54, 225, 54)' && fullAnswers[1]==answer ? 'contained' : 'outlined'} onClick={() => answerCheck(fullAnswers[1])}>{fullAnswers[1]}</Button>
        <Button variant={color == 'rgb(54, 225, 54)' && fullAnswers[2]==answer ? 'contained' : 'outlined'} onClick={() => answerCheck(fullAnswers[2])}>{fullAnswers[2]}</Button>
      </Paper>
    </Grid>
  );
}

export default Question;
