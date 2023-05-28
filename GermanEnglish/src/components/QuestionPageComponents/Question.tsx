import React, { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

//set interface to take props
interface QuestionProps {
  answer: String;
  question: String;
  fullAnswers: String[];
}

const Question: React.FC<QuestionProps> = ({ answer, question, fullAnswers }) => {
  const [color, setColor] = useState('');

//set the color to green if the answer is true
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
{/* question */}
        <Typography component="div" variant="h6" sx={{color:color,padding:"0px"}}>
          What is {question}?
        </Typography>
{/* if choosen button is true then set variant the contained to express the answer */}
        <Button variant={color == 'rgb(54, 225, 54)' && fullAnswers[0]==answer ? 'contained' : 'outlined'} onClick={() => answerCheck(fullAnswers[0])}>{fullAnswers[0]}</Button>
        <Button variant={color == 'rgb(54, 225, 54)' && fullAnswers[1]==answer ? 'contained' : 'outlined'} onClick={() => answerCheck(fullAnswers[1])}>{fullAnswers[1]}</Button>
        <Button variant={color == 'rgb(54, 225, 54)' && fullAnswers[2]==answer ? 'contained' : 'outlined'} onClick={() => answerCheck(fullAnswers[2])}>{fullAnswers[2]}</Button>
      </Paper>
    </Grid>
  );
}

export default Question;
