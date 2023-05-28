import React, { useState } from "react";
import Question from "./Question";
import Grid from "@mui/material/Unstable_Grid2";

const fruitMap = new Map<String, String>([
  ["Kaffee", "Coffee"],
  ["Tee", "Tea"],
  ["das Bier", "Beer"],
  ["die Milch", "Milk"],
  ["der Fruchtsaft", "Fruit juice"],
  ["das Wasser", "Water"],
  ["Wein", "Wine"],
  ["das rot", "red"],
]);

const Questions = () => {
  const [values, setvalues] = useState(Array.from(fruitMap.values())); // values from map

  const getRandomStrings = (answer: String): String[] => {
    const randomStrings: String[] = [];

    // random number from 0 to maps size-1 
    const x = Math.floor(Math.random() * fruitMap.size);

    // Add random strings to the array
    randomStrings.push(values[x]);
    randomStrings.push(values[(x + 2) % fruitMap.size]);
    randomStrings.push(values[(x + 4) % fruitMap.size]);
    // If there isn't answer among random values then ad it randomly
    if (randomStrings.indexOf(answer) == -1) {
      randomStrings[x % 3] = answer;
    }
    return randomStrings;
  };

  return (
    <Grid container xs={12} gap={3} sx={{ justifyContent: "center" }}>
      {
        // creating questions for every word
        Array.from(fruitMap.entries()).map(([question, answer], index) => (
          <Question
            key={index}
            answer={answer}
            question={question}
            fullAnswers={getRandomStrings(answer)}
          />
        ))
      }
    </Grid>
  );
};

export default Questions;
