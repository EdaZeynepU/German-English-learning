import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import ArrowBack from "@mui/icons-material/ArrowBack";


interface questionProps{
  team:string,
}

const QuestionPage: React.FC<questionProps> = ({team})=> {
  const [isStarted, setIsStarted] = useState(false); //is game started

  useEffect(() => {
    //Runs on the first render
    //And any time isStarted changes
  }, [isStarted]);


  const goBack=()=>{
    window.location.reload();
  }

  return (
    <Stack
      sx={{
        justifyContent: "center",
        padding: "20px",
        background: "linear-gradient(180deg,gray 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      {
        isStarted ? (//it's true then give questions
          <><Questions category={team} />
          <Button color="secondary" onClick={goBack} className="goBackBtn" startIcon={<ArrowBack/>} >Back</Button>
          </>
        ) : (//it's false then give the start button
          <Button
            onClick={() => {
              setIsStarted(true);
            }}
            color="secondary"
            variant="contained"
            sx={{width:"30%",minWidth:"200px",height:"60px",fontSize:"20px",margin:"30px auto"}}
          >
            Start
          </Button>
        )
      }
    </Stack>
  );
}

export default QuestionPage;
