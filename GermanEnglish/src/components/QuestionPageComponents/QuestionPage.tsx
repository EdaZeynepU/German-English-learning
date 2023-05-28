import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";

function QuestionPage() {
  const [isStarted, setIsStarted] = useState(false); //is game started

  useEffect(() => {
    //Runs on the first render
    //And any time isStarted changes
  }, [isStarted]);

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
          <Questions />
        ) : (//it's false then give the start button
          <Button
            onClick={() => {
              setIsStarted(true);
            }}
          >
            Başla
          </Button>
        )
      }
    </Stack>
  );
}

export default QuestionPage;
